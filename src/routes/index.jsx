import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Agendamento, Autenticacao, Home, RecoveryPassword, About, Users, Assessment, Services} from "../pages";


export const AppRouter = () => {
  return (
    <Router>
      <Routes>

        <Route path="*" element={<Autenticacao />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recuperar-senha" element={<RecoveryPassword />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/assessment" element={<Assessment />} />
      </Routes>
    </Router>
  );
};
