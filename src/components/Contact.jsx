import { motion } from 'framer-motion';
import { Phone, Mail, Code, Link, FileText, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: <Phone size={20} />, text: "+91-9682021319", href: "tel:+919682021319" },
    { icon: <Mail size={20} />, text: "dy402937@gmail.com", href: "mailto:dy402937@gmail.com" },
    { icon: <Code size={20} />, text: "github.com/Deepakkumar200", href: "https://github.com/Deepakkumar200" },
    { icon: <Link size={20} />, text: "linkedin.com/in/deepakkumar002", href: "https://linkedin.com/in/deepakkumar002" }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact-grid">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-info-column"
          >
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-description">
              I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="contact-list">
              {contactInfo.map((item, idx) => (
                <a key={idx} href={item.href} className="contact-item" target="_blank" rel="noopener noreferrer">
                  <div className="contact-icon-wrapper">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>

            <a href="#resume" className="resume-btn-large">
              <FileText size={20} />
              View & Download Resume
            </a>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-form-card glass-card"
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Deepak Kumar" className="form-input" />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" placeholder="dy402937@gmail.com" className="form-input" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Hi Deepak, I'd like to talk about..." className="form-textarea" rows="5"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
