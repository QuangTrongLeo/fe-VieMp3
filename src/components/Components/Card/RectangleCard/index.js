import React from 'react';
import './RectangleCard.scss';

function RectangleCard({ content, desc, cover, href }) {
  return (
    <a href={href} className="rectangle-card">
      <div className="rectangle-cover-container">
        <img src={cover} alt={content} />
      </div>
      <div className="rectangle-info">
        <span className="rectangle-content">{content}</span>
        <span className="rectangle-desc">{desc}</span>
      </div>
    </a>
  );
}

export default RectangleCard;
