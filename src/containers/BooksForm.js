import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
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
    e.preventDefault();

    const target = e.target;
    const value = target.value;
    const name = target.name;

    console.log('input', name);

    this.setState({
      title: e.target.value,
      category: e.target,
    });
    e.target.value = '';
  }

  render() {
    return (
      <form action="">
        <input type="text" name="title" id="" />
        <select name="categories" id="">
          {this.categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit" onClick={this.handleChange}>
          Submit
        </button>
      </form>
    );
  }
}

export default BooksForm;
