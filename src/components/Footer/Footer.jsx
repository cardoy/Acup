import { Container } from "react-bootstrap";
import "./Footer.Module.css";

const Footer = () => {
  return (
    <footer className="footer text-light py-3">
      <Container className="footer-container">
        {/* Texto alinhado à esquerda */}
        <p>© {new Date().getFullYear()} Wu Xing. Todos os direitos reservados.</p>

        {/* Ícones alinhados à direita */}
        <div className="footer-icons">
          <a
            href="mailto:cardoy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/gmail.png" alt="Email" className="whatsapp-icon" />
          </a>
          <a
            href="https://wa.me/5521991717885"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/whats.png" alt="WhatsApp" className="whatsapp-icon" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
