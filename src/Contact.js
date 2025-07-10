import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaClipboard, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const email = "sivanzargari120@gmail.com";
  const whatsappNumber = "972524541011"; // קוד מדינה 972 בלי אפס + מספר הטלפון שלך

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert("המייל הועתק ללוח!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Contact Me</h2>
      <div
        style={{
          fontSize: 40,
          display: "flex",
          justifyContent: "center",
          gap: 30,
          alignItems: "center",
        }}
      >
       <a href={`mailto:${email}`} title="Email" style={{ color: "inherit", fontSize: 40 }}>
  <FaEnvelope />
</a>

        <a
          href="https://www.linkedin.com/in/sivan-zargari/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          style={{ color: "inherit" }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sivanzargari"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          style={{ color: "inherit" }}
        >
          <FaGithub />
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          title="WhatsApp"
          style={{ color: "inherit" }}
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default Contact;
