import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="content">
        <section id="about">
          <h2>About Me</h2>
          <p>Hello! I'm a developer interested in math, computer science, and AI.</p>
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
            <li>Email: example@email.com</li>
            <li>GitHub: <a href="https://github.com/Hal1903">Hal1903</a></li>
            {/* <li>Twitter: <a href="https://twitter.com/">@username</a></li> */}
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

export default App;
