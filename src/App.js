import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./Utils/BooksAPI";
import ListBook from "./components/Book_List";
import BookSearch from "./components/Book_Search";
import "./App.css";

class BooksApp extends Component {
  state = {
    Books: []
  };

  componentDidMount() {
    this.detailsBooks();
  }

  detailsBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ Books: books });
    });
  };

  booksUpdates = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.detailsBooks();
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBook books={this.state.Books} onChange={this.booksUpdates} />
          )}
        />
        <Route
          exact
          path="/search"
          render={({ history }) => (
            <BookSearch
              onChange={this.booksUpdates}
              myBooks={this.state.Books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
