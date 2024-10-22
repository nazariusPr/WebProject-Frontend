import { ActionDto } from "../../types/Action";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { PageDto } from "../../types/Page";
import ActionItem from "./ActionItem";
import Button from "../UI/Button";
import styles from "../../styles/actions.module.css";

type ActionListProps = {
  actions?: PageDto<ActionDto>;
  page: number;
  onPrev: () => void;
  onNext: () => void;
};

function ActionList({ actions, page, onPrev, onNext }: ActionListProps) {
  return (
    <>
      <div>
        {actions?.elems.length === 0 ? (
          <p>No actions available.</p> 
        ) : (
          actions?.elems.map((action) => (
            <ActionItem
              key={action.id}
              action={action}
              onActionClick={() => {}}
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
