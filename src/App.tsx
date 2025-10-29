import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header"; // ou o caminho onde ele está
import Main from "./components/Main";
import Oportunidade from "./components/oportunidade"; // caminho do seu arquivo de oportunidades

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/oportunidades" element={<Oportunidade />} />
      </Routes>
    </Router>
  );
}
