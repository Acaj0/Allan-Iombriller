"use client"
import Header from "@/components/Header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white">
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-10"></div>
      </div>

      <div className="relative z-10 overflow-clip">
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        {/* <TestimonialsSection /> */}
        <CtaSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

