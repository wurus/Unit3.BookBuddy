import React, { useState, useEffect } from 'react';
import fetchBooks from './fetchBooks.js';

const SingleBook = () => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const books = await fetchBooks();
        if (books.length > 0) {
          setBook(books[0]);
        }
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBookData();
  }, []);

  if (!book) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <img src={book.image} alt={book.title} />
      <button>Add to Cart</button>
    </div>
  );
};

export default SingleBook;
