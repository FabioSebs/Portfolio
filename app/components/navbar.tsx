"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from "lucide-react"

interface Props {
  activeSection: string
}

export default function Navbar({ activeSection }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-950/90 backdrop-blur-md border-b border-blue-500/10 py-1 shadow-lg shadow-blue-950/50"
          : "bg-blue-950/50 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <Link href="#home" className="group">
          <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-100 flex items-center">
            <span className="relative">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative">Fabio Espinoza</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-all duration-300 relative group ${
                activeSection === item.toLowerCase()
                  ? "text-cyan-300 font-medium"
                  : "text-blue-200/70 hover:text-blue-100"
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform origin-left transition-transform duration-300 ${
                  activeSection === item.toLowerCase() ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="rounded-full px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-md shadow-blue-500/20 border-none"
          >
            <a href="#contact" className="flex items-center gap-1">
              Get in Touch
              <ChevronRight className="h-4 w-4 animate-bounce-subtle" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden mt-2 z-50 text-blue-200 hover:text-cyan-300 transition-colors duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden relative h-3 inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0 h-full" : "translate-x-full h-0"
        }`}
      >
        <div className={`flex flex-col h-full justify-center items-center space-y-8 p-8 bg-blue-950/90 opacity-80 transform transition-transform duration-300 ease-in-out
                ${mobileMenuOpen ? "flex" : "hidden"}
            `}>
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-2xl transition-colors duration-300 ${
                activeSection === item.toLowerCase()
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-medium"
                  : "text-blue-200/80 hover:text-blue-100"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          <Button
            asChild
            size="lg"
            className="rounded-full px-8 mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/20 border-none"
          >
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
              Get in Touch
              <ChevronRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
