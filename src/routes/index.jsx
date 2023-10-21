import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home/"

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};