import React from "react";
import styles from "../../styles/main.module.css";

type BoxButtonParams = {
  title: string;
  description: string;
  onClick: () => void;
  boxStyleName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const BoxButton: React.FC<BoxButtonParams> = ({
  title,
  description,
  onClick,
  boxStyleName,
  titleClassName,
  descriptionClassName,
}) => {
  return (
    <div className={`${styles.box} ${boxStyleName}`} onClick={onClick}>
      <h2 className={`${styles.boxTitle} ${titleClassName}`}>{title}</h2>
      <p className={`${styles.boxDescription} ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  );
};

export default BoxButton;
