import React, { useState } from "react";
import FormData from "../components/FormData";
import RoutesConstant from "../constants/client/RoutesConstant";
import styles from "../styles/Page.module.css";
import { FieldType } from "../components/FormData";
import { AuthenticationDto } from "../types/Authentication";

function RegistrationPage() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        formTitle="Registration Page"
        handleChange={handleChange}
        fields={fields}
        description="Already have an account?"
        linkText="Log in here"
        linkTo={RoutesConstant.LOGIN}
      />
    </div>
  );
}

export default RegistrationPage;
