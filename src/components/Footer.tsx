import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo / Name */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-primary text-lg font-bold">&lt;GD /&gt;</span>
              <span className="text-muted-foreground text-sm">
                Guru Dastagiri Jillela
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Dastagiri3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/gurudastagiri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:gurudastagiri3@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>© {currentYear}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
