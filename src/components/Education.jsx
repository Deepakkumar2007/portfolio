import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech Computer Science and Engineering",
      institution: "Lovely Professional University, Phagwara, Punjab",
      score: "CGPA: 6.47",
      year: "Aug 2023 - Present"
    },
    {
      degree: "Intermediate",
      institution: "Dr. Ram Manohar Lahiya Inter Collage",
      score: "Percentage: 65%",
      year: "Apr 2021 - Mar 2023"
    },
    {
      degree: "Matriculation",
      institution: "Dr. Ram Manohar Lohia Inter Collage",
      score: "Percentage: 69%",
      year: "Apr 2020 - Mar 2021"
    }
  ];

  return (
    <section id="education" className="section-padding bg-darker">
      <div className="container">
        <h2 className="section-title">
          My <span>Education</span>
        </h2>

        <div className="vertical-timeline">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">{edu.degree}</h3>
                <p className="timeline-subtitle">{edu.institution}</p>
                
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                    {edu.year}
                  </span>
                  <span style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--accent-primary)', borderRadius: '4px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                    {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
