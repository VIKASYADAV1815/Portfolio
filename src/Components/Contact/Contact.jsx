import React, { useEffect, useRef } from 'react';
import './contact.css'; // Ensure this CSS file exists
import gsap from 'gsap'; // Import GSAP for animation
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import emailjs from '@emailjs/browser'; // Import EmailJS
import yourImage from "../../assets/contact.jpg"; // Correct path to contact.jpg
import instagramIcon from "../../assets/insta.png"; // Adjust path as necessary
import linkedinIcon from "../../assets/link.png"; // Adjust path as necessary
import twitterIcon from "../../assets/twit.png"; // Adjust path as necessary
import git from "../../assets/git1.png";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

function Contact() {
  const form = useRef(); // Reference to the form

  useEffect(() => {
    // GSAP Animation for Background Image (Pop-up effect)
    gsap.fromTo(
      '.contact',
      {
        y: '40%',  // Start from below the viewport
        opacity: 1, // Initially invisible
      },
      {
        y: '0%',    // Animate to the normal position
        opacity: 1, // Fade in
        duration: 1.5,  // Duration of animation
        scrollTrigger: {
          trigger: '.contact',
          start: 'top bottom', // Start when the top of the element hits the bottom of the viewport
          scrub: 1, // Smooth scrubbing
        },
      }
    );

    // GSAP Animation for Text Fade-In Effect
    gsap.fromTo(
      '.contact h1',
      {
        opacity: 1, // Start as invisible
        y: 50,  // Start with a slight vertical offset
      },
      {
        opacity: 1, // Fade in
        y: 0,      // Reset the vertical offset
        duration: 1,  // Duration of animation
        ease: 'power3.out', // Ease for smooth effect
        scrollTrigger: {
          trigger: '.contact h1',
          start: 'top 100%', // Start when the heading is at 80% of the viewport
          scrub: 3,
        },
      }
    );

    gsap.fromTo(
      '.contact-form', // Use the correct selector
      {
        x: -80,
        opacity: 1,
      },
      {
        opacity: 1,
        x: 20,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-form', // Ensure this is correct
          start: 'top bottom', // Adjust as needed
          scrub: 2,
        },
      }
    );
    

    // GSAP Animation for Social Media Icons Fade-In
    gsap.fromTo(
      '.social-media',
      {
        opacity: 1, // Start as invisible
      },
      {
        opacity: 1, // Fade in to fully visible
        y: 0, // Reset vertical offset
        duration: 1, // Duration of animation
        ease: 'power3.out', // Ease for smooth effect
        delay: 0.5, // Delay to animate after the text
        scrollTrigger: {
          trigger: '.social-media',
          scrub: 1,
        },
      }
    );
  }, []);

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Form data:', form.current); // Debug form data

    emailjs
      .sendForm('service_dshxrts', 'template_7yo0uss', form.current, 'TRpAqBnNCZwvnHBvA')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!'); // User feedback
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log('Error sending email:', error.text);
          alert('Failed to send message. Please try again.'); // Error feedback
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact" style={{ backgroundImage: `url(${yourImage})` }}>
    
        <p>Feel free to reach out to me using the form below:</p>

        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" placeholder="Your Name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="user_email" placeholder="Your Email" required />
          
          <label htmlFor="message">Message: <style color='red'></style></label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>

        {/* Social Media Section */}
        <div className="social-media">
          <h2>Connect with Me</h2>
          <a href="https://www.instagram.com/vikasthatics/profilecard/?igsh=azU1eXhlMWJoZGZ4" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/vikas-yadav-4510242a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/VIKASYADAV1815" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="Twitter" className="social-icon" />
          </a>
        </div>

        <div className="social-media-phone">
          <h2>Connect with Me</h2>
          <a href="https://www.instagram.com/vikasthatics/profilecard/?igsh=azU1eXhlMWJoZGZ4" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/vikas-yadav-4510242a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/VIKASYADAV1815" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="Twitter" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;