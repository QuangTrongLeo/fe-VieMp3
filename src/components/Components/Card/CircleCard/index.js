import React from 'react';
import './CircleCard.scss';

function CircleCard({ content, cover, href }) {
  return (
    <a href={href} className="circle-card">
      <div className="circle-cover-container">
        <img src={cover} alt={content} />
      </div>
      <div className="circle-content">{content}</div>
    </a>
  );
}

export default CircleCard;
