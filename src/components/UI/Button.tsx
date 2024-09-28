import styles from "../../styles/Button.module.css";

type ButtonProps = {
  children: string;
  onClick: () => void;
  className?: string;
};

function Button({ children, onClick, className }: ButtonProps) {
  return (
    <div onClick={onClick} className={`${styles.button} ${className || ""}`}>
      {children}
    </div>
  );
}

export default Button;
