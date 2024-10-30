import { useEffect, useRef } from "react";
import { ActionStatus } from "../types/Action";
import { getActionStatus } from "../api/actionApi";

type useActionPollingProps = {
  actionId: string;
  desiredStatus: ActionStatus;
  updateActionStatus: (actionId: string, status: ActionStatus) => void;
  interval: number;
};

function useActionPolling({
  actionId,
  desiredStatus,
  updateActionStatus,
  interval,
}: useActionPollingProps) {
  const stopRef = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      if (stopRef.current) {
        return;
      }

      try {
        const response = await getActionStatus(actionId);

        if (response.data === desiredStatus) {
          updateActionStatus(actionId, desiredStatus);
          stopRef.current = true;
        }
      } catch (err) {
        console.error("Error fetching action status", err);
      }
    };

    fetchData();

    const id = setInterval(fetchData, interval);

    return () => clearInterval(id);
  }, [actionId, desiredStatus, interval, updateActionStatus]);
}

export default useActionPolling;
