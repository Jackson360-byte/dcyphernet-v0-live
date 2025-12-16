"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const statements = [
  { text: "We design systems that grow businesses.", highlight: "grow" },
  { text: "Automation. Design. Growth.", highlight: "Growth" },
  { text: "Where technology meets creativity.", highlight: "creativity" },
]

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={containerRef} className="relative py-20 sm:py-32 md:py-40 lg:py-48 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {statements.map((statement, index) => {
          const start = index * 0.25
          const end = start + 0.3

          return (
            <StatementBlock
              key={index}
              statement={statement}
              scrollYProgress={scrollYProgress}
              start={start}
              end={end}
              index={index}
            />
          )
        })}
      </div>

      {/* Background accent */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0]),
        }}
        className="absolute top-1/2 left-0 w-1/2 h-64 sm:h-96 bg-gradient-to-r from-[#4B1E78]/10 to-transparent blur-3xl -translate-y-1/2"
      />
    </section>
  )
}

function StatementBlock({
  statement,
  scrollYProgress,
  start,
  end,
  index,
}: {
  statement: { text: string; highlight: string }
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
  start: number
  end: number
  index: number
}) {
  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0.3])
  const y = useTransform(scrollYProgress, [start, end], [50, -50])
  const scale = useTransform(scrollYProgress, [start, start + 0.15], [0.95, 1])

  const words = statement.text.split(" ")

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className={`py-10 sm:py-16 md:py-20 lg:py-24 ${index !== 0 ? "border-t border-border/30" : ""}`}
    >
      <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
        <span className="text-[10px] sm:text-xs text-muted-foreground font-mono shrink-0">
          ({String(index + 1).padStart(2, "0")})
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight tracking-tight">
          {words.map((word, i) => (
            <span
              key={i}
              className={`inline-block mr-2 sm:mr-3 md:mr-4 ${
                word.replace(/[.,]/g, "") === statement.highlight ? "text-[#4B1E78]" : "text-foreground"
              }`}
            >
              {word}
            </span>
          ))}
        </h2>
      </div>
    </motion.div>
  )
}
