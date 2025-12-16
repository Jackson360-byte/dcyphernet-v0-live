"use client"

import { useEffect } from "react"

export function JotFormChatbot() {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="019b248e58e2754fbd4c3d93d43041e631a4"]')

    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "https://cdn.jotfor.ms/agent/embedjs/019b248e58e2754fbd4c3d93d43041e631a4/embed.js"
      script.async = true
      document.body.appendChild(script)

      return () => {
        // Cleanup on unmount
        script.remove()
      }
    }
  }, [])

  return null
}
