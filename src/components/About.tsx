import { MapPin, Phone, Mail, Calendar } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">01. About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Who I <span className="gradient-text">Am</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: About Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a recent <span className="text-foreground font-medium">B.Tech ECE graduate</span> with 
                full-stack expertise in Django, Flutter, and Java technologies. I have built production-ready 
                e-commerce backends, integrated NLP solutions, and deployed responsive web applications.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My focus is on creating clean, efficient code with strong foundations in 
                <span className="text-primary"> RESTful APIs</span>, database management, and modern 
                frontend frameworks. I'm passionate about solving complex problems and continuously 
                learning new technologies.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When I'm not coding, I enjoy exploring new tech trends, contributing to open-source 
                projects, and enhancing my skills through certifications and hands-on projects.
              </p>
            </div>

            {/* Right: Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors group">
                <MapPin className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">Gudur, Andhra Pradesh</p>
              </div>
              
              <div className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors group">
                <Phone className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground text-sm">+91 6303747034</p>
              </div>
              
              <div className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors group">
                <Mail className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground text-sm break-all">gurudastagiri3@gmail.com</p>
              </div>
              
              <div className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors group">
                <Calendar className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">Experience</h3>
                <p className="text-muted-foreground text-sm">1+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
