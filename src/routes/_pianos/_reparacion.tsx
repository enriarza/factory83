import { useLocation } from "@tanstack/react-router";
//import type { MetaFunction } from "@remix-run/node";
//import type { MetaFunction } from "@vercel/remix";
import { createFileRoute } from '@tanstack/react-router'
import Main from "./_reparacion/-main";
import Header from "./_reparacion/-header";
import Share from "./-components/share";
import { pathnameSplitter } from "./-components/variations";
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
//       content: `Realizamos reparaciones de pianos, sustitución de cuerdas rotas, muelles o fieltros deteriorados, teclas atascadas, etc.`,
//     },
//     {
//       name: "keywords",
//       content:
//         "reparación,piano,pianos,reparar,arreglar,vertical,cola,tecnico-afinador,restauracion,restaurar,restaurador",
//     },
//     {
//       property: "og:title",
//       content: `Reparación de Pianos ${
//         place ? "en " + place + " " : ""
//       } - Enrique Arzamendi`,
//     },
//     {
//       property: "og:description",
//       content: `Realizamos reparaciones de pianos, sustitución de cuerdas rotas, muelles o fieltros deteriorados, teclas atascadas, etc.`,
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/sustitucion-de-una-cuerda-rota.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/cambiando-un-eje-de-la-maquinaria.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/instalacion-de-aplacados-nuevos-en-el-teclado.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:image",
//       content:
//         "https://enriquearzamendi.com/_vercel/image?url=/piano-de-cola-tras-ser-restaurado.jpg&amp;w=540&amp;q=75",
//     },
//     {
//       property: "og:url",
//       content: `https://enriquearzamendi.com/reparacion-de-pianos${
//         place ? "-en-" + place : ""
//       }`,
//     },
//   ];
// };

export const Reparacion = () => {
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

export const Route = createFileRoute('/_pianos/_reparacion')({
  component: Reparacion,
})
