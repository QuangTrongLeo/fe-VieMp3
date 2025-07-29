import React from 'react';
import './CreateCard.scss';

function CreateCard({ content }) {
  return (
    <button className="create-card">
      <div className="create-icon">
        <i class="fa-solid fa-circle-plus"></i>
      </div>
      <div className="create-content">{content}</div>
    </button>
  );
}

export default CreateCard;
