import styles from "../../styles/main.module.css";
import Button from "./Button";
import { FaPlus, FaMinus } from "react-icons/fa";
type CounterProps = {
  value: number;
  label: string;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

function Counter({ value, label, onChange, min = 0, max }: CounterProps) {
  const handleIncrement = () => {
    if (max === undefined || value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  return (
    <div className={styles.fieldContainer}>
      <label className={styles.label}>{label}</label>
      <div className={styles.counterContainer}>
        <Button
          onClick={handleDecrement}
          disabled={value <= min}
          className={styles.button}
        >
          <FaMinus />
        </Button>
        <div className={styles.value}>{value}</div>
        <Button
          onClick={handleIncrement}
          disabled={max !== undefined && value >= max}
          className={styles.button}
        >
          <FaPlus />
        </Button>
      </div>
    </div>
  );
}

export default Counter;
