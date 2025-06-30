"use client"

import type React from "react"

interface SmoothScrollLinkProps {
  to: string
  children: React.ReactNode
  className?: string
  offset?: number
}

export function SmoothScrollLink({ to, children, className, offset = 80 }: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const targetElement = document.querySelector(to)
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
