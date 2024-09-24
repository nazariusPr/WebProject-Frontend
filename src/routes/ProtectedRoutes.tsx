import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import RoutesConstant from "../constants/client/RoutesConstant";

const ProtectedRoutes = () => {
  const { accessToken, accessTokenLoading } = useAuth();
  if (accessTokenLoading) {
    return <div>Loading...</div>;
  }
  return accessToken ? <Outlet /> : <Navigate to={RoutesConstant.LOGIN} />;
};

export default ProtectedRoutes;
