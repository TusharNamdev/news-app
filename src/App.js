import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './navbar/navbar';
import Home from './navbar/Home';
import About from './navbar/About';
import Contact from './navbar/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
