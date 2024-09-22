import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RoutesConstant from "./constants/client/RoutesConstant";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={RoutesConstant.LOGIN} element={<LoginPage />} />
        <Route path={RoutesConstant.REGISTER} element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
