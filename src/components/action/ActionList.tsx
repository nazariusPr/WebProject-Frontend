import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ActionDto, ActionStatus } from "../../types/Action";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { PageDto } from "../../types/Page";
import { message } from "antd";
import ActionItem from "./ActionItem";
import Button from "../UI/Button";
import RoutesConstant from "../../constants/client/RoutesConstant";
import { restartAction, cancelAction } from "../../api/actionApi";
import styles from "../../styles/actions.module.css";

type ActionListProps = {
  actions?: PageDto<ActionDto>;
  setActions: (
    actions:
      | PageDto<ActionDto>
      | ((prevActions: PageDto<ActionDto>) => PageDto<ActionDto>)
  ) => void;
  page: number;
  onPrev: () => void;
  onNext: () => void;
};

function ActionList({
  actions,
  setActions,
  page,
  onPrev,
  onNext,
}: ActionListProps) {
  const navigate = useNavigate();

  const handleOnClick = async (actionId: string, actionType: string) => {
    try {
      switch (actionType) {
        case "view":
          navigate(RoutesConstant.SEE_ACTION.replace(":actionId", actionId));
          break;
        case "cancel":
          await cancelAction(actionId);
          updateActionStatus(actionId, ActionStatus.CANCELLED);
          message.success("Action was cancelled!");
          break;
        case "restart":
          await restartAction(actionId);
          updateActionStatus(actionId, ActionStatus.INPROGRESS);
          message.success("Action was restarted!");
          break;
        default:
          console.log("Unknown action type");
      }
    } catch (error) {
      let notification;
      if (axios.isAxiosError(error)) {
        notification = error.response?.data?.message;
      } else {
        notification = "Action failed.";
      }
      message.error(notification);
    }
  };

  const updateActionStatus = (actionId: string, newStatus: ActionStatus) => {
    setActions((prevActions) => {
      if (!prevActions || !prevActions.elems) return prevActions;

      const updatedElems = prevActions.elems.map((action) =>
        action.id === actionId
          ? { ...action, action_status: newStatus }
          : action
      );

      return {
        ...prevActions,
        elems: updatedElems,
      };
    });
  };

  return (
    <>
      <div>
        {actions?.elems.length === 0 ? (
          <p>No actions available.</p>
        ) : (
          actions?.elems.map((action) => (
            <ActionItem
              key={action.id}
              updateActionStatus={updateActionStatus}
              action={action}
              onActionClick={handleOnClick}
            />
          ))
        )}
      </div>

      <div className={styles.paginationButtons}>
        <Button onClick={onPrev} disabled={page === 0}>
          <AiOutlineLeft />
        </Button>
        <span style={{ marginInline: "10px" }}>
          Page {actions ? page + 1 : 0} of {actions?.total_pages}
        </span>
        <Button
          onClick={onNext}
          disabled={actions && page >= actions.total_pages - 1}
        >
          <AiOutlineRight />
        </Button>
      </div>
    </>
  );
}

export default ActionList;
