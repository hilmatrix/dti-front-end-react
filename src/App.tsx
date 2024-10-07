import { Route, Routes } from 'react-router-dom';
import './App.css';
import Day4Exercise1 from "./exercises/day4/exercise1/index";
import Day4Exercise2 from "./exercises/day4/exercise1/route/Contact/index";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Day4Exercise1 />} />
        <Route path="/contact" element={<Day4Exercise2 />} />
      </Routes>
    </>
  );
}

export default App
