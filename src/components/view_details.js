import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-responsive-modal";
import "../scss/view_details.scss";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false
    };
  }

  onOpenModal = () => {
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { openModal } = this.state;
    const { book } = this.props;

    return (
      <div>
        <button type="button" onClick={this.onOpenModal}>
          View Details
        </button>
        <Modal open={openModal} onClose={this.onCloseModal} center>
          <h1>Book Details</h1>
          {book.imageLinks && (
            <img
              className="cover-image"
              src={book.imageLinks.thumbnail}
              alt={book.title}
            />
          )}

          <h2>{book.title}</h2>
          <h3>
            {" "}
            {!!book.authors &&
              book.authors.map(author => (
                <div key={`${book.id}-${author}`}>{author}</div>
              ))}
          </h3>

          {book.description && <blockquote>{book.description}</blockquote>}
          {!!book.categories && (
            <div className="details">
              Category:{" "}
              {book.categories.map(category => (
                <div key={category}>
                  <strong>{category}</strong>
                </div>
              ))}
            </div>
          )}

          {book.publisher && (
            <div className="details">
              Publisher: <strong>{book.publisher}</strong>
            </div>
          )}
          {book.publishedDate && (
            <div className="details">
              Publisher Date: <strong>{book.publishedDate}</strong>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}

Details.propTypes = {
  book: PropTypes.shape({}).isRequired
};

export default Details;
