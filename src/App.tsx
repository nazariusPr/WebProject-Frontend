import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import AuthenticationRoutes from "./routes/AuthenticationRoutes";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import HomePage from "./pages/HomePage";
import RoutesConstant from "./constants/client/RoutesConstant";
import AuthProvider from "./context/AuthContext";
import GenerateImagePage from "./pages/GenerateImagePage";
import SeeActionPage from "./pages/SeeActionPage";
import SeeAllActionsPage from "./pages/SeeAllActionsPage";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
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
              <Route path={RoutesConstant.HOME} element={<HomePage />}>
                <Route
                  path={RoutesConstant.GENERATE_IMAGE}
                  element={<GenerateImagePage />}
                />
                <Route
                  path={RoutesConstant.SEE_ACTION}
                  element={<SeeActionPage />}
                />
                <Route
                  path={RoutesConstant.SEE_ALL_ACTIONS}
                  element={<SeeAllActionsPage />}
                />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
