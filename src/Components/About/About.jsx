import React, { useEffect, useRef } from 'react';
import "./About.css";
import Card from '../Card/Card';
import skills from "../../assets/SKILLS.jpeg";
import grad from "../../assets/GRAD.jpeg";
import mern from "../../assets/mern.jpg"; // Ensure this path is correct
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CERTIFICATES from  "../../assets/VIKAS-CERTIFICATE.pdf";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const circleLineRef = useRef(null);
  const circlesRef = useRef([]);
  const linesRef = useRef([]);
  const aboutDetailsRef = useRef(null);
  const personalInfoRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    // Animate circles and lines when the section comes into view
    gsap.fromTo(
      [...circlesRef.current, ...linesRef.current],
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: circleLineRef.current,
          start: 'top 80%',
        },
      }
    );

    // Animate about-details after circles and lines
    gsap.fromTo(
      aboutDetailsRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutDetailsRef.current,
          start: 'top 80%',
          scrub: true,
        },
      }
    );

    // Animate personal info, education, and skills sequentially
    gsap.fromTo(
      [personalInfoRef.current, educationRef.current, skillsRef.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutDetailsRef.current,
          start: 'top 80%',
        },
      }
    );

    // Animate all cards from the right with a stagger effect
    gsap.fromTo(
      cardsContainerRef.current.children,
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section id="about">
      <div className="leftabout">
        <div className="circle-line" ref={circleLineRef}>
          {[...Array(3)].map((_, index) => (
            <React.Fragment key={index}>
              <div className="circle" ref={(el) => (circlesRef.current[index] = el)}></div>
              {index < 2 && <div className="line" ref={(el) => (linesRef.current[index] = el)}></div>}
            </React.Fragment>
          ))}
        </div>

        <div className="about-details" ref={aboutDetailsRef}>
          <article className="personalinfo" ref={personalInfoRef}>
            <h2>PERSONAL INFORMATION</h2>
            <ul>
              <li><strong>Name</strong>: Vikas Yadav</li>
              <li><strong>Age</strong>: 22</li>
              <li><strong>Gender</strong>: Male</li>
              <li><strong>Languages Known</strong>: हिन्दी | English</li>
            </ul>
          </article>

          <article className="education" ref={educationRef}>
            <h2>EDUCATION</h2>
            <ul>
              <li><strong>Degree</strong>: BCA (MCA pursuing)</li>
              <li><strong>Branch</strong>: Computer Science</li>
              <li><strong>CGPA</strong>: 7.2 CGPA</li>
            </ul>
          </article>

          <article className="skills" ref={skillsRef}>
            <h2>SKILLS</h2>
            <ul>
              <li>MERN Stack Web Developer</li>
              <li>DSA</li>
              <li>Front-End Developer</li>
            </ul>


          </article>

          <a href={CERTIFICATES} target="_blank" className="glow-on-hover">CERTIFIACTES</a>


        </div>

    
      </div>

     

      <div className="rightabout" ref={cardsContainerRef}>
        <Card 
          title=" GRADUATION "
          desc={
            <>
              <strong> ✯ SCHOOLING:</strong> army public school (ahemdabad)
              Kendriya Vidyalaya(Ferozepur ,Dehradun)<br />
              <strong> ✯ COLLEGE:</strong> Graphic Era Deemed to be University (Dehradun)
            </>
          }
          image={grad} 
        />

        <Card title=" AIM " desc= "My aim is to create inspiring front-end designs that captivate  and motivate users, and contribute to the MERN stack community with innovative open-source projects." image={mern} />

        <Card 
          title=" SKILLS" 
          desc={
            <>
              <strong> ✯ FRONTEND:</strong> HTML, CSS, JavaScript, React, GSAP, Three.js (basics), TailwindCSS.<br />
              <strong> ✯ BACKEND:</strong> (Knows Basics in backend) MongoDB, Express.js, Node.js.
            </>
          }
          image={skills} 
        />
      </div>
    </section>
  );
}

export default About;
