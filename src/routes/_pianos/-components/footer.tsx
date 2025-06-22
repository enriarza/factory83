import IconFacebook from "./iconFacebook";
import IconInstagram from "./iconInstagram";
import IconMail from "./iconMail";
import IconMaps from "./iconMaps";
import IconPhone from "./iconPhone";
import IconX from "./iconX";
import IconYoutube from "./iconYoutube";
import PagesLinks from "./pagesLinks";
import Zone from "./zone";
import References from "./references";

const styles = {
  a: "duration-300 float-left dark:text-[#aaa]",
  p: "text-xl text-center dark:text-[#aaa]",
  sociala:
    "w-1/5 transition-all fill-white hover:bg-black text-black text-xl h-16 pt-3 text-center",
};

const FooterContact = () => (
  <>
    <p className={`${styles.p} pb-3`}>
      Tlfno.:
      <span className="m-5 text-3xl" id="tlf">
        686643019
      </span>
    </p>
    <p
      className={`${styles.p} w-72 py-3.5 border-y-2 border-y-black m-auto dark:border-y-[#aaa]`}
      id="email_"
    >
      Email: <br />
      pianos@enriquearzamendi.com
    </p>
    <div className="py-5 h-24">
      <a
        href="mailto:pianos@enriquearzamendi.com"
        className={`${styles.a} mailto ml-14 text-2xl fill-black hover:fill-[#ffa500] dark:fill-[#aaa] dark:hover:fill-[#fff]`}
        aria-label="enlace al correo electrónico"
      >
        <IconMail circle={true} />
      </a>
      <a
        href="tel:686643019"
        className={`${styles.a} phone ml-12 text-2xl fill-black hover:fill-[#ffa500] dark:fill-[#aaa] dark:hover:fill-[#fff]`}
        aria-label="enlace al número de teléfono"
      >
        <IconPhone />
      </a>
    </div>
  </>
);

// I use in the footer className 'border-t' for remove a blur zone. I don' know the cause of the issue nor the reason of the solution
// It is "border-t border-t-transparent"
const Footer = ({
  activity,
  urlActivity,
}: {
  activity: string;
  urlActivity: string;
}) => (
  <footer className="mx-auto bg-[#6d9bcf80] max-w-5xl border-t border-t-transparent dark:bg-[#0d3b6f80]">
    <div className="sm:grid grid-cols-12 justify-normal">
      {activity ? (
        <>
          <div className="box menu px-0.5 w-72 mx-auto sm:col-span-6 lg:col-span-4">
            <PagesLinks
              className="forFooter"
              aStyle="text-[#c20000] leading-snug hover:text-white text-center py-1.5 dark:text-[#ff8866] hover:dark:text-[#fff]"
              uStyle=""
            />
          </div>
          <Zone urlActivity={urlActivity} />
          <div className="box contacto text-black pt-24 w-72 mx-auto sm:col-span-6 sm:col-start-4 lg:pt-24 lg:col-span-4">
            <FooterContact />
          </div>
        </>
      ) : (
        <>
          <div className="box menu px-0.5 w-72 mx-auto sm:col-span-6 sm:mb-8 lg:mb-auto">
            <PagesLinks
              className="forFooter"
              aStyle="text-[#c20000] leading-snug hover:text-white text-center py-1.5 dark:text-[#ff8866] hover:dark:text-[#fff]"
              uStyle=""
            />
          </div>
          <div className="box contacto text-black pt-24 w-72 mx-auto sm:col-span-6">
            <FooterContact />
          </div>
        </>
      )}
    </div>
    <References />
    <div className="socialicons w-full h-16 bg-[#555] overflow-auto lg:mt-9">
      <a
        href="https://www.google.es/maps/place/Enrique+Arzamendi+-+Afinaci%C3%B3n,+Reparaci%C3%B3n+y+Transporte+de+Pianos/@42.9425182,-3.6477936,8z/data=!3m1!4b1!4m5!3m4!1s0xd4fc26c0f514ecd:0xea1263880fa7730a!8m2!3d43.0083241!4d-2.5040858?hl=es"
        className={`${styles.a} ${styles.sociala} fa-map-marker normal`}
        aria-label="enlace a Google Maps"
      >
        <IconMaps />
      </a>
      <a
        href="https://x.com/enriquearzamend"
        className={`${styles.a} ${styles.sociala} fa-twittern normal`}
        aria-label="enlace a X"
      >
        <IconX />
      </a>
      <a
        href="https://facebook.com/1703642263217981"
        className={`${styles.a} ${styles.sociala} fa-facebookn normal`}
        aria-label="enlace a Facebook"
      >
        <IconFacebook />
      </a>
      <a
        href="https://www.instagram.com/enrique.arzamendi/?hl=es"
        className={`${styles.a} ${styles.sociala} fa-instagram normal`}
        aria-label="enlace a Instagram"
      >
        <IconInstagram />
      </a>
      <a
        href="https://www.youtube.com/channel/UCn56pyQDRfqtlEJIjzahTOQ"
        className={`${styles.a} ${styles.sociala} fa-youtuben normal`}
        aria-label="enlace a Youtube"
      >
        <IconYoutube />
      </a>
    </div>
  </footer>
);

export default Footer;
