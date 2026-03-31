import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    {
      title: "AI House Price Prediction Chatbot",
      date: "Jun – Aug 2025",
      desc: "Built an AI-powered chatbot using Python to predict real-estate property prices computationally, integrating ML models trained on location, area, rooms, and market trends.",
      tags: ["Python", "Machine Learning", "GUI"],
      github: "https://github.com/Deepakkumar200",
      live: "#"
    },
    {
      title: "Job Portal System",
      date: "Apr – Jun 2023",
      desc: "Developed a full-stack Job Portal enabling user registration, job posting, profile management, and live job search. Engineered prompt generation logic for optimized recommendations.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Deepakkumar200",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-darker">
      <div className="container">
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-top-right-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Code size={20} />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} />
                </a>
              </div>

              <div className="project-content" style={{ marginTop: '1rem' }}>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
