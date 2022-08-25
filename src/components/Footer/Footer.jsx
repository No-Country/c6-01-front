import React from "react";
import "./footer.scss";
import logo from "../../assets/logo.png";
function Footer() {
  return (
    <footer className="wrapper">
      <div className="footer-container">
        <div>
          <img src={logo} alt="logo" />
          <p>
            En este sitio encontrarás todas las universidades y sus respectivas
            calificaciones en base a lo que los usuarios opinen.{" "}
          </p>
        </div>
        <div className="links">
          <div>
            <h3>About</h3>
            <ul>
              <li>About us</li>
              <li>Courses</li>
              <li>Mentor</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li>Careers</li>
              <li>Help & Support</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Code of Conduct</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-text">
          <p>Política de privacidad</p>
          <p>Términos y condiciones</p>
        </div>

        <div>
          <p>@2021 Dónde estudio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
