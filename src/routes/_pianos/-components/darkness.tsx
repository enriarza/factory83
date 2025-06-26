const Darkness = ({ show }: { show: boolean | null }) => (
  <div
    className={`h-screen w-screen fixed bg-[#080808] z-20 opacity-0 ${
      show === null
        ? "opacity-0"
        : show === true
        ? "animate-darkness-in"         
        : "animate-darkness-out"       
    }`}
  ></div>
);

export default Darkness;
