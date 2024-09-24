import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import RoutesConstant from "../constants/client/RoutesConstant";

const ProtectedRoutes = () => {
  const { accessToken } = useAuth();
  return accessToken ? <Outlet /> : <Navigate to={RoutesConstant.LOGIN} />;
};

export default ProtectedRoutes;
