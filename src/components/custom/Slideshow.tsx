import { useState, useEffect } from "react";
import Image from "./Image";

const Slideshow = ({
  slides,
  speed,
  imageStyles,
  figcaptionStyles,
}: {
  slides: string[];
  speed: number;
  imageStyles?: string;
  figcaptionStyles?: string;
}) => {
  const [imageNumber, setImageNumber] = useState(0);
  const [show, setShow] = useState(true);

  const figcaptionText = () => {
    const str = slides[imageNumber].replaceAll("-", " ").replace(".jpg", "");
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    const changeImage = () => {
      setShow(false);
      if (imageNumber === slides.length - 1) {
        setImageNumber(0);
      } else {
        setImageNumber(imageNumber + 1);
      }
      setShow(true);
    };

    const oneTime = setTimeout(() => {
      changeImage();
    }, speed);

    return () => clearTimeout(oneTime);
  }, [imageNumber, slides.length, speed]);

  return (
    <div>
      {show && (
        <div key={`key-${imageNumber}`}>
          <Image
            src={slides[imageNumber]}
            width={400}
            height={300}
            alt=""
            className={imageStyles}
          />
          <figcaption className={figcaptionStyles}>
            {figcaptionText()}
          </figcaption>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
