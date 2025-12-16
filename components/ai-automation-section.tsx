"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Users, MessageCircle, BarChart3, ArrowRight } from "lucide-react"

const automationFeatures = [
  {
    icon: Users,
    title: "Lead Capture",
    description: "Automatically capture and qualify leads 24/7",
  },
  {
    icon: MessageCircle,
    title: "Customer Communication",
    description: "AI-powered responses that never sleep",
  },
  {
    icon: BarChart3,
    title: "Internal Workflows",
    description: "Streamline operations with smart automation",
  },
  {
    icon: Zap,
    title: "Sales Processes",
    description: "Close deals faster with automated pipelines",
  },
]

export function AIAutomationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const headerOffset = 80
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="solutions" ref={ref} className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#4B1E78]/5 to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest">(AI Solutions)</span>
              <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                AI Business <br />
                <span className="text-[#4B1E78]">Automation</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Transform your business operations with intelligent automation. Our AI solutions work around the clock to
              capture leads, engage customers, and streamline your workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {automationFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-card border border-border hover:border-[#4B1E78]/30 transition-colors duration-300"
                >
                  <div className="p-2 rounded-lg bg-[#4B1E78]/10 shrink-0">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#4B1E78]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-card-foreground text-sm sm:text-base">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, "#contact")}
                className="group inline-flex items-center gap-2 text-[#4B1E78] hover:text-[#5a2591] font-medium transition-colors duration-300 touch-manipulation"
              >
                Learn how automation can help you
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right visual - Animated workflow diagram - hidden on mobile for performance */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative aspect-square max-w-md lg:max-w-lg mx-auto">
              {/* Central hub */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 rounded-full bg-gradient-to-br from-[#4B1E78] to-[#2E0F4F] flex items-center justify-center shadow-2xl shadow-[#4B1E78]/30"
              >
                <span className="text-2xl sm:text-3xl font-bold text-white">AI</span>
              </motion.div>

              {/* Orbiting elements */}
              {[0, 1, 2, 3].map((i) => {
                const angle = (i * 90 + 45) * (Math.PI / 180)
                const radius = 120
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            scale: 1,
                          }
                        : {}
                    }
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                    className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg"
                  >
                    {React.createElement(automationFeatures[i].icon, {
                      className: "w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-[#4B1E78]",
                    })}
                  </motion.div>
                )
              })}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4B1E78" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#6b3fa0" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3].map((i) => {
                  const angle = (i * 90 + 45) * (Math.PI / 180)
                  const x2 = 200 + Math.cos(angle) * 100
                  const y2 = 200 + Math.sin(angle) * 100

                  return (
                    <motion.line
                      key={i}
                      x1="200"
                      y1="200"
                      x2={x2}
                      y2={y2}
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                    />
                  )
                })}
              </svg>

              {/* Animated pulse rings */}
              <motion.div
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 rounded-full border-2 border-[#4B1E78]/30"
              />
              <motion.div
                animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 rounded-full border-2 border-[#4B1E78]/20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
