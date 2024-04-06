import bookLogo from "./assets/books.png";
import BookList from "./components/Books.jsx";
import SingleBook from "./components/SingleBook.jsx";
// import SingleBook from './components/SingleBook.jsx';
// import Account from './components/Account.jsx';

function App() {
 
  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
               <BookList />
               <SingleBook />
        
    </>
  );
}

export default App;
