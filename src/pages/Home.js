import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
import AboutSlideshow from '../components/Slideshow'; // Adjust the import path as necessary
import HorizontalTimeline from '../components/Timeline';
// import { Timeline } from "flowbite-react";
/*
TODO: mobile responsive design
TODO: add a comment widget
*/

function Home() {
  return (
    <div className="App">
      <header className="navbar">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <Link to="/course">Resources</Link>
        </nav>
      </header>

        <main className="content">
          <section id="about" className="about-container">
            {/* Left column: Text */}
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                Welcome! I'm Haruku, an undergraduate researcher and developer interested in math, computer science, and education at University of Kentucky.
              </p>
              <p>
                My goals are to foster academic curiosity and enjoyment in learning and to earn a PhD in computer science.
              </p>
              <p>
                Here is my journey of academic and engineering landscapes:
              </p>
            </div>

            {/* Right column: Slideshow */}
            <div className="about-slideshow">
              <AboutSlideshow /> {/* edit src/component to add images */}
            </div>

        </section>

        <section className="timeline-section">
          <h2>Timeline</h2> 
          <HorizontalTimeline />  
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p>Coming soon...</p>
        </section>
      </main>

      <footer className="footer">
        <section id="contact">
          <h2>Contact</h2>
          <ul>
            <li>Email: hahikeyuaono0419@gmail.com</li>
            <li>GitHub: <a href="https://github.com/Hal1903">Hal1903</a></li>
          </ul>
        </section>

        <section className="comments">
          <h2>Comments</h2>
          <p>(You can embed a comment widget here later)</p>
        </section>
      </footer>
    </div>
  );
}

export default Home;
