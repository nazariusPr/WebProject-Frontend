import axios from "axios";
import { message } from "antd";
import { useState, useEffect } from "react";
import ActionFilterForm from "../components/action/ActionFilterForm";
import withLoading from "../hoc/withLoading/withLoading";
import withPopUp from "../hoc/withPopUp/withPopUp";
import { ActionFilterDto, ActionDto } from "../types/Action";
import { filterActions } from "../api/actionApi";
import { Pageable, PageDto } from "../types/Page";
import ActionList from "../components/action/ActionList";
import styles from "../styles/main.module.css";

type SeeAllActionsPageProps = {
  setLoading: (state: boolean) => void;
};

function SeeAllActionsPage({ setLoading }: SeeAllActionsPageProps) {
  const [page, setPage] = useState<Pageable>({ page: 0, size: 3 });
  const [actions, setActions] = useState<PageDto<ActionDto>>({
    elems: [],
    total_pages: 0,
    total_elems: 0,
    current_page: 0,
  });
  const [filter, setFilter] = useState<ActionFilterDto>({
    prompt: "",
    actionType: "",
    actionStatus: "",
    begin: "",
    end: "",
  });

  useEffect(() => {
    const handleFilterChange = () => {
      setPage({ page: 0, size: 3 });
    };

    handleFilterChange();
  }, [filter]);

  useEffect(() => {
    const handlePageChange = async () => {
      try {
        setLoading(true);
        const response = await filterActions(filter, page);
        setActions(response.data);
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

    handlePageChange();
  }, [page]);

  const next = () => {
    if (actions && page.page < actions.total_pages - 1) {
      setPage((prevPage) => ({ ...prevPage, page: prevPage.page + 1 }));
    }
  };

  const prev = () => {
    if (page.page > 0) {
      setPage((prevPage) => ({ ...prevPage, page: prevPage.page - 1 }));
    }
  };

  return (
    <>
      <h1 className={styles.title} style={{ margin: "10px" }}>
        See All Actions
      </h1>
      <ActionFilterForm filter={filter} setFilter={setFilter} />
      <ActionList
        actions={actions}
        setActions={setActions}
        page={page.page}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}

export default withPopUp(withLoading(SeeAllActionsPage));
