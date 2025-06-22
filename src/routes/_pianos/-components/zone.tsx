import { Link } from "@tanstack/react-router";
import { territories } from "../variations.js";

const Zone = ({ urlActivity }: { urlActivity: string }) => {
  let verb = "";

  if (
    urlActivity === "afinación" ||
    urlActivity === "afinacion" ||
    urlActivity === "afinador"
  ) {
    verb = "Afinamos";
  } else if (urlActivity === "reparación" || urlActivity === "reparacion") {
    verb = "Reparamos";
  } else if (urlActivity === "transporte" || urlActivity === "traslado") {
    verb = "Transportamos";
  } else {
    verb = "";
  }

  return (
    <div
      id="Zone"
      className="box trabajamosEn mx-auto h-auto w-72 pb-2.5 sm:pb-0 sm:col-span-6 lg:col-span-4"
    >
      <h3 className="font-bold text-3xl text-center mt-7 mb-3.5 text-black dark:text-[#aaa]">{`${verb} pianos en:`}</h3>
      {/* <ul className="w-72 py-0 my-0 h-auto">
        {Object.entries(territories)
        .map((place, index) => (
          <li
            key={`place_${index}`}
            className="list-none text-xl text-center py-2 my-0 h-auto text-black dark:text-[#aaa]"
          >
            <Link
              prefetch="viewport"
              to={`/${urlActivity}-de-pianos-en-${place[1]}`}
              className="px-5 py-2" //border-2 border-[orange]"
            >
              {place[0]}
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Zone;
