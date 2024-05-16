import {
  BrowserRouter as Router,
  Routes as RoutesRRD,
  Route,
} from "react-router-dom";
import {
  Schedule,
  Authentication,
  Catalog,
  CatalogList,
  Home,
  RecoveryPassword,
  MyAppointments,
  About,
  Users,
  Services,
  ShoppingCart,
  Payment,
  MyAccount,
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

        {authCredentials?.user?.permission !== "" && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/agendamento" element={<Schedule />} />
            <Route path="/meus-agendamentos" element={<MyAppointments />} />
            <Route path="/gerenciamento/catalogo" element={<Catalog />} />
            <Route path="/lista-de-servicos" element={<CatalogList />} />
            <Route path="/profiles/:userId" element={<Profiles />} />
            <Route path="/payment" element={<Payment replace />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/usuarios" element={<Users />} />
            <Route path="/minha-conta" element={<MyAccount />} />
            {/* <Route path="/shopping-cart" element={<ShoppingCart />} /> */}
            <Route path="/sobre" element={<About />} />
          </>
        )}
      </RoutesRRD>
    </Router>
  );
}
