import './App.css';
import {Outlet} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>React Final Project</h1>
      <h3>Formula 1</h3>
      <Outlet />
    </div>
  );
}

export default App;
