import styles from "../../styles/main.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import RoutesConstant from "../../constants/client/RoutesConstant";
import { logout } from "../../api/authenticationApi";
import { IoLogOut } from "react-icons/io5";

const Header = () => {
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
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>WebProject</h1>
      <button className={styles.logoutButton} onClick={handleLogout}>
        <IoLogOut size={20} />
      </button>
    </header>
  );
};

export default Header;
