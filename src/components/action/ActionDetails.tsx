import { DetailActionDto } from "../../types/Action";
import styles from "../../styles/actions.module.css";

type ActionDetailsProps = {
  action: DetailActionDto | undefined;
};

function ActionDetails({ action }: ActionDetailsProps) {
  return (
    <div className={styles.detailsContainer}>
      <h2 className={styles.detailsTitle}>Action Details</h2>
      <p>
        <strong>Type:</strong> {action?.action_type ?? "Not Specified"}
      </p>
      <p>
        <strong>Status:</strong> {action?.action_status ?? "Not Specified"}
      </p>
      <p>
        <strong>Created At:</strong>{" "}
        {action?.created_at
          ? new Date(action.created_at).toLocaleString()
          : "Not Specified"}
      </p>
    </div>
  );
}

export default ActionDetails;
