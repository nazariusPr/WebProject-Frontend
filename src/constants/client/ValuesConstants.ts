import { ImageSize } from "../../types/Action";

export const sizeOptions = [
  { value: ImageSize.SMALL_IMAGE_SIZE, label: "Small (256x256)" },
  { value: ImageSize.MEDIUM_IMAGE_SIZE, label: "Medium (512x512)" },
  { value: ImageSize.LARGE_IMAGE_SIZE, label: "Large (1024x1024)" },
];
