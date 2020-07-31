import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import { ramdomId, randomCat } from '../randomGen/random';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];

    this.initialState = {
      title: '',
      category: this.categories[randomCat()],
    };

    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name } = e.target;
    // eslint-disable-next-line prefer-object-spread
    this.setState(Object.assign({}, this.state, { [name]: e.target.value }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    console.log(this.state);
    if (title && category) {
      createBook(this.state);
      this.setState({
        title: '',
        category: '',
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
        />
        <label htmlFor="category">Category</label>
        <select name="category" id="cat">
          {this.categories.map(cat => (
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

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

BooksForm.protoTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
