import BoxButton from "../components/UI/BoxButton";
import Header from "../components/UI/Header";
import styles from "../styles/home.module.css";

const HomePage = () => {
  const handleGenerateImage = () => {
    console.log("Generate Image clicked");
  };

  const handleAnalyzeImage = () => {
    console.log("Analyze Image clicked");
  };

  const handleSeePreviousActions = () => {
    console.log("See Previous Actions clicked");
  };

  return (
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
  );
};

export default HomePage;
