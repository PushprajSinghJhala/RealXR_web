import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { MembersSection } from "@/components/members-section"
import { WhatWeUseSection } from "@/components/what-we-use-section"
import { VisionMissionSection } from "@/components/vision-mission-section"
import { EventsSection } from "@/components/events-section"
import { FormsSection } from "@/components/forms-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <MembersSection />
        <WhatWeUseSection />
        <VisionMissionSection />
        <EventsSection />
        <FormsSection />
      </main>
      <Footer />
    </div>
  )
}
