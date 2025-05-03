"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import HiringInfo from "./components/hiring-info"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Hero from "./components/hero"
import About from "./components/about"
import Project from "./components/project"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Navbar from "./components/navbar"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const observerRefs = useRef<IntersectionObserver[]>([])

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"]

    // Clean up previous observers
    observerRefs.current.forEach((observer) => observer.disconnect())
    observerRefs.current = []

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section)
            }
          })
        },
        { threshold: 0.5 },
      )

      observer.observe(element)
      observerRefs.current.push(observer)
    })

    return () => {
      observerRefs.current.forEach((observer) => observer.disconnect())
    }
  }, [])

  // Parallax effect for background elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      const elements = document.querySelectorAll(".parallax-element")
      elements.forEach((el) => {
        const element = el as HTMLElement
        const speed = Number.parseFloat(element.getAttribute("data-speed") || "0.05")
        const xOffset = (x - 0.5) * speed * 100
        const yOffset = (y - 0.5) * speed * 100
        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-blue-950 relative overflow-hidden">
      {/* Main background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-background/95 animate-gradient-y pointer-events-none"></div>
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Original elements */}
        <div
          className="parallax-element absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          data-speed="0.05"
        ></div>
        <div
          className="parallax-element absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
          data-speed="0.08"
        ></div>
        <div
          className="parallax-element absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-secondary/20 blur-3xl"
          data-speed="0.12"
        ></div>

        {/* Additional background elements */}
        <div
          className="parallax-element absolute top-[15%] right-[15%] w-72 h-72 rounded-full bg-blue-400/5 blur-3xl"
          data-speed="0.07"
        ></div>
        <div
          className="parallax-element absolute bottom-[30%] left-[20%] w-96 h-96 rounded-full bg-purple-400/5 blur-3xl"
          data-speed="0.09"
        ></div>
        <div
          className="parallax-element absolute top-[60%] right-[30%] w-48 h-48 rounded-full bg-green-400/5 blur-3xl"
          data-speed="0.11"
        ></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-[25%] left-[40%] w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-purple-400/10 blur-2xl animate-pulse-subtle"></div>
        <div className="absolute bottom-[40%] right-[35%] w-24 h-24 rounded-full bg-gradient-to-r from-blue-400/10 to-primary/10 blur-2xl animate-float"></div>

        {/* Grid patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]"></div>

        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 right-0 h-screen bg-[linear-gradient(to_right_bottom,transparent_49.5%,#e5e7eb_49.5%,#e5e7eb_50.5%,transparent_50.5%)] opacity-[0.03]"></div>
      </div>

      <div className="bg-blue-950">
        <Navbar activeSection={activeSection} />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Project />

        {/* Contact Section */}
        <Contact />

      </main>

      <Footer />
    </div>
  )
}
