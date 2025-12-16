"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Bot, Globe, Palette, TrendingUp, MessageSquare } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "AI Business Automation",
    description: "Transform your workflows with intelligent automation systems that scale.",
    accent: true,
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Stunning, performant websites that convert visitors into customers.",
    accent: false,
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Strategic brand development that resonates with your target audience.",
    accent: false,
  },
  {
    icon: TrendingUp,
    title: "Business Growth Strategy",
    description: "Data-driven strategies to accelerate your business growth.",
    accent: false,
  },
  {
    icon: MessageSquare,
    title: "Digital Consulting",
    description: "Expert guidance to navigate the digital landscape successfully.",
    accent: false,
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={ref} className="relative py-20 sm:py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest">(Our Services)</span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            What we <span className="text-[#4B1E78]">do</span>
          </h2>
        </motion.div>

        {/* Services Grid - improved responsive columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-500 cursor-pointer h-full ${
        service.accent
          ? "bg-gradient-to-br from-[#4B1E78] to-[#2E0F4F] border-[#4B1E78]/50 hover:shadow-2xl hover:shadow-[#4B1E78]/20"
          : "bg-card border-border hover:border-[#4B1E78]/50 hover:shadow-xl hover:shadow-[#4B1E78]/10"
      }`}
    >
      {/* Icon */}
      <div
        className={`inline-flex p-2.5 sm:p-3 rounded-xl mb-4 sm:mb-6 ${
          service.accent ? "bg-white/10" : "bg-[#4B1E78]/10 group-hover:bg-[#4B1E78]/20"
        } transition-colors duration-300`}
      >
        <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${service.accent ? "text-white" : "text-[#4B1E78]"}`} />
      </div>

      {/* Content */}
      <h3
        className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${service.accent ? "text-white" : "text-card-foreground"}`}
      >
        {service.title}
      </h3>
      <p className={`text-sm leading-relaxed ${service.accent ? "text-white/70" : "text-muted-foreground"}`}>
        {service.description}
      </p>

      {/* Hover glow effect */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
          service.accent ? "" : "bg-gradient-to-br from-[#4B1E78]/5 to-transparent"
        }`}
      />
    </motion.div>
  )
}
