import React from 'react';
import './AboutMe.css';
import avatar from './avatar.jpg';

function AboutMe() {
  return (
    <section className="AboutMe">
      <img src={avatar} alt="Avatar" />
      <h2>About Me</h2>
      <p>
        Hi, I'm John Doe, a full-stack web developer. I have experience in HTML, CSS, JavaScript, React, Node.js, and more.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </section>
  );
}

export default AboutMe;
