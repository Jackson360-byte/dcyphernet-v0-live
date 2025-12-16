"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, MessageCircle } from "lucide-react"
import { CalendlyModal } from "./calendly-modal"

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  return (
    <>
      <section id="contact" ref={ref} className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E0F4F] via-[#4B1E78] to-[#2E0F4F]" />

        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-50"
          style={{
            background: "radial-gradient(circle at center, rgba(185, 167, 214, 0.2) 0%, transparent 60%)",
            backgroundSize: "200% 200%",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <span className="text-xs sm:text-sm text-white/60 uppercase tracking-widest">(Get Started)</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Let&apos;s Build Something <span className="text-[#B9A7D6]">Powerful.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed px-4">
              Ready to transform your business with AI automation and stunning digital experiences? Book a free strategy
              call and let&apos;s discuss how we can help you grow.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 sm:pt-4"
            >
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-medium text-[#4B1E78] bg-white rounded-full hover:bg-[#B9A7D6] transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 touch-manipulation"
              >
                Book a 30-Min Strategy Call
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 sm:pt-6 px-4"
            >
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-4 sm:px-6 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#B9A7D6]/20 shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#B9A7D6]" />
                </div>
                <p className="text-sm sm:text-base text-white/80 text-center sm:text-left max-w-md">
                  Have questions or want to share project details first?{" "}
                  <span className="text-[#B9A7D6] font-medium">Chat with Jasper</span>, our AI assistant, in the bottom
                  right corner — available 24/7 to help you get started.
                </p>
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 sm:pt-8 text-sm text-white/50"
            >
              Or reach us at{" "}
              <a
                href="mailto:hello@dcyphernet.com"
                className="text-white/80 hover:text-white underline underline-offset-4 transition-colors"
              >
                hello@dcyphernet.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  )
}
