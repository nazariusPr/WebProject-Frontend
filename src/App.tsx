import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import DashboardPage from "./pages/DashBoardPage";
import RoutesConstant from "./constants/client/RoutesConstant";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={RoutesConstant.LOGIN} element={<LoginPage />} />
          <Route
            path={RoutesConstant.REGISTER}
            element={<RegistrationPage />}
          />
          <Route
            path={RoutesConstant.VERIFY_EMAIL}
            element={<VerifyEmailPage />}
          />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
