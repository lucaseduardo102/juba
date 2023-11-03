import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Agendamento, Autenticacao, Home } from "../pages";


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Autenticacao />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};
