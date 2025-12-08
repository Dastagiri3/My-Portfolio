import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Development Intern",
    company: "Kodnest Technologies",
    location: "Bengaluru, Karnataka, India",
    period: "Jan 2023 – Mar 2023",
    description: [
      "Gained hands-on experience in Java, MySQL, Frontend technologies, and Manual Testing.",
      "Contributed to real-world projects under the guidance of industry professionals.",
    ],
  },
  {
    title: "PCB & MCB Manufacturing Intern",
    company: "Schneider Electric India",
    location: "Hyderabad, India",
    period: "Aug 2022 – Jan 2023",
    description: [
      "Supported 6-month production line for PCB/MCB assembly.",
      "Gained exposure to hardware-software integration and quality testing.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">03. Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-2 text-primary font-mono text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-2">
                          <span className="text-primary mt-1">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
