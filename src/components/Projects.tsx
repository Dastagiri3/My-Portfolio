import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with product catalog, user authentication, cart functionality, and payment gateway integration. Optimized performance with caching, improving load time by 40%.",
    tech: ["Django", "Flutter", "MySQL", "REST API"],
    github: "https://github.com/Dastagiri3",
    live: null,
    featured: true,
  },
  {
    title: "Geo-Link Sender",
    description:
      "Real-time location sharing web application with GPS accuracy under 10 meters. Implemented request throttling for optimized battery usage.",
    tech: ["HTML", "CSS", "JavaScript", "Geolocation API"],
    github: "https://github.com/Dastagiri3/geo-link-sender-app",
    live: null,
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio showcasing full-stack development skills with user authentication, CRUD operations, and clean UI design.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/Dastagiri3",
    live: "#",
    featured: true,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">04. Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="hero-outline" size="lg" asChild>
              <a href="https://github.com/Dastagiri3" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
