import { useState } from "react";
import withPopUp from "../hoc/withPopUp/withPopUp";
import { ImageSize, GenerateActionDto } from "../types/Action";
import ImageCarousel from "../components/general/ImageCarousel";
import Button from "../components/UI/Button";
import GenerateImageForm from "../components/general/GenerateImageForm";
import styles from "../styles/main.module.css";

function GenerateImagePage() {
  const [title, setTitle] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [size, setSize] = useState<ImageSize>(ImageSize.SMALL_IMAGE_SIZE);
  const [numImages, setNumImages] = useState<number>(1);

  const handleSubmit = () => {
    const dto: GenerateActionDto = {
      title,
      prompt,
      size,
      num_images: numImages,
    };
  };

  return (
    <>
      <div>
        <h1 className={styles.title} style={{ margin: "10px" }}>
          Generate Image
        </h1>
        <GenerateImageForm
          title={title}
          setTitle={setTitle}
          prompt={prompt}
          setPrompt={setPrompt}
          size={size}
          setSize={setSize}
          numImages={numImages}
          setNumImages={setNumImages}
        />
        <Button onClick={handleSubmit}>Generate</Button>
      </div>
      <div className={styles.imageContainer}>
        <p className={styles.label}>Example of generated images</p>
        <ImageCarousel />
      </div>
    </>
  );
}

export default withPopUp(GenerateImagePage);
