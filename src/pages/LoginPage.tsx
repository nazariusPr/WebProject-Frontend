import axios from "axios";
import { useState } from "react";
import Form from "../components/UI/Form";
import RoutesConstant from "../constants/client/RoutesConstant";
import styles from "../styles/main.module.css";
import { message } from "antd";
import { FieldType } from "../components/UI/Form";
import { AuthenticationDto } from "../types/Authentication";
import { authenticateUser, googleOAuth } from "../api/authenticationApi";
import { useAuth } from "../context/AuthContext";
import withLoading from "../hoc/withLoading/withLoading";
import Validator from "../utils/validator";

type LoginPageType = {
  setLoading: (state: boolean) => void;
};

function LoginPage({ setLoading }: LoginPageType) {
  const [formData, setFormData] = useState<AuthenticationDto>({
    email: "",
    password: "",
  });

  const { setAccessToken } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await authenticateUser(formData);
      setAccessToken(response.data.access_token);

      message.success("Welcome !");
    } catch (error) {
      let notification;

      if (axios.isAxiosError(error)) {
        notification = error.response?.data?.message;
      } else {
        notification = "Authentication failed. Please try again.";
      }
      message.error(notification);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (token: string) => {
    try {
      setLoading(true);

      const response = await googleOAuth({ token });
      setAccessToken(response.data.access_token);

      message.success("Welcome !");
    } catch (error) {
      let notification;

      if (axios.isAxiosError(error)) {
        notification = error.response?.data?.message;
      } else {
        notification = "Authentication failed. Please try again.";
      }
      message.error(notification);
    } finally {
      setLoading(false);
    }
  };

  const fields: FieldType<AuthenticationDto>[] = [
    {
      name: "email",
      label: "Email",
      type: "email",
      validation: Validator.validateEmail,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      validation: Validator.validatePassword,
    },
  ];

  return (
    <div className={styles.container}>
      <Form
        fields={fields}
        formData={formData}
        formTitle="Login Page"
        description="Don't have an account?"
        linkText="Register here"
        linkTo={RoutesConstant.REGISTER}
        handleSubmit={handleSubmit}
        handleGoogleLogin={handleGoogleLogin}
        handleChange={handleChange}
      />
    </div>
  );
}

export default withLoading(LoginPage);
