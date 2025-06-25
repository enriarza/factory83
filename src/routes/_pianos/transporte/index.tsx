import { useLocation } from "@tanstack/react-router";
//import type { MetaFunction } from "@vercel/remix";
import { createFileRoute } from '@tanstack/react-router'
import Main from "./-main";
import Header from "./-header";
import Share from "../-components/share";
import { pathnameSplitter } from "../-components/variations";
//import { useEffect } from "react";

// export const meta: MetaFunction = ({ location }) => {
//   const { place, activity } = pathnameSplitter(location.pathname);

//   return [
//     {
//       title: `${activity} de Pianos ${
//         place ? "en " + place + " " : ""
//       }- Enrique Arzamendi`,
//     },

//     {
//       name: "description",
//       content: `Realizamos ${activity}s de pianos verticales, pianos de cola, pianos digitales, pianolas, clavecines, etc.`,
//     },
//     {
//       name: "keywords",
//       content:
//         "piano,pianos,pianolas,transporte,transportista,clavecin,verticales,cola,organos,traslados,traslado",
//     },
//     {
//       property: "og:title",
//       content: `${activity} de Pianos ${
//         place ? "en " + place + " " : ""
//       } - Enrique Arzamendi`,
//     },
//     {
//       property: "og:description",
//       content: `Realizamos ${activity}s de pianos verticales, pianos de cola, pianos digitales, pianolas, clavecines, etc.`,
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/transportando-un-piano-vertical.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/piano-de-cola.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/piano-digital.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/pianola.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/clavicembalo.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/organo-positivo.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/protector-de-ruedas.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/transporte-de-un-piano-de-cola-utilizando-una-grua.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:url",
//       content: `https://enriquearzamendi.com/${activity}-de-pianos${
//         place ? "-en-" + place : ""
//       }`,
//     },
//   ];
// };

const Transporte = () => {
  // const { setBodyHeight, Share } = useOutletContext<{
  //   setBodyHeight: React.Dispatch<React.SetStateAction<number>>;
  //   Share: () => JSX.Element;
  // }>();
  const { pathname } = useLocation();
  const { place, activity } = pathnameSplitter(pathname);

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
      <Header activity={activity} place={place ?? ""} />
      <Share />
      <Main />
    </>
  );
};

export const Route = createFileRoute('/_pianos/transporte/')({
  component: Transporte,
})
