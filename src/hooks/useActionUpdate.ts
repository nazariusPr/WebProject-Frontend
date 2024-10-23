import { useEffect } from "react";
import { ActionStatus } from "../types/Action";

type useActionUpdateProps = {
  actionId: string;
  accessToken: string | null;
  updateActionStatus: (actionId: string, status: ActionStatus) => void;
};

function useActionUpdate({
  actionId,
  accessToken,
  updateActionStatus,
}: useActionUpdateProps) {
  useEffect(() => {
    const eventSource = new EventSource(
      `http://localhost:9090/api/v1/action/${actionId}/updates?accessToken=${accessToken}`
    );

    eventSource.addEventListener("actionUpdate", (event) => {
      try {
        const updatedStatus = JSON.parse(event.data) as ActionStatus;
        updateActionStatus(actionId, updatedStatus);
      } catch (error) {
        console.error("Error parsing action update:", error);
      }
    });

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [actionId]);
}

export default useActionUpdate;
