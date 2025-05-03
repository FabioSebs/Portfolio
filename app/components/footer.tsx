"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Github, Linkedin, Mail, Youtube, ArrowUp, Heart, Code } from "lucide-react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="border-t border-blue-500/10 py-8 px-4 md:px-8 lg:px-12 relative z-10 bg-gradient-to-b from-blue-950 to-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute -bottom-10 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 left-1/3 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-blue-500/10">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
              Fabio Espinoza
            </h3>
            <p className="text-sm text-blue-200/60 max-w-xs">
              Software developer specializing in creating modern, responsive websites and efficient backend
              microservices.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: <Github className="h-5 w-5" />, label: "GitHub", link: "https://github.com/FabioSebs" },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/in/fabio-espinoza-bb616211b",
                },
                {
                  icon: <Youtube className="h-5 w-5" />,
                  label: "YouTube",
                  link: "https://www.youtube.com/@fabrzy3784",
                },
                { icon: <Mail className="h-5 w-5" />, label: "Email", link: "mailto:fabrzytech@gmail.com" },
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.link}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-900/30 text-blue-300 hover:text-cyan-300 hover:bg-blue-800/50 transition-all duration-300 hover:scale-110 transform border border-blue-500/10 hover:border-blue-400/30 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="group-hover:animate-bounce-subtle">{item.icon}</span>
                  <span className="sr-only">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-200/80">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-blue-200/60 hover:text-cyan-300 transition-colors duration-300 text-sm flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-200/80">Contact</h3>
            <p className="text-sm text-blue-200/60">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-300">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for freelance work
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-2">
          <div className="text-sm text-blue-200/60 flex items-center gap-1">
            © {new Date().getFullYear()} Fabio Espinoza. All rights reserved.
            <span className="hidden md:inline-flex items-center text-xs ml-2">
              Made with <Heart className="h-3 w-3 text-red-400 mx-1" /> and{" "}
              <Code className="h-3 w-3 text-blue-400 mx-1" />
            </span>
          </div>
          <div className="text-xs text-blue-200/40">
            <a href="https://github.com/FabioSebs" className="hover:text-blue-200/80 transition-colors duration-300">
              Github
            </a>{" "}
            •{" "}
            <a href="https://www.youtube.com/@fabrzy3784" className="hover:text-blue-200/80 transition-colors duration-300">
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 border-none z-50 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  )
}
