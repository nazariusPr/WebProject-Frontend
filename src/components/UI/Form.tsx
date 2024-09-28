import { ChangeEvent, useState } from "react";
import Description from "../general/Description";
import Input from "./Input";
import Button from "./Button";
import styles from "../../styles/main.module.css";

export type FieldType<T> = {
  name: keyof T;
  label: string;
  type: string;
  validation: (value: string) => string | null;
};

type FormParams<T> = {
  formTitle: string;
  handleSubmit: () => void;
  formData: T;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  fields: FieldType<T>[];
  description?: string;
  linkText?: string;
  linkTo?: string;
};

function Form<T>({
  formTitle,
  formData,
  fields,
  description,
  linkText,
  linkTo,
  handleSubmit,
  handleChange,
}: FormParams<T>) {
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
        <Input
          key={field.name as string}
          value={formData[field.name] as string}
          field={field}
          errorMessage={errors[field.name as string]}
          onChange={handleInputChange}
        />
      ))}
      <Button onClick={!errors ? handleSubmit : () => {}}>Submit</Button>
      {description && (
        <Description linkText={linkText} linkTo={linkTo}>
          {description}
        </Description>
      )}
    </form>
  );
}

export default Form;
