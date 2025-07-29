import React from 'react';
import './SquareCard.scss';

function SquareCard({ content, desc, cover, href, icon }) {
  return (
    <a href={href} className="square-card">
      <div className="square-cover-container">
        {cover ? (
          <img src={cover} alt={content} />
        ) : (
          <div className="icon-placeholder">{icon || <i className="fas fa-image fa-3x"></i>}</div>
        )}
      </div>
      <div className="square-content">{content}</div>
      <div className="square-desc">{desc}</div>
    </a>
  );
}

export default SquareCard;
