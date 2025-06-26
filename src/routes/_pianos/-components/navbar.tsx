import IconMail from "./iconMail";
import IconPhone from "./iconPhone";
import PagesLinks from "./pagesLinks";

const Navbar = ({
  show,
  setShow,
}: {
  show: boolean | null;
  setShow: (value: boolean | null) => void;
}) => (
  <div
    id="Navbar"
    onClick={() => setShow(false)}
    onKeyDown={() => setShow(false)}
    role="button"
    tabIndex={0}    
    className={`fixed h-full w-80 z-40 bg-[#780a0a] overflow-x-hidden -mt-2.5 text-left -m-80 ${
      show === null
        ? "-m-80"
        : show === true
        ? "animate-navbar-in"
        : "animate-navbar-out"        
      }
    `}    
  >
    <nav>
      <button
        type="button"
        onClick={() => setShow(false)}
        className="float-right w-20 text-6xl text-[#818181] block cursor-pointer h-20 hover:text-[#f1f1f1]"
      >
        ×
      </button>
      <div className="clear-right">
        <PagesLinks
          className=""
          aStyle="w-80 text-[#818181] ml-10 hover:text-[#f1f1f1] pr-2 pl-8 py-2"
          uStyle={"-ml-10"}
        />
      </div>
    </nav>
    <div className="sidenavdown w-80 inline-block h-16 px-10 mt-6">
      <a
        href="mailto:pianos@enriquearzamendi.com"
        className="mailto inline-block ml-9 fill-[#818181] hover:fill-[#f1f1f1] duration-300"
        aria-label="enlace al correo electrónico"
      >
        <IconMail circle={true} />
      </a>
      <a
        href="tel:686643019"
        className="phone inline-block ml-12 fill-[#818181] hover:fill-[#f1f1f1] duration-300"
        aria-label="enlace al número de teléfono"
      >
        <IconPhone />
      </a>
    </div>
    <p className="w-80 text-xl text-center mt-10 text-[#bd9766] italic">
      Teléfono: 686643019 pianos@enriquearzamendi.com
    </p>
  </div>
);

export default Navbar;
