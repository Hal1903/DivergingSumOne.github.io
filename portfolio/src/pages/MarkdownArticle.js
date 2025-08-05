import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownArticle() {
  const { topic, articleId } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/posts/${topic}/${articleId}.md`) // if cannot rename the folder by EPERM, the file is open in live-server. Close it.
      .then(res => res.text())
      .then(setContent)
      .catch(() => setContent('# 404\nArticle not found.'));
  }, [topic, articleId]);

  return (
    <div className="markdown-body">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default MarkdownArticle;