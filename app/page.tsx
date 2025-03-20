"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Youtube } from "lucide-react"

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

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8 lg:px-12">
          <div className="text-xl font-bold">Fabio Espinoza</div>
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
          {/* Hero section background elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-[60%] -left-[5%] w-[30%] h-[30%] bg-gradient-to-tr from-purple-400/5 to-transparent rounded-full blur-3xl"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 order-2 md:order-1 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-text-reveal">
                  Hi, I&apos;m <span className="text-primary">Fabio Espinoza</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground animate-text-reveal animation-delay-300">
                  Software Developer
                </p>
              </div>
              <p className="text-lg text-muted-foreground max-w-md animate-text-reveal animation-delay-600">
                I am a Software Developer from Peru and raised in New Jersey, USA. I now reside in Jakarta, Indonesia
                and have worked as a Golang Developer, Data Analyst, and Fullstack Developer for several companies. I
                now am passionate to start my own startup and keep pursuing work opportunities!
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
                  src="/pfpfabio.jpg"
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
          {/* About section background elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[10%] left-[5%] w-[20%] h-[20%] bg-gradient-to-r from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-[10%] right-[5%] w-[25%] h-[25%] bg-gradient-to-bl from-green-400/5 to-transparent rounded-full blur-3xl"></div>
          </div>
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
                  I&apos;m a passionate software developer with expertise in creating modern, responsive websites and
                  applications powered with an efficient backend microservice architecture mostly in Golang. With a
                  strong foundation in both manual deployment and data analytics.
                </p>
                <p className="text-lg">
                  My professional journey began in 2020 when interning for a company in Jakarta as a Backend Developer.
                  This opened the door for other companies with the same position and even a contract job as a Data
                  Analyst from an American NGO. I have worked in the fields of FinTech Startups, NGO specializing in
                  Sustainability & Transportation, and a Server Hosting Company from Australia.
                </p>
                <p className="text-lg">
                  When I&apos;m not coding, you can find me playing soccer, reading, or exploring new cafes in the city!
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "5+", label: "Programming Languages" },
                  { value: "3+", label: "Happy Bosses" },
                  { value: "3+", label: "Degrees / Certifications" },
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
          {/* Projects section background elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-[15%] left-[10%] w-[20%] h-[20%] bg-gradient-to-tr from-purple-400/5 to-transparent rounded-full blur-3xl"></div>
          </div>
          <div className="space-y-12">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-text-reveal">My Projects</h2>
              <p className="text-lg text-muted-foreground animate-text-reveal animation-delay-300">
                Check out some of my recent work
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Projects.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  title={project.name}
                  description={project.description}
                  image={project.photo}
                  tags={project.tags}
                  link={project.link}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          {/* Contact section background elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] bg-gradient-to-r from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[25%] h-[25%] bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl"></div>
          </div>
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
                  I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Mail className="h-5 w-5" />,
                      label: "Email",
                      value: "fabrzytech@gmail.com",
                      link: "mailto:fabrzytech@gmail.com",
                    },
                    {
                      icon: <Linkedin className="h-5 w-5" />,
                      label: "LinkedIn",
                      value: "https://www.linkedin.com/in/fabio-espinoza-bb616211b",
                      link: "https://www.linkedin.com/in/fabio-espinoza-bb616211b",
                    },
                    {
                      icon: <Github className="h-5 w-5" />,
                      label: "GitHub",
                      value: "github.com/FabioSebs",
                      link: "https://github.com/FabioSebs",
                    },
                    {
                      icon: <Youtube className="h-5 w-5" />,
                      label: "YouTube",
                      value: "@Fabrzy",
                      link: "https://www.youtube.com/@fabrzy3784",
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
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">Connect With Me</h3>
                    <p className="text-muted-foreground">Choose your preferred way to get in touch</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: <Mail className="h-6 w-6" />,
                        label: "Email Me",
                        value: "fabrzytech@gmail.com",
                        action: "Copy Email",
                        color: "bg-blue-100 dark:bg-blue-900/30",
                        borderColor: "from-blue-400/30 to-primary/30",
                      },
                      {
                        icon: <Linkedin className="h-6 w-6" />,
                        label: "LinkedIn",
                        value: "Connect Professionally",
                        action: "Visit Profile",
                        color: "bg-sky-100 dark:bg-sky-900/30",
                        borderColor: "from-sky-400/30 to-blue-400/30",
                      },
                      {
                        icon: <Github className="h-6 w-6" />,
                        label: "GitHub",
                        value: "See My Code",
                        action: "View Projects",
                        color: "bg-purple-100 dark:bg-purple-900/30",
                        borderColor: "from-purple-400/30 to-indigo-400/30",
                      },
                      {
                        icon: <Youtube className="h-6 w-6" />,
                        label: "YouTube",
                        value: "Follow Updates",
                        action: "Subscribe",
                        color: "bg-indigo-100 dark:bg-indigo-900/30",
                        borderColor: "from-indigo-400/30 to-purple-400/30",
                      },
                    ].map((item, index) => (
                      <div
                        key={item.label}
                        className="relative group animate-fade-up"
                        style={{ animationDelay: `${index * 100 + 200}ms` }}
                      >
                        <div
                          className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-lg blur-sm transition duration-500 animate-shimmer"
                          style={{ backgroundImage: `linear-gradient(to right, ${item.borderColor})` }}
                        ></div>
                        <div
                          className={`relative ${item.color} p-4 rounded-lg flex flex-col items-center text-center space-y-2 hover:scale-105 transition-all duration-300 cursor-pointer`}
                          onClick={() => {
                            if (item.label === "Email Me") {
                              navigator.clipboard.writeText(item.value)
                              alert("Email copied to clipboard!")
                            } else {
                              window.open(
                                item.label === "LinkedIn"
                                  ? "https://www.linkedin.com/in/fabio-espinoza-bb616211b"
                                  : item.label === "GitHub"
                                    ? "https://github.com/FabioSebs"
                                    : "https://www.youtube.com/@fabrzy3784",
                                "_blank",
                              )
                            }
                          }}
                        >
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-full">{item.icon}</div>
                          <h4 className="font-medium">{item.label}</h4>
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                          <span className="text-xs font-medium text-primary px-2 py-1 rounded-full bg-primary/10">
                            {item.action}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 p-[1px] animate-pulse-subtle">
                      <div className="relative flex items-center justify-between rounded-xl bg-background p-4">
                        <div>
                          <h4 className="font-medium">Download My Resume</h4>
                          <p className="text-sm text-muted-foreground">Get a copy of my detailed resume</p>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-full">
                          <ArrowRight className="h-4 w-4 mr-2" /> Download
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-2">
                    <div className="inline-flex items-center rounded-full border px-4 py-1 text-sm">
                      <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Currently available for freelance work
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8 px-4 md:px-8 lg:px-12 relative z-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fabio Espinoza
          </div>
          <div className="flex space-x-4">
            {[
              { icon: <Github className="h-5 w-5" />, label: "GitHub", link: "https://github.com/FabioSebs" },
              {
                icon: <Linkedin className="h-5 w-5" />,
                label: "LinkedIn",
                link: "https://www.linkedin.com/in/fabio-espinoza-bb616211b",
              },
              { icon: <Youtube className="h-5 w-5" />, label: "YouTube", link: "https://www.youtube.com/@fabrzy3784" },
              { icon: <Mail className="h-5 w-5" />, label: "Email", link: "mailto:fabrzytech@gmail.com" },
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

function ProjectCard({ title, description, image, tags, link, index = 0 }: any) {
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
          {tags.map((tag: any) => (
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

function ContactItem({ icon, label, value, link, index = 0 }: any) {
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

const Projects = [
  {
    name: "SportsLinker",
    description: "the ultimate sports management platform! Created by me!",
    photo: "/sportslinker.png",
    tags: ["Next.js", "React", "Golang", "Typescript", "Tailwind CSS", "ShadCN", "NGINX", "Docker"],
    link: "https://sportslinkerhq.com/",
  },
  {
    name: "VerdeKinetics",
    description: "FinTech Startup for providing micro loan platform for kooperasis in Indonesia",
    photo: "/verde.png",
    tags: ["Next.js", "React", "Golang", "Typescript", "Tailwind CSS", "NGINX", "Docker", "GCP"],
    link: "https://verdekinetics.com/",
  },
  {
    name: "KoruNexus",
    description: "Australian based tech company that specializes in creating software",
    photo: "/korunexus.png",
    tags: ["Next.js", "React", "Node.js", "Typescript", "Tailwind CSS", "Cloudflare"],
    link: "https://korunexus.com/",
  },
]

