import axios from "axios";
import { message } from "antd";
import { useState, useEffect } from "react";
import ActionFilterForm from "../components/general/ActionFilterForm";
import withLoading from "../hoc/withLoading/withLoading";
import withPopUp from "../hoc/withPopUp/withPopUp";
import { ActionFilterDto, ActionDto } from "../types/Action";
import { filterActions } from "../api/actionApi";
import styles from "../styles/main.module.css";
import { Pageable } from "../types/Page";

type SeeAllActionsPageProps = {
  setLoading: (state: boolean) => void;
};

function SeeAllActionsPage({ setLoading }: SeeAllActionsPageProps) {
  const [page, setPage] = useState<Pageable>({ page: 0, size: 5 });
  const [actions, setActions] = useState<ActionDto[]>([]);
  const [filter, setFilter] = useState<ActionFilterDto>({
    prompt: "",
    actionType: "",
    actionStatus: "",
    begin: "",
    end: "",
  });

  useEffect(() => {
    const handleFilterChange = async () => {
      try {
        setLoading(true);
        const response = await filterActions(filter, page);
        setActions(response.data.elems);
        console.log(response.data.elems);
      } catch (error) {
        let notification;
        if (axios.isAxiosError(error)) {
          notification = error.response?.data?.message;
        } else {
          notification = "Failed to filter actions.";
        }
        message.error(notification);
      } finally {
        setLoading(false);
      }
    };

    handleFilterChange();
  }, [filter]);

  return (
    <>
      <h1 className={styles.title} style={{ margin: "10px" }}>
        See All Actions
      </h1>
      <ActionFilterForm filter={filter} setFilter={setFilter} />{" "}
    </>
  );
}

export default withPopUp(withLoading(SeeAllActionsPage));
