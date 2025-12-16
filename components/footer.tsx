"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Twitter, Linkedin, Instagram, Mail, Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"
import { useCallback } from "react"

const footerLinks = {
  services: [
    { name: "AI Automation", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "Branding", href: "#services" },
    { name: "Consulting", href: "#services" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
}

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:hello@dcyphernet.com" },
]

export function Footer() {
  const { theme, toggleTheme } = useTheme()

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
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
  }, [])

  return (
    <footer className="relative py-12 sm:py-16 lg:py-20 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="col-span-2 space-y-4 sm:space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                DCYPHERNET<span className="text-[#4B1E78]">®</span>
              </span>
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground max-sm:text-center max-w-sm leading-relaxed">
              Premium digital solutions and AI business automation. We design systems that grow businesses.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-4 w-full sm:w-auto">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 sm:p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-[#4B1E78] hover:bg-[#4B1E78]/10 transition-colors duration-300 touch-manipulation"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
  <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider mb-3 sm:mb-4">
    Services
  </h4>

  <ul className="space-y-2 sm:space-y-3">
    {footerLinks.services.map((link) => (
      <li key={link.name}>
        <a
          href={link.href}
          onClick={(e) => handleNavClick(e, link.href)}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 touch-manipulation"
        >
          {link.name}
        </a>
      </li>
    ))}
  </ul>
</div>

          {/* Company */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider mb-3 sm:mb-4">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 touch-manipulation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar - improved responsive layout */}
        <div className="pt-6 sm:pt-8 border-t border-border/50 flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground order-2 sm:order-1">
              © {new Date().getFullYear()} DCYPHERNET. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-1 sm:order-2">
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300 border border-border/50 touch-manipulation"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-4 h-4" />
                    <span className="text-sm font-medium">Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" />
                    <span className="text-sm font-medium">Dark Mode</span>
                  </>
                )}
              </motion.button>

              <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                <Link href="#" className="hover:text-foreground transition-colors touch-manipulation">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-foreground transition-colors touch-manipulation">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
