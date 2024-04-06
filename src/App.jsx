import BookList from "./components/Books.jsx";
import { Link, BrowserRouter as Router } from "react-router-dom";
import SingleBook from "./components/SingleBook.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>Library App</h1>
        <Routes>
          <Route path="/" element={<BookList />} />

          <Route path="/book/:id" element={<SingleBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
