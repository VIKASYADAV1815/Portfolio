import React, { useEffect, useRef } from 'react';
import './projects.css'; // Ensure this path is correct
import Card from '../Card/Card'; // Adjust path based on your structure
import AICB from "../../assets/chatbot.gif";
import JARVIS from "../../assets/JARVIS.gif";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import graphicera from "../../assets/geu.gif";
import html from "../../assets/html.png";
import css from "../../assets/css.webp";
import js from "../../assets/js1.webp"; // Fixed the import path
import react from "../../assets/react.webp";
import tail from "../../assets/tailwind.webp";
import mongo from "../../assets/mongodb.webp";
import node from "../../assets/nodejs.webp";
import express from "../../assets/express.png";
import gsap1 from "../../assets/gsap.png";
import apple from "../../assets/vision.gif";
import spotify from "../../assets/spotify.gif";
import shoe from "../../assets/shoe.gif"
import bee from "../../assets/bee.webp";
import mac from "../../assets/mac1.gif";


gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ".slider",
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const handleCardClick = (url) => {
    if (url.startsWith("http")) {
      window.open(url, "_blank");
    } else {
      alert("This project is not hosted yet. Please check your local environment.");
    }
  };

  return (
    <div className="projects">
      <h1 ref={headingRef}>1+ YEARS EXPERIENCE IN WEB DEVELOPMENT</h1>
      <div className="slider">
        <div
          className="card"
          ref={(el) => (cardsRef.current[1] = el)}
          onClick={() => handleCardClick("https://vikasyadav1815.github.io/_JARVIS_/")}
        >
          <Card title="JARVIS" desc="The Jarvis voice assistant is developed using HTML, CSS, and JavaScript to create an interactive user interface. This version of Jarvis operates on predefined commands only." image={JARVIS} />
        </div>
        <div
          className="card"
          ref={(el) => (cardsRef.current[2] = el)}
          onClick={() => handleCardClick("https://vikasyadav1815.github.io/chatbot")}
        >
          <Card title="CHAT-BOT" desc="The chatbot project is developed using HTML, CSS, and JavaScript to create an interactive user interface. It integrates the Google Gemini API to enhance its conversational capabilities." image={AICB} />
        </div>
        <div
          className="card"
          ref={(el) => (cardsRef.current[3] = el)}
          onClick={() => handleCardClick("https://vikasyadav1815.github.io/Graphic-Era/")}
        >
          <Card title="GRAPHIC-ERA" desc="The project utilizes HTML, CSS, and JavaScript to create an interactive and responsive landing page for Graphic Era College." image={graphicera} />
        </div>
        <div
          className="card"
          ref={(el) => (cardsRef.current[0] = el)}
          onClick={() => handleCardClick("https://vikasyadav1815.github.io/VISION-PRO/")}
        >
          <Card title="APPLE  VISION PRO"  desc= "This project leverages the Apple Vision Pro to create an engaging augmented application using HTML, CSS, and JavaScript. By using GSAP animations. inspired by (SHERIYANS CODING). " image={apple} />
        </div>
        <div
          className="card"
          ref={(el) => (cardsRef.current[4] = el)}
          onClick={() => handleCardClick("https://vikasyadav1815.github.io/spotify/")}
        >
          <Card title="SPOTIFY"  desc= "This project replicates the Spotify interface using HTML and CSS, featuring a responsive design that allows users to browse music playlists and albums effortlessly." image={spotify} />
        </div>


        <div
          className="card"
          ref={(el) => (cardsRef.current[4] = el)}
          onClick={() => handleCardClick("https://vikasyadav1815.github.io/SHOE/")}
        >
          <Card title="SHOES"  desc= "Explore our stylish and responsive shoe website, designed with HTML, CSS,GSAP and JavaScript, featuring an interactive user experience and seamless navigation." image={shoe} />
        </div>

        <div
          className="card"
          ref={(el) => (cardsRef.current[4] = el)}
          onClick={() => handleCardClick("https://vikasyadav1815.github.io/BEE-ZONE/")}
        >
          <Card title="BEE-ZONE"  desc= "The Bee Zone project is an interactive project that showcases a beautifully crafted 3D model of a bee using Three.js, GSAP ,HTML, CSS, and JavaScript. (for better experience use Laptop,computer)  " image={bee} />
        </div>


        <div
          className="card"
          ref={(el) => (cardsRef.current[4] = el)}
          onClick={() => handleCardClick("https://vikas-macboo-kpro.netlify.app/")}
        >
          <Card title="MACBOOK-PRO"  desc= "MacBook Pro landing page using React.js and React Three Fiber, featuring interactive 3D models for an immersive user experience.(for better experience use Laptop,computer)  " image={mac} />
        </div>


      </div>

      {/* Skills Section */}

      <h1>MY-TOP-SKILLS</h1>
      <div className="skills_projects">

        <div className="skill">
        
          <div className="web"><img src={html} alt="HTML logo" /><h5>HTML</h5></div>
          <div className="web"><img src={css} alt="CSS logo" /><h5>CSS</h5></div>
          <div className="web"><img src={js} alt="JavaScript logo" /><h5>JAVASCRIPT</h5></div>
          <div className="web"><img src={react} alt="React logo" /><h5>REACT</h5></div>
          <div className="web"><img src={tail} alt="Tailwind CSS logo" /><h5>TAILWIND</h5></div>
          <div className="web"><img src={mongo} alt="MongoDB logo" /><h5>MONGO-DB</h5></div>
          <div className="web"><img src={node} alt="Node.js logo" /><h5>NODEJS</h5></div>
          <div className="web"><img src={express} alt="Express logo" /><h5>EXPRESS</h5></div>
          <div className="web"><img src={gsap1} alt="GSAP logo" /><h5>GSAP</h5></div>
          <div className="web"><img src={node} alt="node logo" /><h5>NODEJS</h5></div>



          <div className="web"><img src={html} alt="HTML logo" /><h5>HTML</h5></div>
          <div className="web"><img src={css} alt="CSS logo" /><h5>CSS</h5></div>
          <div className="web"><img src={js} alt="JavaScript logo" /><h5>JAVASCRIPT</h5></div>
          <div className="web"><img src={react} alt="React logo" /><h5>REACT</h5></div>
          <div className="web"><img src={tail} alt="Tailwind CSS logo" /><h5>TAILWIND</h5></div>
          <div className="web"><img src={mongo} alt="MongoDB logo" /><h5>MONGO-DB</h5></div>
          <div className="web"><img src={node} alt="Node.js logo" /><h5>NODEJS</h5></div>
          <div className="web"><img src={express} alt="Express logo" /><h5>EXPRESS</h5></div>
          <div className="web"><img src={gsap1} alt="GSAP logo" /><h5>GSAP</h5></div>
          <div className="web"><img src={node} alt="node logo" /><h5>NODEJS</h5></div>

         
        </div>
      </div>
    </div>
  );
}

export default Projects;
