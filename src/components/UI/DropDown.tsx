import { ChangeEvent } from "react";
import { FieldType } from "./Form";
import styles from "../../styles/main.module.css";
import { ImageSize } from "../../types/Action";

type DropDownOption = {
  value: string;
  label: string;
};

type DropdownProps<T> = {
  value: string;
  field: FieldType<T>;
  onChange: (size: ImageSize) => void;
  options: DropDownOption[];
  errorMessage?: string | null;
  className?: string;
};

function Dropdown<T>({
  value,
  field,
  errorMessage,
  onChange,
  options,
  className,
}: DropdownProps<T>) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as ImageSize;
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
