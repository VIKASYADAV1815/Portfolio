import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll'; // react-scroll ka Link use kar
import './Home.css';
import my from '../../assets/dp.jpg';
import TypingEffect from 'react-typing-effect';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import cv from '../../assets/VIKAS_CV.pdf';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const profileImageRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const typingEffectRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [line1Ref.current, line2Ref.current, line3Ref.current],
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: { trigger: line1Ref.current, start: 'top 90%', toggleActions: 'play none none none' },
      }
    );
    gsap.fromTo(
      typingEffectRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: typingEffectRef.current, start: 'top 90%', toggleActions: 'play none none none' },
      }
    );
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 1, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: buttonsRef.current, start: 'top 90%', toggleActions: 'play none none none' },
      }
    );
    gsap.fromTo(
      profileImageRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: profileImageRef.current, start: 'top 90%', toggleActions: 'play none none none' },
      }
    );
  }, []);

  return (
    <div id="home" className="home-container">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1" ref={line1Ref}>I'M</div>
          <div className="line2" ref={line2Ref}>VIKAS YADAV</div>
          <div className="line3" ref={line3Ref}></div>
          <div ref={typingEffectRef} className="typing-effect-container">
            <TypingEffect text={["Web Developer", "Editor"]} speed={500} eraseSpeed={50} cursor="" />
          </div>
          <div className="button-container" ref={buttonsRef}>
            {/* "HIRE ME" ko Link mein convert kar */}
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              className="action-button"
            >
              HIRE ME
            </Link>
            <a href={cv} download className="action-button">DOWNLOAD CV</a>
          </div>
        </div>
      </div>
      <div className="righthome">
        <img src={my} alt="Vikas Yadav" className="profile-image" ref={profileImageRef} />
      </div>
    </div>
  );
};

export default Home;