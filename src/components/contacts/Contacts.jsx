import React from "react";
import "./contacts.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useAlert } from "react-alert";

const Contacts = () => {
  const alert = useAlert();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e6lp1ak",
        "template_ylz8m7l",
        form.current,
        "CNKpawBmgUGWoXfE6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contacts">
      <h5>Let's get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact_icon" />
            <h4>Email</h4>
            <a href="mailto:uli.tattoo.toronto@gmail.com" target="_blank">
              Send me email
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact_icon" />
            <h4>WhatsApp</h4>
            <h5>Message</h5>
            <a href="https://api.whatsapp.com/send?phone=16477632470">
              Text me
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Tell me as much as you can: size, placement and anything that can help me"
            required
          ></textarea>
          <button
            className="btn-send"
            type="submit"
            onClick={() => {
              alert.show("Sent!");
            }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
