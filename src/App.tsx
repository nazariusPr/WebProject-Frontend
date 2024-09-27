import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import AuthenticationRoutes from "./routes/AuthenticationRoutes";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import HomePage from "./pages/HomePage";
import RoutesConstant from "./constants/client/RoutesConstant";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<AuthenticationRoutes />}>
            <Route path={RoutesConstant.LOGIN} element={<LoginPage />} />
            <Route
              path={RoutesConstant.REGISTER}
              element={<RegistrationPage />}
            />
            <Route
              path={RoutesConstant.VERIFY_EMAIL}
              element={<VerifyEmailPage />}
            />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path={RoutesConstant.HOME} element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
