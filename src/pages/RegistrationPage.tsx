import { useState } from "react";
import Form from "../components/UI/Form";
import EmailVerificationMessage from "../components/email/EmailVerificationMessage";
import RoutesConstant from "../constants/client/RoutesConstant";
import styles from "../styles/main.module.css";
import Validator from "../utils/validator";
import { FieldType } from "../components/UI/Form";
import { AuthenticationDto } from "../types/Authentication";
import { registerUser } from "../api/authenticationApi";

function RegistrationPage() {
  const [formData, setFormData] = useState<AuthenticationDto>({
    email: "",
    password: "",
  });
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await registerUser(formData);
      setIsSent(true);
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
      {isSent ? (
        <EmailVerificationMessage email={formData.email} onResend={() => {}} />
      ) : (
        <Form
          handleSubmit={handleSubmit}
          formData={formData}
          formTitle="Registration Page"
          handleChange={handleChange}
          fields={fields}
          description="Already have an account?"
          linkText="Log in here"
          linkTo={RoutesConstant.LOGIN}
        />
      )}
    </div>
  );
}

export default RegistrationPage;
