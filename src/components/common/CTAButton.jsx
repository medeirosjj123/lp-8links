import { Link } from "react-router-dom";

const CTAButton = ({ text, to = "#pricing", className = "" }) => {
  const buttonStyle = {
    background: '#FF5C35',
    color: 'white',
    borderRadius: '12px',
    fontFamily: 'Inter',
    fontWeight: '600',
    border: 'none',
    padding: '24px 48px',
    fontSize: '18px',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    width: 'auto',
    textTransform: 'uppercase'
  };

  return (
    <a
      href={to}
      className={`cta-button ${className}`}
      style={buttonStyle}
      target="_self"
      onMouseOver={(e) => e.target.style.background = '#e54525'}
      onMouseOut={(e) => e.target.style.background = '#FF5C35'}
    >
      {text}
    </a>
  );
};

export default CTAButton; 