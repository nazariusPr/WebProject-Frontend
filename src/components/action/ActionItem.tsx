import { ActionDto, ActionStatus } from "../../types/Action";
import { AiOutlineStop, AiOutlineReload, AiOutlineEye } from "react-icons/ai";
import Button from "../UI/Button";
import styles from "../../styles/actions.module.css";
import useActionPolling from "../../hooks/userActionPolling";

type ActionItemProps = {
  action: ActionDto;
  updateActionStatus: (actionId: string, status: ActionStatus) => void;
  onActionClick: (actionId: string, actionType: string) => void;
};

function ActionItem({
  action,
  updateActionStatus,
  onActionClick,
}: ActionItemProps) {
  if (action.action_status === ActionStatus.INPROGRESS) {
    //useActionUpdate({ actionId: action.id, accessToken, updateActionStatus });
    useActionPolling({
      actionId: action.id,
      desiredStatus: ActionStatus.FINISHED,
      updateActionStatus,
      interval: 2500,
    });
  }
  const getButton = () => {
    switch (action.action_status) {
      case ActionStatus.INPROGRESS:
        return (
          <Button
            onClick={() => onActionClick(action.id, "cancel")}
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
