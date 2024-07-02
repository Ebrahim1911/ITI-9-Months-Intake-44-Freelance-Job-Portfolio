import { BiCheck } from "react-icons/bi";
import "./Services.css";
function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>UI && UX Design</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Wireframing and Prototyping</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Interaction Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Accessibility Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Usability Testing</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Designing intuitive and visually appealing interfaces</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Crafting seamless user experiences</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Visual Design Applying principles of typography, color theory,
                and layout
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Design Systems and Documentation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
