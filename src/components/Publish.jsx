import React from "react";
import "./Publish.css";
import certificate_publication from "../assets/certificate_publication.jpg";
import new_certificate from "../assets/image.png";

export default function PublishCard() {
  const handleMoreClick = () => {
    // Opens paper.pdf from the public folder
    window.open("/AI VOICE ASSISTANT.pdf", "_blank"); 
  };

  return (
    <div className="publish-wrapper">

      <div className="publish-left">
        {/* LEFT IMAGE CARD
        <div className="publish-image">
          <img src={certificate_publication} alt="Certificate Publication" className="publish-img-content" />
        </div> */}

        {/* NEW IMAGE CARD */}
        <div className="publish-image">
          <img src={new_certificate} alt="New Certificate" className="publish-img-content" />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="publish-right">
        <h2 className="publish-title">AI VOICE ASSISTANT</h2>

        <div className="publish-desc">
          <p className="publish-text">
            A voice assistant built with OpenAI using Python allows users to interact through natural speech using advanced AI models. It captures audio input through a microphone, converts it to text, and processes user queries using OpenAI’s powerful language capabilities. The assistant can then generate meaningful responses, perform tasks, or retrieve information intelligently. Python libraries like SpeechRecognition, pyttsx3, and OpenAI APIs make the development process simple and efficient. Overall, it creates a seamless human-AI interaction experience through voice-based communication.
          </p>
        </div>

        <button className="more-btn" onClick={handleMoreClick}>MORE</button>
      </div>

    </div>
  );
}
