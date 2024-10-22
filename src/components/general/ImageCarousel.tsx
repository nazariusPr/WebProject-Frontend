import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Button from "../UI/Button";
import styles from "../../styles/generate.module.css";

const images = [
  "src/assets/image1.jpg",
  "src/assets/image2.jpg",
  "src/assets/image3.jpg",
  "src/assets/image4.jpg",
  "src/assets/image5.jpg",
  "src/assets/image6.jpg",
  "src/assets/image7.jpg",
  "src/assets/image8.jpg",
  "src/assets/image9.jpg",
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 3 : currentIndex - 3;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex >= images.length - 3;
    const newIndex = isLastSlide ? 0 : currentIndex + 3;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.carouselContainer}>
      <Button className={styles.arrowButton} onClick={prevSlide}>
        <AiOutlineLeft />
      </Button>
      <div className={styles.imageContainer}>
        {images.slice(currentIndex, currentIndex + 3).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`carousel-img-${index}`}
            className={styles.image}
          />
        ))}
      </div>
      <Button className={styles.arrowButton} onClick={nextSlide}>
        <AiOutlineRight />
      </Button>
    </div>
  );
}

export default ImageCarousel;
