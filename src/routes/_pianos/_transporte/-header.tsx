const Header = ({ activity, place }: { activity: string; place: string }) => (
  <header className="h-auto text-white pt-5 m-auto max-w-5xl bg-[#00000080] text-center">
    <h1 className="mt-24 mb-5 mx-auto font-ubuntu_medium text-5xl tracking-wide text-[#ffffffcc] w-11/12 dark:text-[#cccccccc]">
      {activity} de Pianos
      {place ? ` en ${place}` : ""}
    </h1>
    <p className="text-base tracking-wider w-11/12 m-auto sm:text-xl dark:text-[#ccc]">
      El traslado de pianos conjuga la delicadeza de la manipulación de
      instrumentos musicales que son auténticas obras de arte con la dificultad
      que conlleva el desplazamientos de objetos de gran peso, que en ocasiones
      alcanzan los 500 kg.
      <br />
      El transportista de pianos es un especialista.
      <br />
      {place ? `Trabajamos en ${place}` : ""}
    </p>
  </header>
);

export default Header;
