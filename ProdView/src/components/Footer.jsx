import {
  FaGithub,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-auto">
      <div className="flex justify-center mb-3 space-x-6 text-2xl text-blue-600">
        <a
          href="https://github.com/SyedFaisal30"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-blue-800 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/SyedFaisal30"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="hover:text-blue-800 transition-colors duration-300"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://wa.me/9892996342"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-blue-800 transition-colors duration-300"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/SyedFaisal30/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-800 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:sfarz172320@gmail.com"
          aria-label="Email"
          className="hover:text-blue-800 transition-colors duration-300"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://syedfaisal30.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Portfolio"
          className="hover:text-blue-800 transition-colors duration-300"
        >
          <FaGlobe />
        </a>
      </div>

      <p className="text-blue-600 text-sm">
        © {new Date().getFullYear()} ProdView. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
