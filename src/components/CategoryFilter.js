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
    <div className="header">
      <div id="logo">Bookstore CMS</div>
      <div id="select">
        Categories
        {' '}
        <select name="category" id="head-select" onChange={handleFilter}>
          <option value="All" key="All">
            All
          </option>
          {categories.map(cat => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
