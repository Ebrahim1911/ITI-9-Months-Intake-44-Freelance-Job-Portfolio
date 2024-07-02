import { BsPatchCheckFill } from "react-icons/bs";
import "./Experience.css";
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Design Tools</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Figma</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Sketch</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Adobe XD</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Adobe Illustrator</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Marvel</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Miro</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4 className="small-size-front">Photoshop</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>CSS</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
