import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xntlm6s",
      "template_phy1zrf",
      form.current,
      "fOFbZsDVEL0MMiuuc"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>aliyoumna440@gmail.com</h5>
            <a href="mailto:aliyoumna440@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          {/* <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>Youmna Ali mohamed</h5>
            <a href="https://m.me/YouMnaAli" target="_blank">
              Send a Message
            </a>
          </article> */}
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>01090407468</h5>
            <a href="https://wa.me/+201090407468" target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="name" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject..." required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
