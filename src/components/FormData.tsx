import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/FormData.module.css";

export type FieldType<T> = {
  name: keyof T;
  label: string;
  type: string;
};

type FormDataParams<T> = {
  formTitle: string;
  handleSubmit: (e: React.FormEvent) => void;
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
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
      ))}
      <button type="submit" className={styles.button}>
        Submit
      </button>
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
