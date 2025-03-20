"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
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
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8 lg:px-12">
          <div className="text-xl font-bold">Your Name</div>
          <nav className="hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors hover:text-primary ${
                  activeSection === item.toLowerCase() ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button asChild size="sm" className="rounded-full px-6">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-[100vh] flex flex-col justify-center px-4 md:px-8 lg:px-12 py-12 max-w-7xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 order-2 md:order-1 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-text-reveal">
                  Hi, I'm <span className="text-primary">Your Name</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground animate-text-reveal animation-delay-300">
                  Web Developer & Designer
                </p>
              </div>
              <p className="text-lg text-muted-foreground max-w-md animate-text-reveal animation-delay-600">
                I create beautiful, functional websites and applications with a focus on user experience.
              </p>
              <div className="flex gap-4 animate-fade-up animation-delay-800">
                <Button asChild className="rounded-full px-6 animate-pulse-subtle">
                  <a href="#projects">View My Work</a>
                </Button>
                <Button variant="outline" asChild className="rounded-full px-6">
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent animate-rotate-slow"></div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Your Name"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 scroll-mt-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-text-reveal">About Me</h2>
              <p className="text-lg text-muted-foreground animate-text-reveal animation-delay-300">
                Get to know me and my background
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <p className="text-lg">
                  I'm a passionate web developer with expertise in creating modern, responsive websites and
                  applications. With a strong foundation in both design and development, I bring a unique perspective to
                  every project.
                </p>
                <p className="text-lg">
                  My journey in web development began 5 years ago, and since then, I've worked on a variety of projects
                  ranging from small business websites to complex web applications. I'm constantly learning and
                  exploring new technologies to stay at the forefront of the industry.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me hiking, reading, or experimenting with new recipes in the
                  kitchen.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "50+", label: "Projects Completed" },
                  { value: "20+", label: "Happy Clients" },
                  { value: "10+", label: "Technologies" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="bg-muted rounded-lg p-6 text-center hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 scroll-mt-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-text-reveal">My Projects</h2>
              <p className="text-lg text-muted-foreground animate-text-reveal animation-delay-300">
                Check out some of my recent work
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((project, index) => (
                <ProjectCard
                  key={project}
                  title={`Project ${project}`}
                  description="A brief description of this project and the technologies used."
                  image={`/placeholder.svg?height=300&width=500&text=Project+${project}`}
                  tags={["React", "Next.js", "Tailwind CSS"]}
                  link="#"
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-text-reveal">Get In Touch</h2>
              <p className="text-lg text-muted-foreground animate-text-reveal animation-delay-300">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 animate-slide-up">
                <p className="text-lg">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Mail className="h-5 w-5" />,
                      label: "Email",
                      value: "your.email@example.com",
                      link: "mailto:your.email@example.com",
                    },
                    {
                      icon: <Linkedin className="h-5 w-5" />,
                      label: "LinkedIn",
                      value: "linkedin.com/in/yourname",
                      link: "https://linkedin.com/in/yourname",
                    },
                    {
                      icon: <Github className="h-5 w-5" />,
                      label: "GitHub",
                      value: "github.com/yourname",
                      link: "https://github.com/yourname",
                    },
                    {
                      icon: <Twitter className="h-5 w-5" />,
                      label: "Twitter",
                      value: "@yourhandle",
                      link: "https://twitter.com/yourhandle",
                    },
                  ].map((item, index) => (
                    <ContactItem
                      key={item.label}
                      icon={item.icon}
                      label={item.label}
                      value={item.value}
                      link={item.link}
                      index={index}
                    />
                  ))}
                </div>
              </div>
              <div className="bg-muted p-8 rounded-lg animate-slide-up animation-delay-200 hover:shadow-lg transition-all duration-500">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full px-3 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-3 py-2 border rounded-md bg-background min-h-[120px] focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button className="w-full rounded-full animate-pulse-subtle">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8 px-4 md:px-8 lg:px-12 relative z-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          <div className="flex space-x-4">
            {[
              { icon: <Github className="h-5 w-5" />, label: "GitHub", link: "#" },
              { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", link: "#" },
              { icon: <Twitter className="h-5 w-5" />, label: "Twitter", link: "#" },
              { icon: <Mail className="h-5 w-5" />, label: "Email", link: "#" },
            ].map((item, index) => (
              <a
                key={item.label}
                href={item.link}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, description, image, tags, link, index = 0 } : any) {
  return (
    <Card
      className="overflow-hidden group animate-fade-up hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-primary/20"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={500}
          height={300}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag : any) => (
            <span
              key={tag}
              className="px-2 py-1 bg-muted text-xs rounded-md group-hover:bg-primary/10 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" asChild className="group/button">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

function ContactItem({ icon, label, value, link, index = 0 } : any) {
  return (
    <a
      href={link}
      className="flex items-center gap-3 group hover:text-primary transition-colors duration-300 animate-fade-up"
      target="_blank"
      rel="noopener noreferrer"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-110">
        {icon}
      </div>
      <div>
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </a>
  )
}

