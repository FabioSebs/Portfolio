"use client"

import { Github, Linkedin, Mail, Youtube, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 scroll-mt-16 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-gradient-to-b from-slate-900 to-blue-950"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[25%] h-[25%] bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-[20%] h-[20%] bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-block mx-auto">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-6 mx-auto"></div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-100 animate-text-reveal">
            Get In Touch
          </h2>
          <p className="text-lg text-blue-200/70 animate-text-reveal animation-delay-300">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Left column - Contact info */}
          <div className="md:col-span-2 space-y-8 animate-slide-up">
            <div className="backdrop-blur-sm bg-blue-950/30 p-6 rounded-2xl border border-blue-500/10 shadow-lg">
              <p className="text-blue-100/80 mb-6 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your
                vision.
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
                    value: "Fabio Espinoza",
                    link: "https://www.linkedin.com/in/fabio-espinoza-bb616211b",
                  },
                  {
                    icon: <Github className="h-5 w-5" />,
                    label: "GitHub",
                    value: "FabioSebs",
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

              <div className="flex justify-center mt-8">
                <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-300">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Currently available for freelance work
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Connect options */}
          <div className="md:col-span-3 animate-slide-up animation-delay-200">
            <div className="backdrop-blur-sm bg-blue-950/30 p-6 rounded-2xl border border-blue-500/10 shadow-lg">
              <div className="space-y-6">
                <div className="text-center mb-2">
                  <h3 className="text-xl font-semibold mb-2 text-blue-100">Connect With Me</h3>
                  <p className="text-blue-200/70 text-sm">Choose your preferred way to get in touch</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Mail className="h-5 w-5 text-blue-400" />,
                      label: "Email Me",
                      value: "fabrzytech@gmail.com",
                      action: "Copy Email",
                      color: "bg-blue-900/40",
                      borderColor: "from-blue-400/30 to-cyan-400/30",
                    },
                    {
                      icon: <Linkedin className="h-5 w-5 text-blue-400" />,
                      label: "LinkedIn",
                      value: "Connect",
                      action: "Visit Profile",
                      color: "bg-blue-900/40",
                      borderColor: "from-cyan-400/30 to-blue-400/30",
                    },
                    {
                      icon: <Github className="h-5 w-5 text-blue-400" />,
                      label: "GitHub",
                      value: "See My Code",
                      action: "View Projects",
                      color: "bg-blue-900/40",
                      borderColor: "from-indigo-400/30 to-blue-400/30",
                    },
                    {
                      icon: <Youtube className="h-5 w-5 text-blue-400" />,
                      label: "YouTube",
                      value: "Follow Updates",
                      action: "Subscribe",
                      color: "bg-blue-900/40",
                      borderColor: "from-blue-400/30 to-indigo-400/30",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="relative group animate-fade-up"
                      style={{ animationDelay: `${index * 100 + 200}ms` }}
                    >
                      <div
                        className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-lg blur-sm transition duration-500"
                        style={{ backgroundImage: `linear-gradient(to right, ${item.borderColor})` }}
                      ></div>
                      <div
                        className={`relative ${item.color} p-4 rounded-lg flex flex-col items-center text-center space-y-2 hover:scale-105 transition-all duration-300 cursor-pointer border border-blue-500/10 group-hover:border-blue-400/30`}
                        onClick={() => {
                          if (item.label === "Email Me") {
                            navigator.clipboard.writeText("fabrzytech@gmail.com")
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
                        <div className="bg-blue-800/50 p-2 rounded-full">{item.icon}</div>
                        <h4 className="font-medium text-blue-100">{item.label}</h4>
                        <p className="text-xs text-blue-200/70">{item.value}</p>
                        <span className="text-xs font-medium text-cyan-300 px-2 py-1 rounded-full bg-blue-800/50 flex items-center gap-1">
                          {item.action} <ExternalLink className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500/20 via-cyan-400/10 to-blue-500/20 p-[1px] animate-pulse-subtle">
                    <div className="relative flex items-center justify-between rounded-xl bg-blue-900/40 p-4">
                      <div>
                        <h4 className="font-medium text-blue-100">Download My Resume</h4>
                        <p className="text-xs text-blue-200/70">Get a copy of my detailed resume</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-blue-500/30 bg-blue-800/50 text-blue-100 hover:bg-blue-700/50 hover:text-blue-50"
                      >
                        <Link
                          href="https://api.cdn.fabrzy.dev/internal/FabioEspinozaResume2025.pdf"
                          className="flex items-center gap-1"
                          target="_blank"
                        >
                          <Download className="h-3 w-3" /> Download
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </section>
  )
}

function ContactItem({ icon, label, value, link, index = 0 }: any) {
  return (
    <a
      href={link}
      className="flex items-center gap-3 group hover:text-cyan-300 transition-colors duration-300 animate-fade-up"
      target="_blank"
      rel="noopener noreferrer"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-800/50 flex items-center justify-center group-hover:bg-blue-700/50 transition-all duration-300 transform group-hover:scale-110 border border-blue-500/20 group-hover:border-blue-400/40">
        {icon}
      </div>
      <div>
        <div className="text-xs text-blue-200/70">{label}</div>
        <div className="font-medium text-blue-100 group-hover:text-cyan-300 transition-colors duration-300">
          {value}
        </div>
      </div>
    </a>
  )
}
