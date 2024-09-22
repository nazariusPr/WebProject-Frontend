import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function VerifyEmailPage() {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    async function confirmUserEmail() {
      if (!token) {
        console.error("No token provided.");
        navigate("/");
        return;
      }

      try {
        console.log("Email confirmation in progress with token:", token);
        navigate("/");
      } catch (error) {
        console.error("Error confirming email:", error);
      }
    }

    confirmUserEmail();
  }, [token]);

  return <div>Hello</div>;
}

export default VerifyEmailPage;
