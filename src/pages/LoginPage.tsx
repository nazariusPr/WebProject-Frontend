import React, { useState } from "react";
import FormData from "../components/FormData";
import RoutesConstant from "../constants/client/RoutesConstant";
import styles from "../styles/Page.module.css";
import { FieldType } from "../components/FormData";
import { AuthenticationDto } from "../types/Authentication";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<AuthenticationDto>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Login data:", formData);
  };

  const fields: FieldType<AuthenticationDto>[] = [
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];

  return (
    <div className={styles.container}>
      <FormData
        handleSubmit={handleSubmit}
        formData={formData}
        formTitle="Login Page"
        handleChange={handleChange}
        fields={fields}
        description="Don't have an account?"
        linkText="Register here"
        linkTo={RoutesConstant.REGISTER}
      />
    </div>
  );
};

export default LoginPage;
