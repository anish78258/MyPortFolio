import React from "react";
import { useState } from "react";
import { cn } from "../lib/utils.jsx";

const skills = [
  // Data & Analytics
  { name: "SQL (Joins, CTEs, Validation)", level: 90, category: "data" },
  { name: "Excel (Pivot Tables, Power Query)", level: 90, category: "data" },
  { name: "Python (Pandas, NumPy)", level: 85, category: "data" },
  { name: "Exploratory Data Analysis (EDA)", level: 85, category: "data" },
  { name: "Data Visualization", level: 80, category: "data" },
  { name: "Statistical Analysis", level: 75, category: "data" },

  // Machine Learning
  { name: "Machine Learning Fundamentals", level: 75, category: "ml" },
  { name: "CNNs", level: 70, category: "ml" },
  { name: "Feature Engineering (MFCC, Spectrograms)", level: 70, category: "ml" },
  { name: "Model Evaluation & Validation", level: 75, category: "ml" },
  { name: "Librosa", level: 65, category: "ml" },

  // Backend & Tools
  { name: "FastApi", level: 70, category: "tools" },
  { name: "REST APIs", level: 70, category: "tools" },
  { name: "SQLite / SQL Databases", level: 75, category: "tools" },
  { name: "Git & GitHub", level: 85, category: "tools" },
  { name: "Power BI / Google Sheets", level: 65, category: "tools" },

  // Professional Skills
  { name: "Problem Solving", level: 90, category: "professional" },
  { name: "Business Analysis", level: 80, category: "professional" },
  { name: "Cross-functional Communication", level: 80, category: "professional" },
  { name: "Documentation & Reporting", level: 85, category: "professional" },
];

const categories = ["all", "data", "ml", "tools", "professional"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
