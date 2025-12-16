"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "TechFlow Platform",
    category: "Web Development",
    image: "/modern-tech-dashboard-dark-purple-theme.jpg",
  },
  {
    title: "Luxe Brand Identity",
    category: "Branding",
    image: "/luxury-brand-identity-mockup-purple-elegant.jpg",
  },
  {
    title: "AI Sales System",
    category: "AI Automation",
    image: "/ai-automation-dashboard-futuristic-purple-interfac.jpg",
  },
  {
    title: "Venture Website",
    category: "Web Development",
    image: "/venture-capital-website-dark-mode-professional.jpg",
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="relative py-20 sm:py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-12 lg:mb-16 gap-4"
        >
          <div>
            <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest">(Selected Work)</span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Our <span className="text-[#4B1E78]">Projects</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md">
            A showcase of our recent work across web development, branding, and AI automation.
          </p>
        </motion.div>

        {/* Projects Grid - improved for mobile */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer touch-manipulation"
    >
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
        <div className="aspect-[4/3] relative">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E0F4F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Arrow icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#4B1E78]" />
          </motion.div>
        </div>
      </div>

      <div className="space-y-1 sm:space-y-2">
        <span className="text-xs sm:text-sm text-[#4B1E78] font-medium">{project.category}</span>
        <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-[#4B1E78] transition-colors duration-300">
          {project.title}
        </h3>
      </div>
    </motion.div>
  )
}
