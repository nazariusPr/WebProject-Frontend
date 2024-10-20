import withLoading from "../hoc/withLoading/withLoading";
import withPopUp from "../hoc/withPopUp/withPopUp";
import styles from "../styles/main.module.css";

type SeeAllActionsPageProps = {
  setLoading: (state: boolean) => void;
};

function SeeAllActionsPage({ setLoading }: SeeAllActionsPageProps) {
  return (
    <div>
      <h1 className={styles.title} style={{ margin: "10px" }}>
        All Actions
      </h1>
    </div>
  );
}

export default withPopUp(withLoading(SeeAllActionsPage));
