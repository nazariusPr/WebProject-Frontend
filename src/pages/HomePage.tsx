import { Outlet, useNavigate } from "react-router-dom";
import BoxButton from "../components/UI/BoxButton";
import Header from "../components/UI/Header";
import styles from "../styles/home.module.css";
import RoutesConstant from "../constants/client/RoutesConstant";

const HomePage = () => {
  const navigate = useNavigate();

  const handleGenerateImage = () => {
    navigate(RoutesConstant.GENERATE_IMAGE);
  };

  const handleAnalyzeImage = () => {
    console.log("Analyze Image clicked");
  };

  const handleSeePreviousActions = () => {
    navigate(RoutesConstant.SEE_ALL_ACTIONS);
  };

  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles["top-row"]}>
          <BoxButton
            title="Generate Image"
            description="Create stunning images using advanced algorithms."
            onClick={handleGenerateImage}
          />
          <BoxButton
            title="Analyze Image"
            description="Analyze images for insights and data extraction."
            onClick={handleAnalyzeImage}
          />
        </div>
        <div className={styles["bottom-row"]}>
          <BoxButton
            title="See Previous Actions"
            description="Review your previous image generation and analysis actions."
            onClick={handleSeePreviousActions}
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default HomePage;
