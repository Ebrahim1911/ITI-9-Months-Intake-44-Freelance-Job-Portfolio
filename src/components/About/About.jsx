import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import "./About.css";
function About() {
  return (
    <section id="about">
      <h5>Go To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="mee" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>Junior Level</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>
          <p>
            With a background in graphic design and a deep understanding of
            human-computer interaction, I bring a unique blend of artistic
            vision and technical expertise to every project. My journey in the
            field of UI/UX design started 2 years ago, and since then, I’ve been
            dedicated to honing my skills and expanding my knowledge. My design
            philosophy is rooted in empathy, simplicity, and functionality. I
            believe that great design is not just about aesthetics but also
            about how effectively it solves users’ problems and enhances their
            experience.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
