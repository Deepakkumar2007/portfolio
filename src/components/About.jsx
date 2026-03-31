import { motion } from 'framer-motion';
import { Code2, PenTool, Database, UserCheck, Settings, Brain, MessageSquare } from 'lucide-react';

const About = () => {
  const categories = [
    {
      title: "Technical Skills",
      icon: <Settings size={20} className="text-accent" />,
      skills: ["Java", "JavaScript", "Python", "C / C++", "HTML & CSS", "MySQL", "Excel"]
    },
    {
      title: "Soft Skills",
      icon: <Brain size={20} className="text-accent" />,
      skills: ["Problem-Solving", "Leadership", "Teamwork", "Adaptability", "Communication"]
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center', marginBottom: '4rem' }}>
          <div>
            <h3 style={{ fontSize: '3rem', fontWeight: 700, margin: 0 }}>2+</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Featured Projects</p>
          </div>
          <div>
            <h3 style={{ fontSize: '3rem', fontWeight: 700, margin: 0 }}>10+</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Core Technologies</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              className="glass-card"
              style={{ padding: '2rem' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px' }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{cat.title}</h3>
              </div>
              <div className="skills-container" style={{ justifyContent: 'flex-start' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
