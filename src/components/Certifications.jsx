import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';

const Certifications = () => {
  const certificationsData = [
    {
      title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
      issuer: "Infosys Springboard",
      date: "Sep 2025"
    },
    {
      title: "C Programming Language",
      issuer: "Infosys Springboard",
      date: "Aug 2025"
    },
    {
      title: "Build Generative AI Apps and Solutions with No-Code Tools",
      issuer: "Infosys Springboard",
      date: "Feb 2024"
    }
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container">
        <h2 className="section-title">
          My <span>Certifications</span>
        </h2>

        <div className="cert-list">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              className="cert-item"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="cert-icon">
                <Award size={24} />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer} &bull; {cert.date}</p>
                <div className="cert-badge">
                  <BadgeCheck size={16} /> Verified Credential
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
