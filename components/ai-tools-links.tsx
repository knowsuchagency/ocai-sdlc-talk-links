'use client'

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const links = [
  { url: "https://www.flowvoice.ai/", label: "Talk to your Mac" },
  { url: "https://openai.com/chatgpt/mac/", label: "ChatGPT for Mac" },
  { url: "https://v0.dev", label: "AI Web Design" },
  { url: "https://www.anthropic.com/claude", label: "Claude" },
  { url: "https://www.figma.com/ai/", label: "Figma AI" },
  { url: "https://www.cursor.com/", label: "Cursor" },
  { url: "https://repl.it", label: "Repl.it" },
  { url: "https://knowsuchagency.com", label: "Learn More" },
]

export function AiToolsLinks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 tracking-tight">AI Tools & Resources</h1>
        <div className="space-y-4">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              asChild
              className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-xl border border-gray-200 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                <span>{link.label}</span>
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}