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
  Employees,
  Home,
  RecoveryPassword,
  MyAppointments,
  About,
  Users,
  Payment,
  MyAccount,
  BusinessManagement,
  Attendances,
} from "../pages";
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
            <Route path="/home" element={<BusinessManagement />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/agenda" element={<Catalog />} />
            <Route path="/funcionarios" element={<Employees />} />
            <Route path="/usuarios" element={<Users />} />
            <Route path="/avaliacoes" element={<Users />} />
            <Route path="/pagamentos" element={<Users />} />
            <Route path="/atendimentos" element={<Attendances />} />
          </>
        )}

        {authCredentials?.user?.permission === "CLIENTE" && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/agendamento" element={<Schedule />} />
            <Route path="/meus-agendamentos" element={<MyAppointments />} />
            <Route path="/lista-de-servicos" element={<CatalogList />} />
            <Route path="/payment" element={<Payment replace />} />
            <Route path="/minha-conta" element={<MyAccount />} />
            <Route path="/sobre" element={<About />} />
          </>
        )}
      </RoutesRRD>
    </Router>
  );
}
