"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn"
  delay?: number
  threshold?: number
}

const getHiddenStyle = (animation: ScrollAnimationProps["animation"]): React.CSSProperties => {
  switch (animation) {
    case "fadeInLeft":
      return { opacity: 0, transform: "translateX(-24px)" }
    case "fadeInRight":
      return { opacity: 0, transform: "translateX(24px)" }
    case "scaleIn":
      return { opacity: 0, transform: "scale(0.92)" }
    default:
      return { opacity: 0, transform: "translateY(24px)" }
  }
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  const style: React.CSSProperties = isVisible
    ? {
        opacity: 1,
        transform: "none",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }
    : {
        ...getHiddenStyle(animation),
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}
