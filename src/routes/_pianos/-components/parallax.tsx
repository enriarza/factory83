import { useEffect, useState } from "react";
import Image from "../../../components/custom/Image";

const changeTop = 10; //It sets the speed of the parallax move. Higher number => slower movement

const Parallax = ({ bodyHeight }: { bodyHeight: number }) => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    if (window) {
      const handleScroll = () => setScrollTop(scrollY);

      addEventListener("scroll", handleScroll);

      return () => removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div id="Parallax" className="fixed top-0 w-full -z-10 dark:brightness-50">
      <figure
        className={`fixed -z-10 w-[640px] sm:w-[2300px] h-auto`}
        style={{
          top: `${-scrollTop / changeTop}px`,

          filter: `invert(${(scrollTop / bodyHeight) * 100}%)`,
        }}
      >
        <picture>
          <source
            srcSet={
              process.env.NODE_ENV === "development"
                ? "/images/afinando-un-piano-de-cola0750w.jpg 750w"
                // : "/_vercel/image?url=%2Fimages%2Fafinando-un-piano-de-cola0750w.jpg&w=750&q=75 750w"
                : "/images/afinando-un-piano-de-cola0750w.jpg 750w"  
            }
            media="(max-width: 640px)"
            className="w-[640px] h-auto"
          />
          <Image
            className="w-[2300px] h-auto"
            src="de2.jpg"                 
            alt=""
            width={3920}
            height={2492}
          />
        </picture>
      </figure>
    </div>
  );
};

export default Parallax;
