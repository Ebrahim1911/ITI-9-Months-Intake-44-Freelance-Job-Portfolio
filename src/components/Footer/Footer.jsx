import "./Footer.css";
import { FaGoogle } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="mailto:aliyoumna440@gmail.com" target="_blank">
          <FaGoogle />
        </a>

        <a
          href="https://www.figma.com/files/team/1161394436801182066/user/1390004839210369985?fuid=1161394427456833982"
          target="_blank"
        >
          <FiFigma />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy;Youmna Ali Mohamed. All rights reserved. </small>
      </div>
    </footer>
  );
}

export default Footer;
