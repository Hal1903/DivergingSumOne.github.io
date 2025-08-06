import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="App">
      <header className="navbar">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <Link to="/#/course">Resources</Link>
        </nav>
      </header>

      <main className="content">
        <section id="about">
          <h2>About Me</h2>
          <p>
          Welcome to my website. I'm an undergraduate researcher and developer interested in math, computer science, and education.
          <br></br>
          I enjoy exploring the intersection of these fields and sharing my knowledge through various projects. 
          <br></br>
          My goal is not only to make complex topics accessible and engaging for everyone but also to foster academic curiosity and enjoyment in learning.
          If you are curious about these fields, feel free to explore the Projects and Resources section containing articles on mathematics and computer science.
          <br></br>
          Here is my journey of academic and engineering landscapes:
          </p>
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
            <li>Email: divergingsumone@gmail.com</li>
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
