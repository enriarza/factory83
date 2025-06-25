import { useLocation } from "@tanstack/react-router";
import { JSX, useEffect } from "react";
//import type { MetaFunction } from "@vercel/remix";
import { createFileRoute } from '@tanstack/react-router'
import Header from "./-header";
import Main from "./-main";
import Share from "../-components/share";
import { pathnameSplitter } from "../-components/variations";

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
//       content: `Afinación y mantenimiento de pianos, incluyendo la regulación de la maquinaria, el teclado y los apagadores, etc`,
//     },
//     {
//       name: "keywords",
//       content:
//         "afinación,afinador,pianos,piano,pianola,vertical,cola,afinadores,afinar,tecnicos-afinadores,tecnico,tecnicos",
//     },
//     {
//       property: "og:title",
//       content: `${activity} de Pianos ${
//         place ? "en " + place + " " : ""
//       } - Enrique Arzamendi`,
//     },
//     {
//       property: "og:description",
//       content: `Afinación y mantenimiento de pianos, incluyendo la regulación de la maquinaria, el teclado y los apagadores, etc`,
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/images/afinacion_de_un_piano_de_cola.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/images/maquinaria-de-un-piano-de-cola.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/images/pedales-de-un-piano-de-cola.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/images/entonando-un-martillo-de-piano-de-cola.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/images/eliminacion-de-la-suciedad-de-la-tabla-de-resonancia.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:url",
//       content: `https://enriquearzamendi.com/${activity}-de-pianos${
//         place ? "-en-" + place : ""
//       }`,
//     },
//   ];
// };

const Afinacion = () => {
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

export const Route = createFileRoute('/_pianos/afinacion/')({
  component: Afinacion,
})
