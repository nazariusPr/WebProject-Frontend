import { ImageSize } from "../../types/Action";
import { sizeOptions } from "../../constants/client/ValuesConstants";
import Input from "../UI/Input";
import Dropdown from "../UI/DropDown";
import Counter from "../UI/Counter";
import styles from "../../styles/generate.module.css";

type GenerateImageProps = {
  prompt: string;
  setPrompt: (prompt: string) => void;
  size: ImageSize;
  setSize: (size: ImageSize) => void;
  numImages: number;
  setNumImages: (numImages: number) => void;
};

function GenerateImageForm({
  prompt,
  setPrompt,
  size,
  setSize,
  numImages,
  setNumImages,
}: GenerateImageProps) {
  return (
    <div className={styles.container}>
      <Input
        value={prompt}
        field={{
          label: "Prompt",
          name: "prompt",
          type: "text",
          validation: () => null,
        }}
        onChange={(e) => setPrompt(e.target.value)}
        className={styles.input}
      />
      <Dropdown
        value={size}
        field={{
          label: "Image Size",
          name: "size",
          type: "select",
          validation: () => null,
        }}
        onChange={setSize}
        options={sizeOptions}
      />
      <Counter
        value={numImages}
        label="Number of Images"
        onChange={setNumImages}
        min={1}
        max={5}
      />
    </div>
  );
}

export default GenerateImageForm;
