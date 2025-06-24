//import type { MetaFunction } from "@remix-run/node";
// import type { MetaFunction } from "@vercel/remix";
// import { useOutletContext } from "@remix-run/react";
import Main from "./main";
import Header from "./header";
//import { pathnameSplitter } from "../_pianos/variations";
import { useEffect } from "react";

// export const meta: MetaFunction = () => {
//   return [
//     {
//       title: "Enrique Arzamendi - Afinación y Transporte de Pianos",
//     },
//     {
//       name: "description",
//       content:
//         "Somos especialistas en la afinación, reparación y el mantenimiento de pianos. Transportamos pianos verticales y de cola",
//     },
//     {
//       name: "keywords",
//       content:
//         "enrique,arzamendi,afinación,afinador,pianos,piano,vertical,cola,tecnico-afinador,transporte,traslado,reparación",
//     },
//     {
//       property: "og:title",
//       content: "Enrique Arzamendi - Afinación y Transporte de Pianos",
//     },
//     {
//       property: "og:description",
//       content:
//         "Somos especialistas en la afinación, reparación y el mantenimiento de pianos. Transportamos pianos verticales y de cola",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/afinacion-de-un-piano-vertical.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/reparacion-de-un-martillo-de-un-piano-de-cola.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/traslado-de-un-piano-vertical.jpg&amp;w=540&amp;q=75",
//     },
//     { property: "og:url", content: "https://enriquearzamendi.com/" },
//   ];
// };

const Index = () => {
  // const { setBodyHeight, Share } = useOutletContext<{
  //   setBodyHeight: React.Dispatch<React.SetStateAction<number>>;
  //   Share: () => JSX.Element;
  // }>();

  // useEffect(() => {
  //   if (window) {
  //     const body = document.body;
  //     const html = document.documentElement;
  //     const height =
  //       Math.max(
  //         body.scrollHeight,
  //         body.offsetHeight,
  //         html.clientHeight,
  //         html.scrollHeight,
  //         html.offsetHeight
  //       ) - innerHeight;

  //     setBodyHeight(height);
  //   }
  // }, [setBodyHeight]);

  return (
    <>
      <Header />
      {/* <Share /> */}
      <Main />
    </>
  );
};

export default Index;
