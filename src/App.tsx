import { Route, Routes } from 'react-router-dom';
import './App.css';
import Day4Exercise1 from "./exercises/day4/exercise1/index";

const App: React.FC = () => {
  return (
    <div>
      {location.pathname === '/' && (
        <div>
        <h1>Hilmatrix All React Projects</h1>
        <nav>
          <ul>
            <li>
            <a href="/day4exercise1">Day 4 Exercise</a>
            </li>
          </ul>
        </nav>
        </div>
       )}
      
      <Routes>
        <Route path="/day4exercise1" element={<Day4Exercise1 />} />>
      </Routes>
    </div>
  );
}

export default App
