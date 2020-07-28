import React from 'react';

const BooksFrom = () => {
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
    <form action="">
      <input type="text" name="" id="" />
      <select name="categories" id="">
        {categories.map(cat => (
          <option value={cat}>{cat}</option>
        ))}
      </select>
      <button>Submit</button>
    </form>
  );
};

export default BooksFrom;
