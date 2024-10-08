import { useNavigate } from "react-router-dom";
import CloseButton from "../../components/UI/CloseButton";
import styles from "./withPopUp.module.css";

function withPopUp<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: T) => {
    const navigate = useNavigate();
    return (
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <CloseButton onClick={() => navigate(-1)} />
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };
}

export default withPopUp;
