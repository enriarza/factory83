//import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const PolicyCheckboxLabel = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setLoaded(true);
      return;
    }
  }, []);

  if (loaded && isMobile) {
    return (
      <label>
        He leído y acepto la{" "}
        {/* <Link
          className="underline"
          to="/pdfImageViewer/policy/6/png"
          prefetch="viewport"
        >
          política de privacidad de datos
        </Link> */}
      </label>
    );
  }

  return (
    <label>
      He leído y acepto la{" "}
      {/* <Link className="underline" to="/docs/policy/policy.pdf" reloadDocument>
        política de privacidad de datos
      </Link> */}
    </label>
  );
};

export default PolicyCheckboxLabel;
