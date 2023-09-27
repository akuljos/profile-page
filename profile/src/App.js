import './App.css';
import { Route, Routes } from 'react-router-dom';

import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/experience" element={ <Experience /> } />
        <Route path="/projects" element={ <Projects /> } />
      </Routes>
    </div>
  );
}

export default App;
