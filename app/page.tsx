import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { ServicesSection } from "@/components/services-section"
import { AIAutomationSection } from "@/components/ai-automation-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <StorySection />
      <ServicesSection />
      <AIAutomationSection />
      <ProjectsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  )
}
