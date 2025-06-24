// import type { MetaFunction } from "@vercel/remix";
// import { useOutletContext } from "@remix-run/react";
import { createFileRoute } from '@tanstack/react-router'
import Main from "./-main";
import Header from "./-header";
import Share from "../-components/share";
import { useEffect } from "react";

// export const meta: MetaFunction = () => [
//   {
//     title: "Nuestra Empresa - Enrique Arzamendi",
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
//   { name: "og:title", content: "Nuestra Empresa - Enrique Arzamendi" },
//   {
//     name: "og:description",
//     content: `Teléfono: 686643019. Email: pianos@enriquearzamendi.com.`,
//   },
//   {
//     property: "og:image",
//     content:
//       "https://enriquearzamendi.com/_vercel/image?url=/enrique-arzamendi.jpg&amp;w=540&amp;q=75",
//   },
//   { name: "og:url", content: "https://enriquearzamendi.com/nuestra-empresa" },
// ];

const NuestraEmpresa = () => {
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

export const Route = createFileRoute('/_pianos/nuestra-empresa/')({
  component: NuestraEmpresa,
})
