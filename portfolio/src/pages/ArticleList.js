import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/ArticleList.css';

function ArticleList() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`/posts/${topic}/manifest.json`)
      .then(res => res.json())
      .then(async (fileNames) => {
        const articleData = await Promise.all(
          fileNames.map(async (file) => {
            const res = await fetch(`/posts/${topic}/${file}`);
            // print out response status
            console.log(`Fetching ${file}: ${res.status}`);
            const text = await res.text();
            const title = text.match(/^#\s+(.*)/)?.[1] || file;  // extract first Markdown title
            return {
              id: file.replace('.md', ''),
              title
            };
          })
        );
        setArticles(articleData);
      });
  }, [topic]);

  return (
    <div className="course-container">
      {articles.map((article) => (
        <Link key={article.id} to={`/course/${topic}/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="course-panel">
            <img className="course-image" src="/default-article.jpg" alt="article" />
            <div className="course-info">
              <h3>{article.title}</h3>
              <p>Click to read</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ArticleList;
