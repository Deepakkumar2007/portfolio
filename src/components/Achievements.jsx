import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "LeetCode",
      description: "Solved 50+ coding problems on LeetCode.",
      icon: <Code size={24} style={{ color: '#ffa116' }} />,
      glowColor: 'rgba(255, 161, 22, 0.2)'
    },
    {
      title: "HackerRank",
      description: "Solved 50+ coding problems on HackerRank.",
      icon: <Code size={24} style={{ color: '#27ae60' }} />,
      glowColor: 'rgba(39, 174, 96, 0.2)'
    }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container">
        <h2 className="section-title">
          My <span>Achievements</span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          {achievements.map((item, idx) => (
            <motion.div 
              key={idx}
              className="glass-card"
              style={{ padding: '3rem 2rem', textAlign: 'center' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'rgba(255,255,255,0.03)', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1.5rem auto',
                boxShadow: `0 0 20px ${item.glowColor}`,
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
