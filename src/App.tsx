import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer"; // ou o caminho onde ele está
import Main from "./components/Main";
import Oportunidade from "./components/oportunidade";
import Sobre from "./components/Sobre"; // caminho do seu arquivo de oportunidades
import Perfil from "./components/perfil";


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/oportunidades" element={<Oportunidade />} />
         <Route path="/sobre" element={<Sobre />} />
         <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <Footer />
    </Router>

  );
}
