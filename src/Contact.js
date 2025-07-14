import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailValue = form.current.reply_to.value;

    if (!isValidEmail(emailValue)) {
      toast.error("אנא הזיני כתובת אימייל תקינה.");
      return;
    }

    emailjs.sendForm(
      'service_tfuhv9g',
      'template_80jkgh5',
      form.current,
      'N2fPQZQqbuTQiAg7r'
    ).then(
      () => {
        toast.success("ההודעה נשלחה בהצלחה!");
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
        toast.error("אירעה שגיאה בשליחה. נסי שוב.");
      }
    );
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="reply_to" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="send-btn">Send Message</button>
      </form>

      <div className="social-icons">
        <a href="mailto:sivanzargari120@gmail.com" title="Email"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/sivan-zargari/" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/sivanzargari" target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
        <a href="https://wa.me/972524541011" target="_blank" rel="noreferrer" title="WhatsApp"><FaWhatsapp /></a>
      </div>

      <ToastContainer position="top-center" />
    </section>
  );
}

export default Contact;
