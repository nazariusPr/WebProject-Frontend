import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import styles from "../styles/FormData.module.css";

export type FieldType<T> = {
  name: keyof T;
  label: string;
  type: string;
  validation: (value: string) => string | null;
};

type FormDataParams<T> = {
  formTitle: string;
  handleSubmit: () => void;
  formData: T;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  fields: FieldType<T>[];
  description?: string;
  linkText?: string;
  linkTo?: string;
};

function FormData<T>({
  formTitle,
  handleSubmit,
  formData,
  handleChange,
  fields,
  description,
  linkText,
  linkTo,
}: FormDataParams<T>) {
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    handleChange(e);

    const field = fields.find((f) => f.name === name);
    if (field) {
      const error = field.validation(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>{formTitle}</h2>
      {fields.map((field) => (
        <div key={field.name as string} className={styles.fieldContainer}>
          <label className={styles.label}>{field.label}:</label>
          <input
            type={field.type}
            name={field.name as string}
            value={formData[field.name] as string}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
          {errors[field.name as string] && (
            <span className={styles.error}>{errors[field.name as string]}</span>
          )}
        </div>
      ))}
      <Button onClick={errors ? () => {} : handleSubmit}>Submit</Button>
      {description && (
        <p className={styles.description}>
          {description}{" "}
          {linkTo && linkText && (
            <Link to={linkTo} className={styles.link}>
              {linkText}
            </Link>
          )}
        </p>
      )}
    </form>
  );
}

export default FormData;
