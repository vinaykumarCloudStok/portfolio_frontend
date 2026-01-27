import { FC } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import portfolioData from "../data/portfolioData";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import ResumePreview from "../components/ResumePreview";

import BlogSection from "../components/BlogSection";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const Home: FC = () => {
  const { personal, about, skills, experience, projects } = portfolioData;
const [theme, setTheme] = useState<"dark" | "light">("dark");

useEffect(() => {
  document.body.className = theme;
}, [theme]);

  return (
    <div className="portfolio">
      {/* Header */}
      <motion.header
        className="portfolio-header"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1>{personal.name}</h1>
        <p>{personal.title}</p>

        <a href={personal.resume} download>
          <button className="download-btn">
            <Download size={18} />
            Download Resume
          </button>
        </a>
        <button
  className="download-btn"
  style={{ marginLeft: "0.5rem" }}
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
>
  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
</button>

      </motion.header>

      {/* About */}
      <motion.section
        className="portfolio-section about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2>About Me</h2>
        <p>{about.description}</p>
      </motion.section>

      {/* Skills */}
      <motion.section
        className="portfolio-section skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              className="skill-card"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        className="portfolio-section experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2>Experience</h2>

        {experience.map((exp) => (
          <div key={exp.role} className="experience-card">
            <h3>{exp.role}</h3>
            <p className="time">{exp.duration}</p>

            <ul>
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.section>

      {/* Projects */}
      <motion.section
        className="portfolio-section projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{project.title}</h3>

              {project.image ? (
                <div className="flex">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="graph-img"
                  />
                  <p>{project.description}</p>
                </div>
              ) : (
                <p>{project.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
        <ResumePreview />

      <BlogSection />
    </div>
  );
};

export default Home;
