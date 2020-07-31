import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mapDispatchToProps = this.mapDispatchToProps.bind(this);
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
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBook(this.state);
    console.log('A new book was submitted: ', this.state);
    this.setState({ title: '', category: '' });
  }

  mapDispatchToProps = (dispatch) => {
    const book = this.props;
    return { createBook: () => dispatch(createBook(book)) };
  };

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

export default connect(null, this.mapDispatchToProps)(BooksForm);
