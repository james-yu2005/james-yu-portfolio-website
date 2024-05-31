import './App.css';
import Home from './pages/Home'
import Navbar from './pages/Navbar';
import Experience from './pages/Experience';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Experience/>
    </div>
  );
}

export default App;
