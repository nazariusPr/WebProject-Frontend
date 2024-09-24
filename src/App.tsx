import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
