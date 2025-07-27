import React from 'react';
import './SquareCard.scss';

function SquareCard({ content, desc, cover, href }) {
  return (
    <a href={href} className="square-card">
      <div className="square-cover-container">
        <img src={cover} alt={content} />
      </div>
      <div className="square-content">{content}</div>
      <div className="square-desc">{desc}</div>
    </a>
  );
}

export default SquareCard;
