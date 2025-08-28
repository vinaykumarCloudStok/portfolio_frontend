import { useState } from "react";
import { Download } from "lucide-react";
import resume from '../assets/newresumeupdate.pdf'

export default function Home() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Vinay_Kumar_Resume.pdf";
    link.click();
    setDownloading(false);
  };

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="portfolio-header">
        <h1>Vinay Kumar</h1>
        <p>Frontend Developer (React / TypeScript)</p>
        <button onClick={handleDownload} className="download-btn">
          <Download size={18} />
          {downloading ? "Downloading..." : "Download Resume"}
        </button>
      </header>

      {/* About Section */}
      <section className="portfolio-section about">
        <h2>About Me</h2>
        <p>
          Frontend Developer with <strong>3.6 years</strong> of experience
          building scalable, responsive, and user-friendly web applications.
          Skilled in <strong>React.js, TypeScript, CSS, JavaScript</strong> and
          delivering high-quality solutions aligned with business objectives.
        </p>
      </section>

      {/* Skills Section */}
      <section className="portfolio-section skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {[
            "React.js",
            "TypeScript",
            "JavaScript",
            "CSS3",
            "HTML5",
            "Redux",
            "TailwindCSS",
            "REST APIs",
          ].map((skill, idx) => (
            <div key={idx} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="portfolio-section experience">
        <h2>Experience</h2>
        <div className="experience-card">
          <h3>Frontend Developer</h3>
          <p className="time">2021 – Present</p>
          <ul>
            <li>
              Developed interactive UI using React, TypeScript, and modern CSS.
            </li>
            <li>Collaborated with backend teams to integrate REST APIs.</li>
            <li>Implemented reusable components and optimized performance.</li>
            <li>
              Led frontend development for multiple gaming and sports web apps.
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="portfolio-section projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Cricfast Sports App</h3>
            <p>
              Live cricket scores, commentary, and player stats (like Cricbuzz).
            </p>
          </div>
          <div className="project-card">
            <h3>Aviator Crash Game</h3>
            <p>
              Real-time betting game with plane animation & cashout feature.
            </p>
          </div>
          <div className="project-card">
            <h3>Aviator 3D Game</h3>
            <p>
              3D crash game with smooth plane animations and betting interface.
            </p>
          </div>
          <div className="project-card">
            <h3>JetX & AviatriX</h3>
            <p>
              Crash games with advanced betting logic & UI/UX improvements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
