import Anthropic from "@anthropic-ai/sdk"
import { saveLead, type LeadData } from "@/lib/notion"
import { NEWGEN_SYSTEM_PROMPT } from "@/lib/knowledge-base"

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SAVE_LEAD_TOOL: Anthropic.Tool = {
  name: "save_lead",
  description:
    "Save a visitor's contact information to the CRM when they express interest in NewGen or provide their details. Call this as soon as you have at least a name and one contact method.",
  input_schema: {
    type: "object",
    properties: {
      name: { type: "string", description: "Visitor's full name" },
      email: { type: "string", description: "Visitor's email address" },
      phone: { type: "string", description: "Visitor's phone number" },
      interest: {
        type: "string",
        enum: ["Joining", "Partnership", "General"],
        description: "Type of interest: Joining as agent, Partnership, or General inquiry",
      },
      message: {
        type: "string",
        description: "Brief summary of the visitor's situation or what they're looking for",
      },
    },
    required: ["name"],
  },
}

export async function POST(req: Request) {
  const { messages } = await req.json()

  const allMessages: Anthropic.MessageParam[] = [...messages]

  // Agentic loop — handles tool calls transparently
  while (true) {
    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 1024,
      system: NEWGEN_SYSTEM_PROMPT,
      messages: allMessages,
      tools: [SAVE_LEAD_TOOL],
    })

    if (response.stop_reason === "end_turn") {
      const text = response.content.find((b) => b.type === "text")?.text ?? ""
      return Response.json({ message: text })
    }

    if (response.stop_reason === "tool_use") {
      allMessages.push({ role: "assistant", content: response.content })

      const toolResults: Anthropic.ToolResultBlockParam[] = []

      for (const block of response.content) {
        if (block.type === "tool_use" && block.name === "save_lead") {
          try {
            await saveLead(block.input as LeadData)
            toolResults.push({
              type: "tool_result",
              tool_use_id: block.id,
              content: "Lead saved successfully.",
            })
          } catch (err) {
            console.error("Failed to save lead:", err)
            toolResults.push({
              type: "tool_result",
              tool_use_id: block.id,
              content: "Failed to save lead, but continue the conversation normally.",
              is_error: true,
            })
          }
        }
      }

      allMessages.push({ role: "user", content: toolResults })
    }
  }
}
