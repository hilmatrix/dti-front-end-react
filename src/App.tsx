import { Route, Routes } from 'react-router-dom';
import './App.css';
import Day4Exercise1 from "./exercises/day4/exercise1/index";
import Day4Exercise2 from "./exercises/day4/Exercise2";

const App: React.FC = () => {
  return (
    <div>
      {location.pathname === '/' && (
        <div>
        <h1>Hilmatrix All React Projects</h1>
        <nav>
          <ul>
            <li>
            <a href="/day4exercise1">Day 4 Exercise 1</a>
            </li>
            <li>
            <a href="/day4exercise2">Day 4 Exercise 2</a>
            </li>
          </ul>
        </nav>
        </div>
       )}
      
      <Routes>
        <Route path="/day4exercise1" element={<Day4Exercise1 />} />
        <Route path="/day4exercise2" element={<Day4Exercise2 />} />
      </Routes>
    </div>
  );
}

export default App
