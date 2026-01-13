import { useState } from "react";
import { Download } from "lucide-react";
import resume from '../assets/vinayresumeLatest.pdf'
import graph from '../assets/grp.png'
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
          Frontend Developer with <strong>4 years</strong> of experience
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
            "CSS",
            "CSS3",
            "Socket",
            "HTML",
            "Context",
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
            <h3>IARI Farming App</h3>
            <p>
              Crop details and guidance for farmers; clean information architecture and offline‑friendly UX (if
              applicable).
            </p>
          </div>
          <div className="project-card">
            <h3>Games</h3>
            <p>
              Built real-time crash games using React.js, Socket.io, and APIs with live game updates,
              cashout logic, responsive UI, and centralized state management using React Context.
            </p>

          </div>
          <div className="project-card">
            <h3>Games Admin Web App </h3>
            <p>
              Admin panel for users, wallets, webhook logs, and game configurations,
              Advanced filters, paginated tables, and role‑based access.
            </p>
          </div>
          <div className="project-card">
            <h3>Cloudstok Accounts (Invoices) Web App </h3>
            <p>
              Create/update/delete and print invoices; integrated PDF export/print flows,
              Form validation and error handling for reliable finance operations.
            </p>
          </div>
          <div className="project-card">
            <h3>Doctor Appointment App</h3>
            <p>
              Appointment scheduling, reminders, and video consultations with doctors,
              Streamlined booking flow and calendar integration; handled edge cases & retries.
            </p>
          </div>
          <div className="project-card">
            <h3>Trading App</h3>
            <div className="flex">
              <img src={graph} alt="" className="graph-img" />
              <p>Real-time cricket match data including live scores, odds</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
