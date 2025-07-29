import React, { useState } from 'react';

function LimitedList({ items = [], renderItem, limit = 6, showAllText = 'Hiện tất cả', showLessText = 'Ẩn bớt' }) {
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? items : items.slice(0, limit);

  return (
    <div>
      {/* Không wrap bằng col- nữa, giao cho renderItem xử lý */}
      <div className="row">{displayedItems.map((item, index) => renderItem(item, index))}</div>

      {items.length > limit && (
        <div className="text-center mt-3">
          <button className="btn btn-outline-light" onClick={() => setShowAll(!showAll)}>
            {showAll ? showLessText : showAllText}
          </button>
        </div>
      )}
    </div>
  );
}

export default LimitedList;
