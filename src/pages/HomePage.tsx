import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { logout } from "../api/authenticationApi";
import RoutesConstant from "../constants/client/RoutesConstant";
import Button from "../components/Button";

const HomePage = () => {
  const { setAccessToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setAccessToken(null);
      await logout();
      navigate(RoutesConstant.LOGIN);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      <h1>Home page</h1>
      <p>Welcome to your home page!</p>
      <p>This page is protected and can only be accessed by logged-in users.</p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default HomePage;
