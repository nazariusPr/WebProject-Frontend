import axios from "axios";
import { message } from "antd";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyEmail } from "../api/authenticationApi";
import { useAuth } from "../context/AuthContext";
import withLoading from "../hoc/withLoading/withLoading";
import RoutesConstant from "../constants/client/RoutesConstant";

type VerifyEmailPageType = {
  setLoading: (state: boolean) => void;
};

function VerifyEmailPage({ setLoading }: VerifyEmailPageType) {
  const navigate = useNavigate();
  const location = useLocation();
  const { setAccessToken } = useAuth();
  const hasExecuted = useRef(false);

  const getQueryParam = (param: string): string | null => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(param);
  };

  useEffect(() => {
    const confirmUserEmail = async () => {
      if (hasExecuted.current) return;
      hasExecuted.current = true;

      const token = getQueryParam("token");
      if (token) {
        try {
          setLoading(true);
          const response = await verifyEmail(token);

          setAccessToken(response.data.access_token);
          message.success("Email verified!");
          navigate(RoutesConstant.HOME);
        } catch (error) {
          let notification;
          if (axios.isAxiosError(error)) {
            notification = error.response?.data?.message;
          } else {
            notification = "Email Verification failed.";
          }
          message.error(notification);
        } finally {
          setLoading(false);
        }
      } else {
        message.error("No token provided for email verification.");
        navigate("/error");
      }
    };

    confirmUserEmail();
  }, [location.search]);

  return <div>Please wait ... </div>;
}

export default withLoading(VerifyEmailPage);
