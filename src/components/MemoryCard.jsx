import React from 'react';

const MemoryCard = ({ title, date, image, snippet, category, onClick }) => {
  return (
    <div className="memory-card" onClick={onClick}>
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
        <div className="card-overlay">
          <button className="card-action-btn">View Moment</button>
        </div>
      </div>
      <div className="card-content">
        <span className="card-badge">{date}</span>
        <h3 className="card-title">{title}</h3>
        <p className="card-snippet">{snippet}</p>
        <div className="card-category">
          {category}
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
