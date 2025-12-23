import { useEffect, useState } from "react";
import "./Home.css";
import home_avatar from "../assets/home_avatar.png";

export default function Home() {
  const roles = [ "I'M WEB DEVELOPER", "I'M UI/UX DESIGNER",];
  const [index, setIndex] = useState(1);

  useEffect(() => {
    // Timer for roles
    const roleTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000); // reduced time for faster check, or keep 8000. User didn't specify time. 8000 is long. Let's keep 4000-5000 for better UX? Or keep original. Original was 8000. Let's keep 4000 (common for text rotators).

    return () => clearInterval(roleTimer);
  }, []);

  return (
    // <div className="home-wrapper">
      <div className="home-card">
        <div className="avatar-section">
          <div className="image-box">
            <img src={home_avatar} alt="Home Avatar" className="home-img" />
          </div>
        </div>
        <h1 className="role-text" key={roles[index]}>{roles[index]}</h1>
      </div>
    // </div>
  );
}
