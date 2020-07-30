import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook }  from '../actions/index';

const randomId = () => Math.floor(Math.random() * 1000);

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
    let book = {
      title: this.state.title,
      category: this.state.category,
      bookId: randomId(),
    }
    console.log(book);
    this.props.createBook(book);
    this.setState({
      title: '',
      category: '',
    }); 
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

const mapDispatchToProps = dispatch => {
  return {
    createBook: (book) => {
      dispatch(createBook(book));
    }
  }
}

BooksForm.protoTypes = {
  createBook: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(BooksForm);
