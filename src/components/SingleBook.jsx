import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

import fetchBooks from './fetchBooks.js';

const SingleBook = () => {
  const [singleBook, setSingleBook] = useState(null);
  const { id } = useParams(); 
  console.log("id:",id)

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const books = await fetchBooks();
        console.log(books)
        const bookData = books.find(book => book.id == id); 
        console.log("singbook:",bookData);
        setSingleBook(bookData);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBookData();
  }, []); 

  if (!singleBook) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{singleBook.title}</h2>
      <img src={singleBook.coverimage} alt={singleBook.title} />
      <button>Add to Cart</button>
    </div>
  );
};

export default SingleBook;
