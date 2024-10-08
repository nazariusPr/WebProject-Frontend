import styles from "../../styles/main.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

function Button({ children, onClick, className, disabled }: ButtonProps) {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.button} ${className || ""} ${
        disabled ? styles.disabled : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Button;
