import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import './App.css';
import MarkdownArticle from './pages/MarkdownArticle';
import ArticleList from './pages/ArticleList';
// import ReactMarkdown from 'react-markdown';


// import Linear from './pages/course/Linear';
// import ML from './pages/course/ML';
// import LinearArticle1 from './pages/course/linear/Article1';
// import MLArticle1 from './pages/course/rl/Article2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/course/:topic/:articleId" element={<MarkdownArticle />} />
        <Route path="/course/:topic" element={<ArticleList />} />
      </Routes>
    </Router>
  );
}

export default App;
