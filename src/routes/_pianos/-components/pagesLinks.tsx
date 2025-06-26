import { Link } from "@tanstack/react-router";
import { pagesList } from "./variations";

const PagesLinks = ({
  className,
  aStyle,
  uStyle,
}: {
  className: string | undefined;
  aStyle: string | undefined;
  uStyle: string | undefined;
}) => (
  <div id="PagesLinks" className={className}>
    {className && (
      <h3 className="font-bold text-3xl mt-7 mb-1 text-center text-black dark:text-[#aaa]">
        Menú
      </h3>
    )}
    <ul className={uStyle}>
      {Object.entries(pagesList).map((page: string[], index: number) => (
        <li key={`page-${index}`} className="list-none">
          <Link
            preload="viewport"
            to={page[1]}
            className={`text-2xl tracking-wider block duration-300 ${aStyle}`}
          >
            <span className="nowrap">{page[0]}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default PagesLinks;
