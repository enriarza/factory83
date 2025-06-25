const Darkness = ({ show }: { show: boolean | null }) => (
  <div
    className={`darkness h-screen fixed bg-[#080808] z-20 ${
      show === null
        ? "opacity-0 w-0"
        : show === true
        ? "animate-darknessIn"
        : "animate-darknessOut"
    }`}
  ></div>
);

export default Darkness;
