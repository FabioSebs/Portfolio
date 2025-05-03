import { BookOpenIcon, BriefcaseIcon, CodeIcon, GraduationCapIcon } from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="py-20 m-0 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-gradient-to-b from-slate-900 to-blue-950"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[30%] h-[30%] bg-gradient-to-r from-blue-500/10 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[35%] h-[35%] bg-gradient-to-bl from-indigo-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-[20%] h-[20%] bg-gradient-to-tr from-blue-400/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Subtle particle elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-300/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-block mx-auto">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-6 mx-auto"></div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-100 animate-text-reveal">
            About Me
          </h2>
          <p className="text-lg text-blue-200/70 animate-text-reveal animation-delay-300">
            Get to know me and my background
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up backdrop-blur-sm bg-blue-950/30 p-8 rounded-2xl border border-blue-500/10 shadow-xl">
            <p className="text-lg text-blue-100/80 leading-relaxed">
              I&apos;m a passionate software developer with expertise in creating modern, responsive websites and
              applications powered with an efficient backend microservice architecture mostly in Golang. With a strong
              foundation in both manual deployment and data analytics.
            </p>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-6"></div>

            <p className="text-lg text-blue-100/80 leading-relaxed">
              My professional journey began in 2020 when interning for a company in Jakarta as a Backend Developer. This
              opened the door for other companies with the same position and even a contract job as a Data Analyst from
              an American NGO. I have worked in the fields of FinTech Startups, NGO specializing in Sustainability &
              Transportation, and a Server Hosting Company from Australia.
            </p>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-6"></div>

            <p className="text-lg text-blue-100/80 leading-relaxed">
              When I&apos;m not coding, you can find me playing soccer, reading, or exploring new cafes in the city!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "5+", label: "Years Experience", icon: BriefcaseIcon },
              { value: "5+", label: "Programming Languages", icon: CodeIcon },
              { value: "3+", label: "Happy Bosses", icon: BookOpenIcon },
              { value: "3+", label: "Degrees / Certifications", icon: GraduationCapIcon },
            ].map((item, index) => (
              <div
                key={item.label}
                className="bg-blue-900/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-500/10 hover:border-blue-400/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 animate-fade-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-400/30 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-blue-300 group-hover:text-blue-200" />
                </div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
                  {item.value}
                </div>
                <div className="text-sm text-blue-200/70 group-hover:text-blue-100 transition-all duration-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills section */}
        <div className="pt-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-blue-200 mb-6">My Skills</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Golang",
              "Python",
              "SQL",
              "NoSQL",
              "Docker",
              "AWS",
              "Git",
            ].map((skill, index) => (
              <div
                key={skill}
                className="px-4 py-2 rounded-full bg-blue-900/30 text-blue-200 border border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-800/30 transition-all duration-300 animate-fade-up backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute -bottom-10 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  )
}
