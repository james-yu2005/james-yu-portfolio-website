import './App.css';
import Home from './pages/Home'
import Navbar from './pages/Navbar';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
