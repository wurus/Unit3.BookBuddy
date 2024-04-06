const fetchBooks = async () => {
  try {
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
    const data = await response.json();
    return data.books;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

export default fetchBooks;
