import React from 'react';
import ProptTypes from 'prop-types';

const CategoryFilter = ({onFilter, filter }) => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <select
      name="category"
      id="cat"
      onChange={e => {
        e.preventDefault();
        onFilter(filter);
      }}
    >
      <option value="All" key="All">All</option>
      {categories.map(cat => (
        <option value={cat} key={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  onFilter: ProptTypes.func.isRequired,
};
export default CategoryFilter;
