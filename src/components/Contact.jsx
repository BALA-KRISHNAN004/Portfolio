import React, { useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
    const serviceId = "service_9rl5b3b";
    const templateId = "template_q7xuefl";
    const publicKey = "rzd--GQ24JQ3HjGJZ";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Failed to send message. Please checking your EmailJS configuration.");
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">

        <h2 className="contact-title">CONTACT</h2>

        <div className="contact-content">
          <div className="form-section">
            <input 
              type="text" 
              className="input-box" 
              placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input 
            
              type="email" 
              className="input-box" 
              placeholder="E-mail ID" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              className="textarea-box"
              placeholder="Message ..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button className="submit-btn" onClick={handleEmailSubmit}>
              Submit
            </button>
          </div>

          <div className="icons-section">
            {/* <a href="mailto:balakrishnans625@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-box">
              <i className="fa-solid fa-envelope"></i>
            </a> */}

            <a
              href="https://wa.me/+918072148623"
              target="_blank"
              className="icon-box"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a
              href="https://github.com/BALA-KRISHNAN004"
              target="_blank"
              className="icon-box"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/bala-krishnan-s-3a2530385/"
              target="_blank"
              className="icon-box"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
