import resume from "../assets/vinaydevresume.pdf";
import graph from "../assets/grp.png";

export interface Experience {
  role: string;
  duration: string;
  points: string[];
}
export interface Blog {
  title: string;
  description: string;
  link: string;
}
export interface Project {
  title: string;
  description: string;
  image?: string;
}

const portfolioData = {
  personal: {
    name: "Vinay Kumar",
    title: "Frontend Developer (React / TypeScript)",
    resume
  },

  about: {
    description:
      "Frontend Developer with 4 years of experience building scalable, responsive, and user-friendly web applications using React, TypeScript, and modern CSS."
  },

  skills: [
    "React.js",
    "TypeScript",
    "JavaScript",
    "CSS / CSS3",
    "HTML",
    "Redux",
    "Context API",
    "Daisy UI",
    "Socket.io",
    "TailwindCSS",
    "REST APIs"
  ],

  experience: [
    {
      role: "Frontend Developer",
      duration: "2021 – Present",
      points: [
        "Built scalable UI using React and TypeScript",
        "Integrated REST APIs and sockets",
        "Optimized performance and reusable components",
        "Led frontend for gaming and sports apps"
      ]
    }
  ] as Experience[],
  blogs: [
    {
      title: "Building Real-Time Apps with Socket.io",
      description: "Handling live data efficiently in React applications.",
      link: "#"
    },
    {
      title: "Optimizing React Performance",
      description: "Practical techniques for production-grade apps.",
      link: "#"
    }
  ] as Blog[],
  projects: [
    {
      title: "Cricfast Sports App",
      description: "Live cricket scores and commentary like Cricbuzz"
    },
    {
      title: "Games Platform",
      description:
        "Real-time crash games with cashout logic, sockets, and responsive UI"
    },
    {
      title: "Games Admin Panel",
      description:
        "User management, wallets, logs, RBAC, filters, and pagination"
    },
      {
      title: "Doctor Appointment App",
      description:
        "Appointment scheduling, reminders, and video consultations with doctors,Streamlined booking flow and calendar integration; handled edge cases & retries."
    },
    
    {
      title: "Trading App",
      description: "Real-time cricket odds and charts",
      image: graph
    }
  ] as Project[]
};

export default portfolioData;