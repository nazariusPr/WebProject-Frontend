import { ActionDto, ActionStatus } from "../../types/Action";
import { AiOutlineStop, AiOutlineReload, AiOutlineEye } from "react-icons/ai";
import Button from "../UI/Button";
import styles from "../../styles/actions.module.css";

type ActionItemProps = {
  action: ActionDto;
  onActionClick: (actionId: string, actionType: string) => void;
};

function ActionItem({ action, onActionClick }: ActionItemProps) {
  const getButton = () => {
    switch (action.action_status) {
      case ActionStatus.INPROGRESS:
        return (
          <Button
            onClick={() => onActionClick(action.id, "stop")}
            className={styles.progress}
          >
            <AiOutlineStop />
          </Button>
        );
      case ActionStatus.FINISHED:
        return (
          <Button onClick={() => onActionClick(action.id, "view")}>
            <AiOutlineEye />
          </Button>
        );
      case ActionStatus.CANCELLED:
        return (
          <Button
            onClick={() => onActionClick(action.id, "restart")}
            className={styles.canceled}
          >
            <AiOutlineReload />
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.actionItem}`}>
      <h3>{action.title}</h3>
      <p>Created At: {new Date(action.created_at).toLocaleDateString()}</p>
      <div>{getButton()}</div>
    </div>
  );
}

export default ActionItem;
