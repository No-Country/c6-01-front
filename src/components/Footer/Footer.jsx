import React from "react";
import "./footer.scss";
import logo from "../../assets/logo.png";
function Footer() {
  return (
    <footer className="wrapper">
      <div className="footer-container">
        <div className="left-footer">
          <img src={logo} alt="logo" />
          <p className="text">
            En este sitio encontrarás todas las universidades y sus respectivas
            calificaciones en base a lo que los usuarios opinen.{" "}
          </p>
        </div>
        <div className="line"></div>

        <div className="right-footer">
          <div className="links">
            <div className="item">
              <h3>About us</h3>
              <ul>
                <li>About us</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="item">
              <h3>SocialMedia</h3>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </div>
            <div className="item">
              <h3>Company</h3>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Code of Conduct</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <p>Política de privacidad</p>
          <p>Términos y condiciones</p>
        </div>
        <div className="footer-right">
          <p>@2021 Dónde estudio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
