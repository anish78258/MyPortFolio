import React from "react";
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Data Analytics & Machine Learning Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I am a Chemical Engineering undergraduate at Motilal Nehru National
              Institute of Technology, Allahabad, with a strong interest in data
              analytics, machine learning, and data-driven problem solving.
            </p>

            <p className="text-muted-foreground">
              I have hands-on experience working on real-world analytics and ML
              projects involving SQL, Python, Excel dashboards, statistical
              analysis, and end-to-end model deployment. I enjoy transforming
              raw data into actionable insights that drive informed decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
  href="https://drive.google.com/file/d/1iMfYvjM60wDTJoC6pz2LEQauZb17gEDm/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
>
  Download CV
</a>

            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data & Analytics</h4>
                  <p className="text-muted-foreground">
                    SQL querying, Excel dashboards, Python-based EDA, data
                    pipelines, and statistical analysis for business insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Machine Learning & NLP
                  </h4>
                  <p className="text-muted-foreground">
                    Experience building ML pipelines, CNN models, feature
                    extraction, validation strategies, and deploying models
                    using Flask and React.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Consulting & Problem Solving
                  </h4>
                  <p className="text-muted-foreground">
                    Strong analytical thinking, cross-functional collaboration,
                    and experience delivering actionable recommendations from
                    complex datasets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
