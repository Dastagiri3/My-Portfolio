import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-sm mb-8">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-foreground">Guru </span>
            <span className="gradient-text">Dastagiri</span>
          </h1>

          {/* Title */}
          <div 
            className="animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-8">
              <span className="font-mono text-primary">&lt;</span>
              Java Full Stack Developer
              <span className="font-mono text-primary"> /&gt;</span>
            </h2>
          </div>

          {/* Description */}
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            Building robust backend systems and responsive web applications with 
            expertise in Spring Boot, React, and modern cloud technologies.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-scale-in"
            style={{ animationDelay: "1s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div 
            className="flex items-center justify-center gap-6 animate-fade-in"
            style={{ animationDelay: "1.2s" }}
          >
            <a
              href="https://github.com/Dastagiri3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/gurudastagiri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:gurudastagiri3@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};
