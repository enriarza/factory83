import localhost from "~/lib/functions/localhost";

const width = 640; // 1654 (original)
const height = 905; // 2339 (original)

const ImageDoc = ({ doc, item }: { doc: string; item: string }) => (
  <img
    src={
      localhost()
        ? `/docs/${doc}/${item}`
        // : `/_vercel/image?url=%2Fdocs%2F${doc}%2F${item}&w=${width}&q=75`
        : `/docs/${doc}/${item}`
    }
    width={width}
    height={height}
    alt="documento PDF"
    className="w-full h-auto"
  />
);

export default ImageDoc;
