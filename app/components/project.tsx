import Image from "next/image"
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github, Code, Star } from "lucide-react"

export default function Project() {
  return (
    <section
      id="projects"
      className="py-20 scroll-mt-16 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-gradient-to-b from-blue-950 to-slate-900"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[35%] h-[35%] bg-gradient-to-l from-blue-500/10 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[15%] left-[10%] w-[30%] h-[30%] bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-[25%] h-[25%] bg-gradient-to-tr from-blue-400/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Code-like particle elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-300/10 text-xs font-mono"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {["</>", "{}", "[]", "//", "&&", "||", "=>"][Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-block mx-auto">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-6 mx-auto"></div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-100 animate-text-reveal">
            My Projects
          </h2>
          <p className="text-lg text-blue-200/70 animate-text-reveal animation-delay-300">
            Check out some of my recent work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* <div className="flex justify-center mt-12 animate-fade-up" style={{ animationDelay: "600ms" }}>
          <Button
            className="group rounded-full px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/20 border-none"
            asChild
          >
            <a href="#" className="flex items-center gap-2">
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div> */}
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </section>
  )
}

function ProjectCard({ title, description, image, tags, link, index = 0 }: any) {
  return (
    <Card
      className="overflow-hidden group animate-fade-up bg-emerald-900/50 backdrop-blur-sm border-blue-500/10 hover:border-blue-400/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 relative"
      style={{ animationDelay: `${index * 150 + 300}ms` }}
    >
      {/* Glowing corner effect */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>

      <div className="relative aspect-video overflow-hidden">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

        {/* Project image */}
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-cyan-100 group-hover:from-cyan-300 group-hover:to-blue-300 transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-blue-200/70">{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: any) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-800/40 text-blue-200 text-xs rounded-md group-hover:bg-blue-700/40 transition-colors duration-300 border border-blue-500/10 group-hover:border-blue-400/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <Button variant="ghost" asChild className="group/button text-blue-200 hover:text-blue-100 hover:bg-blue-800/30">
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <span>View Project</span>
            <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:translate-y-[-1px]" />
          </a>
        </Button>

        <div className="flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 rounded-full text-blue-200 hover:text-blue-100 hover:bg-blue-800/30"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 rounded-full text-blue-200 hover:text-blue-100 hover:bg-blue-800/30"
          >
            <Code className="h-4 w-4" />
            <span className="sr-only">Source Code</span>
          </Button>
        </div>
      </CardFooter>

      {/* Bottom highlight line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-700 ease-out"></div>
    </Card>
  )
}

const Projects = [
  {
    name: "SportsLinker",
    description: "The ultimate sports management platform! Created by me!",
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
  {
    name: "3MetaD Game Leaderboard",
    description: "Live leaderboard feed of games within the 3MetaD ecosystem",
    photo: "/leaderboardSite.png",
    tags: ["Next.js", "React", "Node.js", "Typescript", "Tailwind CSS", "DynamoDB", "AWS"],
    link: "https://3metad-leaderboard-frontend.vercel.app/",
  },
  {
    name: "TCO Simulator",
    description: "Simulator for caluclating Total Cost of Ownership for EVs",
    photo: "/tcoSim.png",
    tags: ["Next.js", "React", "Node.js", "Typescript", "Tailwind CSS", "Golang", "NGINX"],
    link: "https://tco-simulator.fabrzy.dev/",
  },
]
