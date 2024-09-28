import styles from "../../styles/main.module.css";
import Link from "../UI/Link";

type DescriptionProps = {
  children: string;
  linkTo?: string;
  linkText?: string;
  descriptionClassName?: string;
  linkClassName?: string;
};

function Description({
  children,
  linkTo,
  linkText,
  descriptionClassName,
  linkClassName,
}: DescriptionProps) {
  return (
    <p className={`${styles.description} ${descriptionClassName || ""}`}>
      {children}{" "}
      {linkTo && linkText && (
        <Link linkTo={linkTo} className={linkClassName}>
          {linkText}
        </Link>
      )}
    </p>
  );
}

export default Description;
