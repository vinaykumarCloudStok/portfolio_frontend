import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";


const BlogSection = () => {
  return (
    <section className="portfolio-section blogs">
      <h2>Articles</h2>

      <div className="blogs-grid">
        {portfolioData.blogs.map((blog) => (
          <motion.a
            key={blog.title}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
            whileHover={{ scale: 1.04 }}
          >
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
