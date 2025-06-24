// import type { MetaFunction } from "@vercel/remix";
// import { useOutletContext } from "@remix-run/react";
import { createFileRoute } from '@tanstack/react-router'
import Main from "./-main";
import Header from "./-header";
import Share from "../-components/share";
import { useEffect } from "react";

// export const meta: MetaFunction = () => [
//   {
//     title: "Gracias por contactar - Enrique Arzamendi",
//   },

//   {
//     name: "description",
//     content: `Teléfono: 686643019. Email: pianos@enriquearzamendi.com.`,
//   },
//   {
//     name: "keywords",
//     content:
//       "enrique,arzamendi,email,teléfono,presupuesto,presupuestos,consulta,consultas,duda,dudas,contacto,correo,electrónico",
//   },
//   {
//     property: "og:title",
//     content: "Gracias por contactar - Enrique Arzamendi",
//   },
//   {
//     property: "og:description",
//     content: `Teléfono: 686643019. Email: pianos@enriquearzamendi.com.`,
//   },
//   {
//     property: "og:url",
//     content: "https://enriquearzamendi.com/gracias-por-contactar",
//   },
// ];

const GraciasPorContactar = () => {
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
      <Share />
      <Main />
    </>
  );
};

export const Route = createFileRoute('/_pianos/gracias-por-contactar/')({
  component: GraciasPorContactar,
})

