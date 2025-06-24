import { useState, useEffect, useRef } from "react";
import IconShare from "./iconShare";
import ShareMe from "./shareMe";

const Share = () => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setShow((show) => !show);
  };
  // const handleClickOutside = (e: { target: Node | null; }) => {
  //   if (ref.current && !ref.current.contains(e.target) && show) {
  //     return setShow(false);
  //   }
  // };

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node) && show) {
      return setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return (
    <div
      id="Share"
      ref={ref}
      className="m-auto w-full h-16 pt-1 bg-[#00000080] max-w-5xl"
    >
      <span
        id="shareButton"
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
        aria-label="menu para compartir"
        tabIndex={0}
        className="float-right w-1/5"
      >
        <div className="w-14 h-12 text-4xl pt-2.5 cursor-pointer fill-white bg-[#1e5a78b3] hover:bg-[#424242cc] mx-auto">
          <IconShare />
        </div>
      </span>
      {show && <ShareMe />}
    </div>
  );
};

export default Share;
