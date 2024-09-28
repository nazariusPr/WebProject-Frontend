import { Link as Lnk } from "react-router-dom";
import styles from "../../styles/main.module.css";

type LinkProps = {
  children: string;
  linkTo: string;
  className?: string;
};

function Link({ children, linkTo, className }: LinkProps) {
  return (
    <Lnk to={linkTo} className={`${styles.link} ${className || ""}`}>
      {children}
    </Lnk>
  );
}

export default Link;
