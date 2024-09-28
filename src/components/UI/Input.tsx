import { ChangeEvent } from "react";
import { FieldType } from "./Form";
import styles from "../../styles/FormData.module.css";

type InputProps<T> = {
  value: string;
  field: FieldType<T>;
  errorMessage: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Input<T>({ value, field, errorMessage, onChange }: InputProps<T>) {
  return (
    <div key={field.name as string} className={styles.fieldContainer}>
      <label className={styles.label}>{field.label}:</label>
      <input
        type={field.type}
        name={field.name as string}
        value={value}
        onChange={onChange}
        className={styles.input}
        required
      />
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
}

export default Input;
