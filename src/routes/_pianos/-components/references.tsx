import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const docs = [
  {
    title: "Privacidad",
    name: "policy",
    n: 6,
    ext: "png",
  },
  {
    title: "Política de cookies",
    name: "cookiesPolicy",
    n: 2,
    ext: "png",
  },
  {
    title: "Aviso Legal",
    name: "legalNotice",
    n: 4,
    ext: "png",
  },
];

const References = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setLoaded(true);
      return;
    }
  }, []);

  if (loaded && isMobile) {
    return (
      <div className="">
        <div className="grid grid-cols-3 sm:grid-cols-4 text-center pb-5 pt-16">
          {/* {docs.map(({ title, name, n, ext }) => (
            <Link
              key={`mobile-${name}`}
              className={`py-3 duration-300 text-black hover:text-[#ffa500] dark:text-[#aaa] dark:hover:text-[#fff]`}
              to={`/pdfImageViewer/${name}/${n}/${ext}`}
              prefetch="viewport"
            >
              {title}
            </Link>
          ))} */}
          <div className="sm:order-5"></div>
          {/* <Link className="order-5 sm:order-4 duration-300 hover:text-[#777]" prefetch="viewport" to="/webDesign className="py-3"">
          WebDesign
        </Link> */}
          <p className="order-5 sm:order-4 py-3 duration-300 text-black hover:text-[#ffa500] dark:text-[#aaa] dark:hover:text-[#fff]">
            WebDesign
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="grid grid-cols-3 sm:grid-cols-4 text-center pb-5 pt-16 lg:pb-0 lg:-mb-4">
        {/* {docs.map(({ title, name }) => (
          <Link
            key={`browser-${name}`}
            to={`/docs/${name}/${name}.pdf`}
            reloadDocument
            className={`py-3 duration-300 text-black hover:text-[#ffa500] dark:text-[#aaa] dark:hover:text-[#fff]`}
          >
            {title}
          </Link>
        ))} */}
        <div className="sm:order-5"></div>
        {/* <Link
        className="order-5 sm:order-4 py-3"
        prefetch="viewport"        
        to="/webDesign"
        className="py-3 duration-300 hover:text-[#777]"
      >
        WebDesign
      </Link> */}
        <p className="order-5 sm:order-4 py-3 duration-300 text-black hover:text-[#ffa500] dark:text-[#aaa] dark:hover:text-[#fff]">
          WebDesign
        </p>
      </div>
    </div>
  );
};

export default References;
