// import {
//   type ActionFunctionArgs,
//   type MetaFunction,
//   redirect,
//   //} from "@remix-run/node";
// } from "@vercel/remix";
// import { useOutletContext } from "@remix-run/react";
// import { validationError } from "remix-validated-form";
// import { useEffect } from "react";

// import { validator } from "./-contactForm";
import { createFileRoute } from '@tanstack/react-router'
import Main from "./-main";
import Header from "./-header";
import Share from "../-components/share";

// import { sendEmail } from "~/services/mailer.server";
// import mailOptions from "./-mailOptions";
// import languageFilter from "~/lib/functions/languageFilter.server";
// import { db } from "~/services/db.server";

// export const meta: MetaFunction = () => {
//   return [
//     {
//       title: "Contacta - Enrique Arzamendi",
//     },
//     {
//       name: "description",
//       content: `Teléfono: 686643019. Email: pianos@enriquearzamendi.com.`,
//     },
//     {
//       name: "keywords",
//       content:
//         "enrique,arzamendi,email,teléfono,presupuesto,presupuestos,consulta,consultas,duda,dudas,contacto,correo,electrónico",
//     },
//     { name: "og:title", content: "Contacta - Enrique Arzamendi" },
//     {
//       name: "og:description",
//       content: `Teléfono: 686643019. Email: pianos@enriquearzamendi.com.`,
//     },
//     { name: "og:url", content: "https://enriquearzamendi.com/contacta" },
//   ];
// };

// export const action = async ({ request }: ActionFunctionArgs) => {
//   const detectLanguageKey = process.env.DETECT_LANGUAGE_KEY;
//   const fieldValues = await validator.validate(await request.formData());

//   if (fieldValues.error) return validationError(fieldValues.error);
//   const { yourname, email, phone, comments } = fieldValues.data;

//   const validEmail = await languageFilter(detectLanguageKey, comments);

//   if (
//     yourname.endsWith("Ter") ||
//     email === "yjdisantoyjdissemin@gmail.com" ||
//     email.endsWith(".ru")
//   ) {
//     // preventing spam from this hackers
//     console.log("email from ...Ter or yjdisantoyjdissemin@gmail.com or .ru");
//     return redirect(`/gracias-por-contactar`);
//   } else if (!validEmail) {
//     // collecting the rest of spam in a separate database
//     await db.spam.create({
//       data: {
//         yourname,
//         email,
//         phone,
//         comments,
//       },
//     });
//   } else {
//     //send the valid emails
//     await sendEmail(mailOptions({ yourname, email, phone, comments }));
//   }

//   return redirect(`/gracias-por-contactar`);
// };

const Contacta = () => {
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

export const Route = createFileRoute('/_pianos/contacta/')({
  component: Contacta,
})
