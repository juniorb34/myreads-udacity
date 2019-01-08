import React, { Component } from "react";

class Book extends Component {
  render() {
    const { book, onUpdateBooks } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          {book.imageLinks ? (
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}
            />
          ) : (
            <div className="book-cover" style={{ width: 128, height: 193 }}>
              <h4>Sem Imagem</h4>
            </div>
          )}
          <div className="book-shelf-changer">
            <select
              value={book.shelf ? book.shelf : "none"}
              onChange={event => onUpdateBooks(book, event.target.value)}
            >
              <option value="" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
    );
  }
}

export default Book;
