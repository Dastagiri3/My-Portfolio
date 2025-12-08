import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech, Electronics & Communication Engineering",
    institution: "Audisankara College of Engineering & Technology",
    location: "Gudur",
    period: "2023 – 2026",
    grade: "CGPA: 7.8/10",
  },
  {
    degree: "Diploma, Electronics & Communication Engineering",
    institution: "Government Polytechnic College",
    location: "Proddatur",
    period: "2020 – 2023",
    grade: "Percentage: 72.3%",
  },
  {
    degree: "SSC",
    institution: "Rainbow E.M High School",
    location: "Khajipeta",
    period: "2019 – 2020",
    grade: "Percentage: 99.6%",
  },
];

const certifications = [
  { name: "Python 101 for Data Science", issuer: "IBM (Coursera)" },
  { name: "Python Essentials", issuer: "Cisco" },
  { name: "HTML & CSS Fundamentals", issuer: "W3Cx" },
  { name: "Embedded Systems Essentials", issuer: "Arm Education" },
  { name: "TCS iON Career Edge – Young Professional", issuer: "TCS" },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">05. Education</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
                  >
                    <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[7px]" />
                    <span className="text-sm font-mono text-primary">{edu.period}</span>
                    <h4 className="text-lg font-semibold text-foreground mt-1">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}, {edu.location}</p>
                    <span className="inline-block mt-2 px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full">
                      {edu.grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <Award className="w-7 h-7 text-primary" />
                Certifications
              </h3>
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
