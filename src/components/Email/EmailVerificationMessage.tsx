import mainStyles from "../../styles/main.module.css";
import styles from "../../styles/email.module.css";
import Button from "../UI/Button";

type EmailVerificationMessageProps = {
  email: string;
  onResend: () => void;
};

function EmailVerificationMessage({
  email,
  onResend,
}: EmailVerificationMessageProps) {
  return (
    <div className={styles.container}>
      <h2 className={mainStyles.title}>Email Verification</h2>
      <p className={styles.message}>
        A verification email has been sent to <strong>{email}</strong>. Please
        check your inbox to verify your email address.
      </p>
      <Button onClick={onResend}>Resend Verification Email</Button>
    </div>
  );
}

export default EmailVerificationMessage;
