import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyEmail } from "../api/authenticationApi";
import { useAuth } from "../context/AuthContext";

function VerifyEmailPage() {
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
          const response = await verifyEmail(token);

          setAccessToken(response.data.access_token);
          navigate("/dashboard");
        } catch (error) {
          console.error("Error confirming email:", error);
        }
      } else {
        console.error("No token provided for email verification.");
        navigate("/error");
      }
    };

    confirmUserEmail();
  }, [location.search]);

  return <div>Please wait ... </div>;
}

export default VerifyEmailPage;
