import {
  BrowserRouter as Router,
  Routes as RoutesRRD,
  Route,
} from "react-router-dom";
import {
  Schedule,
  Authentication,
  Home,
  RecoveryPassword,
  MyAppointments,
  About,
  Users,
  Services,
  ShoppingCart,
  Payment,
} from "../pages";
import { Profiles } from "../pages/Profiles";
import { useAuthStore } from "../services";

export function Routes() {
  const { authCredentials } = useAuthStore();

  return (
    <Router>
      <RoutesRRD>
        <Route path="*" element={<Authentication />} />
        <Route path="/recuperar-senha" element={<RecoveryPassword />} />

        {authCredentials?.user?.permission === "ADMIN" && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/agendamento" element={<Schedule />} />
            <Route path="/meus-agendamentos" element={<MyAppointments />} />
            <Route path="/profiles/:userId" element={<Profiles />} />
            <Route path="/payment" element={<Payment replace />} />
            <Route path="/services" element={<Services />} />
            <Route path="/users" element={<Users />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/about" element={<About />} />
          </>
        )}
      </RoutesRRD>
    </Router>
  );
}
