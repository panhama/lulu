import { Routes,Route,Link } from 'react-router-dom';
import Header from './Components/Header';
import Book from "./Components/Book";
import './App.css';
import BookProvider from './Components/BookProvider';
import DisplayDate from './Components/DisplayDate';
import Form from './Components/Form';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <Header/>
     <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/menu">MENU</Link></li>
        <li><Link to="/book">BOOK</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
      </ul>
     </nav>
     <Routes>
      <Route path='/book' element={<BookProvider> <Form/> <DisplayDate/> </BookProvider>} />
      <Route path='/' element={<Home/>} />
      <Route path='/book' element={<Book/>} />
      <Route path='/book' element={<Book/>} />
     </Routes>
    </div>
  );
}

export default App;
