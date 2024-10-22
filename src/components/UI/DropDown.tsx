import { ChangeEvent } from "react";
import { FieldType } from "./Form";
import styles from "../../styles/main.module.css";

type DropDownOption = {
  value: string;
  label: string;
};

type DropdownProps<T, E> = {
  value: string;
  field: FieldType<T>;
  onChange: (elem: E) => void;
  options: DropDownOption[];
  errorMessage?: string | null;
  className?: string;
};

function Dropdown<T, E>({
  value,
  field,
  errorMessage,
  onChange,
  options,
  className,
}: DropdownProps<T, E>) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as E;
    onChange(selectedValue);
  };
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.label}>{field.label}:</label>
      <select
        name={field.name as string}
        value={value}
        onChange={handleChange}
        className={`${styles.input} ${className || ""}`}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
}

export default Dropdown;
