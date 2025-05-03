import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GlobeIcon, CodeIcon, MailIcon } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100vh] flex flex-col justify-center px-4 md:px-8 lg:px-12 py-12 relative overflow-hidden bg-gradient-to-b from-blue-950 to-slate-900"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-b from-blue-500/10 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-cyan-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-[30%] h-[30%] bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Particle-like elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center relative z-10 mt-10">
        <div className="space-y-8 order-2 md:order-1 animate-fade-in">
          <div className="space-y-3">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-2 backdrop-blur-sm">
              Software Developer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-100 animate-text-reveal">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Fabio Espinoza
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-light animate-text-reveal animation-delay-300">
              Welcome to my Portfolio
            </p>
          </div>

          <p className="text-lg text-blue-100/70 max-w-md animate-text-reveal animation-delay-600 leading-relaxed">
            I am a <span className="bg-gradient-to-t from-white to-blue-700 bg-clip-text text-transparent shadow-2xs">Software Developer </span> from Peru and raised in New Jersey, USA. I now reside in Jakarta, Indonesia and
            have worked as a <strong><span className="bg-gradient-to-t from-green-500 to-blue-700 bg-clip-text text-transparent shadow-2xs shadow-white">Golang Developer</span></strong>, <strong><span className="bg-gradient-to-t from-red-500 to-blue-700 bg-clip-text text-transparent shadow-2xs shadow-white">Data Analyst</span></strong>, and <strong><span className="bg-gradient-to-t from-yellow-500 to-blue-700 bg-clip-text text-transparent shadow-2xs shadow-white">Fullstack Developer</span></strong> for several companies. I now am
            passionate to start my own startup and keep pursuing work opportunities!
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-800">
            <Button
              asChild
              className="rounded-full px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/20 border-none"
            >
              <a href="#projects" className="flex items-center gap-2">
                <CodeIcon size={18} />
                View My Work
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-full px-8 py-6 border-blue-400/30 text-blue-200 bg-blue-800 hover:bg-blue-800/30 hover:text-blue-100"
            >
              <a href="#contact" className="flex items-center gap-2">
                <MailIcon size={18} />
                Contact Me
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center order-1 md:order-2 mt-8 md:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden animate-float">
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm opacity-70 animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-transparent rounded-full animate-rotate-slow"></div>

            {/* Image container with inner glow */}
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-blue-950 z-10">
              <Image src="/pfpfabio.jpg" alt="Fabio Espinoza" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent mix-blend-overlay"></div>
            </div>

            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-rotate-slow" style={{ animationDuration: "15s" }}>
              <div className="absolute top-[5%] left-[50%] w-4 h-4 rounded-full bg-cyan-400/30 blur-sm"></div>
            </div>
            <div className="absolute inset-0 animate-rotate-reverse-slow" style={{ animationDuration: "20s" }}>
              <div className="absolute top-[80%] left-[20%] w-3 h-3 rounded-full bg-blue-400/30 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
