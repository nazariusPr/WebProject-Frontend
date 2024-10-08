import { useState } from "react";
import withPopUp from "../hoc/withPopUp/withPopUp";
import { ImageSize, GenerateActionDto } from "../types/Action";
import Button from "../components/UI/Button";
import GenerateImageForm from "../components/general/GenerateImageForm";
import styles from "../styles/main.module.css";

function GenerateImagePage() {
  const [prompt, setPrompt] = useState<string>("");
  const [size, setSize] = useState<ImageSize>(ImageSize.SMALL_IMAGE_SIZE);
  const [numImages, setNumImages] = useState<number>(1);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const handleSubmit = () => {
    const dto: GenerateActionDto = {
      prompt,
      size,
      num_images: numImages,
    };

    console.log("Generated DTO:", dto);
  };

  return (
    <div>
      <h1 className={styles.title} style={{ margin: "10px" }}>
        Generate Image
      </h1>
      <GenerateImageForm
        prompt={prompt}
        setPrompt={setPrompt}
        size={size}
        setSize={setSize}
        numImages={numImages}
        setNumImages={setNumImages}
      />
      <Button onClick={handleSubmit} disabled={buttonDisabled}>
        Generate
      </Button>
    </div>
  );
}

export default withPopUp(GenerateImagePage);
