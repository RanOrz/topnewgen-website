import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const DATABASE_ID = process.env.NOTION_DATABASE_ID!

export interface LeadData {
  name: string
  email?: string
  phone?: string
  interest?: "Joining" | "Partnership" | "General"
  message?: string
}

export async function saveLead(data: LeadData) {
  await notion.pages.create({
    parent: { database_id: DATABASE_ID },
    properties: {
      Name: {
        title: [{ text: { content: data.name } }],
      },
      ...(data.email && { Email: { email: data.email } }),
      ...(data.phone && { Phone: { phone_number: data.phone } }),
      ...(data.interest && { Interest: { select: { name: data.interest } } }),
      ...(data.message && {
        Message: { rich_text: [{ text: { content: data.message } }] },
      }),
      Status: { select: { name: "New" } },
      Source: { select: { name: "Chat Widget" } },
    },
  })
}
