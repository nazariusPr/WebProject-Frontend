import { useState } from "react";
import { ImageDto } from "../../types/Action";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "../../styles/actions.module.css";

type GenerateActionImagesProps = {
  images: ImageDto[];
};

function GenerateActionImages({ images }: GenerateActionImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return images.length > 0 ? (
    <div className={styles.imageContainer}>
      <img
        src={images[currentImageIndex].url}
        alt={images[currentImageIndex].text}
        className={styles.image}
      />
      <p className={styles.imageCaption}>{images[currentImageIndex].text}</p>
      {images.length > 1 && (
        <>
          <button
            className={`${styles.arrowButton} ${styles.left}`}
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>
          <button
            className={`${styles.arrowButton} ${styles.right}`}
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        </>
      )}
    </div>
  ) : (
    <p>No images available.</p>
  );
}

export default GenerateActionImages;
