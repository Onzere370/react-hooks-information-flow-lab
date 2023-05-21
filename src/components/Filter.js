import React from "react";

function Filter({ selectedCategory, onCategoryChange }) {
  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    onCategoryChange(selectedValue);
  };

  return (
    <div className="Filter">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;