import React from 'react';
import './Portfolio.css';
import project1 from './project1.jpg';
import project2 from './project2.jpg';
import project3 from './project3.jpg';
import project4 from './project4.jpg';
import project5 from './project5.jpg';
import project6 from './project6.jpg';

function Portfolio() {
  return (
    <section className="Portfolio">
      <h2>Portfolio</h2>
      <div className="ProjectList">
        <div className="Project">
          <img src={project1} alt="Project 1" />
          <h3>Project 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Deployed Application</a>
        </div>
      </div>  <div className="Project">
        </div> 
    </section>
  )}
