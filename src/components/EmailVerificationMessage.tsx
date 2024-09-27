import styles from "../styles/EmailVerificationMessage.module.css";
import Button from "./Button";

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
      <h2 className={styles.title}>Email Verification</h2>
      <p className={styles.message}>
        A verification email has been sent to <strong>{email}</strong>. Please
        check your inbox to verify your email address.
      </p>
      <Button onClick={onResend}>Resend Verification Email</Button>
    </div>
  );
}

export default EmailVerificationMessage;
