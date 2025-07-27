import React, { useRef } from 'react';
import './HorizontalScroll.scss';

function HorizontalScroll({ children }) {
  const scrollRef = useRef(null);

  const scroll = direction => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-wrapper">
      <button className="scroll-btn left" onClick={() => scroll('left')}>
        &lt;
      </button>
      <div className="scroll-container" ref={scrollRef}>
        {children}
      </div>
      <button className="scroll-btn right" onClick={() => scroll('right')}>
        &gt;
      </button>
    </div>
  );
}

export default HorizontalScroll;
