import { ChangeEvent } from "react";
import { FieldType } from "./Form";
import styles from "../../styles/main.module.css";

type InputProps<T> = {
  value: string;
  field: FieldType<T>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string | null;
  className?: string;
};

function Input<T>({
  value,
  field,
  errorMessage,
  onChange,
  className,
}: InputProps<T>) {
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.label}>{field.label}:</label>
      <input
        type={field.type}
        name={field.name as string}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${className || ""}`}
      />
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
}

export default Input;
