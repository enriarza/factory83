import localhost from "../../lib/functions/localhost";

const Image = ({
  src,
  width,
  height,
  className,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
  alt: string;
}) => (
  <img
    src={
      localhost()
        ? `/images/${src}`
        // : `/_vercel/image?url=%2Fimages%2F${src}&w=${width}&q=75`
        : `/images/${src}`
    }
    width={width}
    height={height}
    className={className}
    alt={alt}
  />
);

export default Image;
