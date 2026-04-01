import { ArrowLeft, Download } from 'lucide-react';

const ResumeViewer = ({ onBack }) => {
  return (
    <div className="resume-page-wrapper">
      
      {/* Controls Row (Width handled in CSS) */}
      <div className="resume-controls-row">
        
        <button 
          onClick={onBack}
          className="resume-back-btn"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </button>

        <a 
          href="/portfolio/Deepak_Kumar_Resume.pdf"
          download="Deepak_Kumar_Resume.pdf"
          className="resume-download-btn"
        >
          <Download size={18} />
          Download Resume
        </a>

      </div>

      {/* Resume Viewer Container (Width handled in CSS) */}
      <div className="resume-viewer-container">
        <div className="resume-embed-wrapper">
           <iframe 
             src="/portfolio/Deepak_Kumar_Resume.pdf#toolbar=0" 
             title="Deepak Kumar Resume"
             className="resume-iframe"
           />
        </div>
      </div>

    </div>
  );
};

export default ResumeViewer;
