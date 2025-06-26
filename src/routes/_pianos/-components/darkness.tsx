// const Darkness = ({ show }: { show: boolean | null }) => (
//   <div
//     className={`h-screen fixed bg-[#080808] z-20 ${
//       show === null
//         ? "opacity-0 w-0"
//         : show === true
//         ? "animate-darknessIn"
//         : "animate-darknessOut"
//     }`}
//   ></div>
// );

const Darkness = ({ show }: { show: boolean | null }) => (
  <div
    className={`h-screen fixed bg-[#080808] z-20 ${
      show === null
        ? "opacity-0 w-0"
        : show === true
        ? "animation-darkness-in"
        : "animation-darkness-out"
    }`}
  ></div>
);

export default Darkness;
