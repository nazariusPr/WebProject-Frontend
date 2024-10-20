import axios from "axios";
import { useState } from "react";
import { message } from "antd";
import { ImageSize, GenerateActionDto } from "../types/Action";
import { generateImage } from "../api/actionApi";
import withPopUp from "../hoc/withPopUp/withPopUp";
import withLoading from "../hoc/withLoading/withLoading";
import ImageCarousel from "../components/general/ImageCarousel";
import Button from "../components/UI/Button";
import GenerateImageForm from "../components/general/GenerateImageForm";
import styles from "../styles/main.module.css";

type GenerateImagePageProps = {
  setLoading: (state: boolean) => void;
};

function GenerateImagePage({ setLoading }: GenerateImagePageProps) {
  const [title, setTitle] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [size, setSize] = useState<ImageSize>(ImageSize.SMALL_IMAGE_SIZE);
  const [numImages, setNumImages] = useState<number>(1);

  const validateInput = () => {
    if (!title.trim()) {
      message.error("Title is required");
      return false;
    }
    if (title.length > 30) {
      message.error("Title must not exceed 30 characters");
      return false;
    }
    if (!prompt.trim()) {
      message.error("Prompt is required");
      return false;
    }
    if (numImages < 1 || numImages > 10) {
      message.error("Number of images must be between 1 and 10");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateInput()) {
      return;
    }

    const dto: GenerateActionDto = {
      title,
      prompt,
      size,
      num_images: numImages,
    };

    try {
      setLoading(true);
      await generateImage(dto);
      message.success({
        content: `Image generation for "${title}" started! You'll see the results shortly.`,
        duration: 3,
      });
    } catch (error) {
      let notification;
      if (axios.isAxiosError(error)) {
        notification = error.response?.data?.message;
      } else {
        notification = "Images Generation failed.";
      }
      message.error(notification);
    } finally {
      setLoading(false);
    }
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

export default withPopUp(withLoading(GenerateImagePage));
