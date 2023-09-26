import './App.css';
import { Route, Routes } from 'react-router-dom';

import Menu from './components/Menu.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/experience" element={ <Menu /> } />
        <Route path="/projects" element={ <Menu /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
