import { motion } from "framer-motion";
import resume from '../assets/vinayresumeLatest.pdf'
const ResumePreview = () => {
  return (
    <motion.section
      className="portfolio-section resume-preview"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2>Resume</h2>

      <iframe
        src={resume}
        title="Resume Preview"
        className="resume-iframe"
      />
    </motion.section>
  );
};

export default ResumePreview;
