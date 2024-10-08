import { IoClose } from "react-icons/io5";
import styles from "../../styles/main.module.css";

type CloseButtonProps = {
  onClick: () => void;
  buttonClassName?: string;
};

function CloseButton({ onClick, buttonClassName }: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.closeButton} ${buttonClassName}`}
      aria-label="Close"
    >
      <IoClose />
    </button>
  );
}

export default CloseButton;
