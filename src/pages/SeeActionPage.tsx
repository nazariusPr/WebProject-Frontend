import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { seeAction } from "../api/actionApi";
import { DetailActionDto } from "../types/Action";
import GenerateActionImages from "../components/action/GenerateActionImages";
import ActionDetails from "../components/action/ActionDetails";
import ActionRequest from "../components/action/ActionRequest";
import { message } from "antd";
import withPopUp from "../hoc/withPopUp/withPopUp";
import withLoading from "../hoc/withLoading/withLoading";
import styles from "../styles/actions.module.css";

type SeeActionPageProps = {
  setLoading: (state: boolean) => void;
};

function SeeActionPage({ setLoading }: SeeActionPageProps) {
  const { actionId } = useParams<{ actionId: string }>();
  const [action, setAction] = useState<DetailActionDto | undefined>(undefined);
  const [see, setSee] = useState(true);

  useEffect(() => {
    const fetchActionDetails = async () => {
      try {
        setLoading(true);
        const response = await seeAction(actionId as string);
        setAction(response.data);
      } catch (error) {
        let notification;

        if (axios.isAxiosError(error)) {
          notification = error.response?.data?.message;
        } else {
          notification = "Action retrieval failed. Please try again.";
        }
        message.error(notification);
      } finally {
        setLoading(false);
        setSee(false);
      }
    };

    if (actionId) {
      fetchActionDetails();
    }
  }, [actionId]);

  if (see) {
    return <></>;
  }

  const images = action?.images ?? [];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{action?.title ?? "No Title"}</h1>

      <GenerateActionImages images={images} />

      <div className={styles.detailsRow}>
        <ActionDetails action={action} />
        <ActionRequest action={action} />
      </div>
    </div>
  );
}

export default withPopUp(withLoading(SeeActionPage));
