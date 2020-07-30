import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  handleChange(e) {
    let name = e.target.name;
    this.setState(Object.assign({}, this.state, { [name]: e.target.value }));
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('A new book was submitted: ', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={this.handleChange}
        />
        <label htmlFor="category">Category</label>
        <select name="category" id="cat" onChange={this.handleChange}>
          {this.categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BooksForm;
