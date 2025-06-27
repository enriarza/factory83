const territories = {
  "Vitoria - Gasteiz": "vitoria-gasteiz",
  Bilbao: "bilbao",
  Álava: "alava",
  Bizkaia: "bizkaia",
  "Gipuzkoa (Valle del Deba y Goierri)": "gipuzkoa",
  Pamplona: "pamplona",
  Logroño: "logroño",
  "Miranda de Ebro": "miranda-de-ebro",
  "Castro Urdiales": "castro-urdiales",
  Haro: "haro",
};

const pagesList = {
  Inicio: "/",
  "Afinación de Pianos": "/afinacion-de-pianos",
  "Reparación de Pianos": "/reparacion-de-pianos",
  "Transporte de Pianos": "/transporte-de-pianos",
  "Nuestra Empresa": "/nuestra-empresa",
  Contacta: "/contacta",
};

const dondeTrabajamos = () => {
  const dondeTrabajamosArray: string[] = [];
  const replacement = " y";

  Object.keys(territories).map((place) => {
    dondeTrabajamosArray.push(" " + place);
  });

  return (
    "Trabajamos en" +
    dondeTrabajamosArray.join().replace(/,([^,]*)$/, replacement + "$1")
  );
};

const pathnameSplitter = (pathname: string) => {
  const urlActivity = pathname.slice(1, pathname.indexOf("-"));
  let activity;
  switch (urlActivity) {
    // case "afinaci%C3%B3n":
    //   activity = "Afinación";
    //   break;
    case "afinación":
      activity = "Afinación";
      break;
    case "afinacion":
      activity = "Afinación";
      break;
    case "afinador":
      activity = "Afinador";
      break;
    case "reparación":
      activity = "Reparación";
      break;
    case "reparacion":
      activity = "Reparación";
      break;
    case "transporte":
      activity = "Transporte";
      break;
    case "traslado":
      activity = "Traslado";
      break;
    default:
      activity = "";
  }

  const index = pathname.split("-", 4).join("-").length;
  const urlPlace = pathname.slice(index + 1);

  let place;
  switch (urlPlace) {
    case "vitoria-gasteiz":
      place = "Vitoria - Gasteiz";
      break;
    case "vitoria":
      place = "Vitoria";
      break;
    case "bilbao":
      place = "Bilbao";
      break;
    case "alava":
      place = "Álava";
      break;
    case "bizkaia":
      place = "Bizkaia";
      break;
    case "gipuzkoa":
      place = "Gipuzkoa (Valle del Deba y Goierri)";
      break;
    case "pamplona":
      place = "Pamplona";
      break;
    case "logro%C3%B1o":
      place = "Logroño";
      break;
    case "logrono":
      place = "Logroño";
      break;
    case "miranda-de-ebro":
      place = "Miranda de Ebro";
      break;
    case "castro-urdiales":
      place = "Castro Urdiales";
      break;
    case "haro":
      place = "Haro";
      break;
    default:
      place = null;
  }

  return { activity, place, urlActivity };
};

export { territories, pagesList, dondeTrabajamos, pathnameSplitter };
