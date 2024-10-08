import styles from "./withLoading.module.css";

function withPopUp<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: T) => {
    return (
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };
}

export default withPopUp;
