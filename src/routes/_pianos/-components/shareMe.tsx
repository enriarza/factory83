import { JSX, useState, useEffect } from "react";
import IconFacebook from "./iconFacebook";
import IconX from "./iconX";
import IconMail from "./iconMail";
import IconWhatsapp from "./iconWhatsapp";
import links from "./links";
const icons: JSX.Element[] = [
  <IconFacebook key="facebook" />,
  <IconX key="x" />,
  <IconMail key="mail" circle={false} />,
  <IconWhatsapp key="whatsapp" />,
];

const ShareMe = () => {
  const [index, setIndex] = useState(0);
  const [currentIcons, setCurrentIcons] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= icons.length) {
        return () => clearInterval(interval);
      }

      setIndex((prevState) => prevState + 1);
      setCurrentIcons((prevState) => [...prevState, icons[index]]);
    }, 100);

    return () => clearInterval(interval);
  }, [index, currentIcons]);

  return (
    <div id="shareMe" className="float-right w-4/5">
      {currentIcons.map((icon, order) => {
        return (
          <div key={`div-${order}`} className="w-1/4 h-12 float-right">
            <a
              key={`icon-${order}`}
              id={links[order].id}
              href={links[order].href}
              className={`${links[order].pt} ${links[order].pl} block w-14 h-12 text-4xl cursor-pointer fill-white ${links[order].bg} hover:bg-[#424242cc] mx-auto`}
              aria-label={`enlace para compartir esta web usando ${links[order].id}`}
            >
              {icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ShareMe;
