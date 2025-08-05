import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Courses.css';

const courses = [
  {
    id: 'elementary_math',
    title: 'Elementary Mathematics',
    description: 'Expose yourself to advanced topics and abstraction in arithmetics, number theory, graph theory, and algorithms.',
    image: '../images/Courses/math1.png',
  },
  {
    id: 'linear',
    title: 'Linear Algebra',
    description: 'Understand linear algebra to build a strong foundation for ML and various other fields of mathematics.',
    image: '../images/Courses/linear.png',
  },
  {
    id: 'ml1',
    title: 'Introduction to Machine Learning',
    description: 'Introduction to machine learning with mathematical backgrounds and Python programs.',
    image: '../images/Courses/ml1.png',
  },
];

function Courses() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="navbar">
        <h1>My Portfolio</h1>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>

      <main className="content">
        <h2>Courses</h2>
        <div className="course-container">
          {courses.map(course => (
            <div className="course-panel" key={course.id} onClick={() => navigate(`/course/${course.id}`)}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-info">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Courses;
