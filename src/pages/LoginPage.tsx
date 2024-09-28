import React, { useState } from "react";
import Form from "../components/UI/Form";
import RoutesConstant from "../constants/client/RoutesConstant";
import styles from "../styles/main.module.css";
import { FieldType } from "../components/UI/Form";
import { AuthenticationDto } from "../types/Authentication";
import { authenticateUser } from "../api/authenticationApi";
import { useAuth } from "../context/AuthContext";
import Validator from "../utils/validator";

function LoginPage() {
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
      const response = await authenticateUser(formData);
      setAccessToken(response.data.access_token);
    } catch (error) {
      console.error("Error during authentication:", error);
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
        handleChange={handleChange}
      />
    </div>
  );
}

export default LoginPage;
