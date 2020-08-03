import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ onFilter }) => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const handleFilter = ({ target }) => {
    onFilter(target.value);
  };

  return (
    <select name="category" id="cat" onChange={handleFilter}>
      <option value="All" key="All">
        All
      </option>
      {categories.map(cat => (
        <option value={cat} key={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
