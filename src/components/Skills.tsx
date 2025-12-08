const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "HTML/CSS", level: 85 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Spring Boot", level: 85 },
      { name: "React.js", level: 75 },
      { name: "Django", level: 70 },
      { name: "Flutter", level: 65 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "JWT Auth", level: 80 },
      { name: "Power BI", level: 65 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">02. Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-primary font-mono text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
