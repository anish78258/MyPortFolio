import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Lead-to-Delivery Funnel Analytics (ElectricPe)",
    description:
      "Built an interactive Excel analytics system to analyze the Lead → Pre-Booking → Booking → Delivery funnel across multiple stores, identifying conversion drop-offs and TAT delays. Delivered actionable insights for workflow optimization.",
    image: "src\\assets\\image.png",
    tags: ["Excel", "Power Query", "Pivot Tables", "Data Visualization"],
    demoUrl: "https://github.com/anish78258/Electric_pe_lead_funnel_analysis",
    githubUrl: "https://github.com/anish78258/Electric_pe_lead_funnel_analysis",
  },
  {
    id: 2,
    title: "Environmental Sound Detection for Wildlife Conservation",
    description:
      "End-to-end ML pipeline for wildlife sound classification. Implemented MFCC & spectrogram feature extraction, trained CNN models for 27 sound classes, and deployed real-time inference using Flask and React.",
    image: "/projects/wildlife-sound.png",
    tags: ["Python", "CNN", "Librosa", "Flask", "React", "Node.js"],
    demoUrl:
      "https://github.com/anish78258/Environmental-Sound-Classification-for-Wildlife-Conservation-DATA-VISION",
    githubUrl:
      "https://github.com/anish78258/Environmental-Sound-Classification-for-Wildlife-Conservation-DATA-VISION",
  },
  {
    id: 3,
    title: "Vendor Performance & Inventory Analytics",
    description:
      "Analyzed 10K+ transactional records using SQL and Python to uncover loss-making transactions, pricing inefficiencies, and slow-moving inventory worth $2.71M, enabling data-backed vendor recommendations.",
    image: "/projects/vendor-analytics.png",
    tags: ["Python", "SQL", "Pandas", "EDA", "Matplotlib"],
    demoUrl: "https://github.com/anish78258/Vendor-performance",
    githubUrl: "https://github.com/anish78258/Vendor-performance",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of analytics and machine learning projects demonstrating
          data-driven problem solving and real-world impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/anish78258"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            View More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
