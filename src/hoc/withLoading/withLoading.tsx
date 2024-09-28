import { useState } from "react";
import { Spin } from "antd";
import style from "./withLoading.module.css";

function withLoading<T>(
  WrappedComponent: React.ComponentType<
    T & { setLoading: (state: boolean) => void }
  >
) {
  return (props: T) => {
    const [loading, setLoading] = useState<boolean>(false);

    return (
      <div style={{ position: "relative" }}>
        {loading && (
          <div className={style["spinner-overlay"]}>
            <Spin size="large" />
          </div>
        )}
        <WrappedComponent {...props} setLoading={setLoading} />
      </div>
    );
  };
}

export default withLoading;
