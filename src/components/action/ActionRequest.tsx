import { DetailActionDto } from "../../types/Action";
import styles from "../../styles/actions.module.css";

type ActionRequestProps = {
  action: DetailActionDto | undefined;
};

function ActionRequest({ action }: ActionRequestProps) {
  return (
    <div className={styles.requestDetailsContainer}>
      <h2 className={styles.detailsTitle}>Request Details</h2>
      <p>
        <strong>Title:</strong> {action?.title ?? "Not Specified"}
      </p>
      <p>
        <strong>Prompt:</strong>{" "}
        {action?.action_request.prompt ?? "Not Specified"}
      </p>
      <p>
        <strong>Image Size:</strong>{" "}
        {action?.action_request.size ?? "Not Specified"}
      </p>
      <p>
        <strong>Number of Images:</strong>{" "}
        {action?.action_request.num_images ?? "Not Specified"}
      </p>
    </div>
  );
}

export default ActionRequest;
