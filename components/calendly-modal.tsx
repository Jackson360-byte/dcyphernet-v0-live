"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface CalendlyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = "unset"
      }
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
      return () => window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  const calendlyUrl =
    "https://calendly.com/dcyphernet/30min?hide_gdpr_banner=1&background_color=0a0a0a&text_color=fafafa&primary_color=4B1E78"

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl h-[85vh] bg-background rounded-2xl overflow-hidden shadow-2xl border border-border"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-background border-b border-border">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Book Your Strategy Call</h3>
                <p className="text-sm text-muted-foreground">Select a time that works for you</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            <iframe
              src={calendlyUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a call with DCYPHERNET"
              className="bg-background"
              style={{ minHeight: "calc(85vh - 72px)" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
