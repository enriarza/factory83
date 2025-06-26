const Header = ({ activity, place }: { activity: string; place: string }) => (
  <header className="h-auto text-white pt-5 m-auto max-w-5xl bg-[#00000080] text-center">
    <h1 className="mt-24 mb-5 mx-auto font-ubuntu_medium text-5xl tracking-wide text-[#ffffffcc] w-11/12 dark:text-[#cccccccc]">
      {activity} de Pianos
      {place ? ` en ${place}` : ""}
    </h1>
    <p className="text-base tracking-wider w-11/12 m-auto sm:text-xl dark:text-[#ccc]">
      Para que un piano nos ofrezca todo su potencial y sea una fuente de placer
      y disfrute es esencial que esté perfectamente afinado y mantenga su
      mecanismo óptimamente regulado. La intervención de un afinador de pianos
      cualificado hará que el mantenimiento de nuestro piano sea algo siempre
      cómodo, sencillo y asequible.
      <br />
      {place ? `Trabajamos en ${place}` : ""}
    </p>
  </header>
);

export default Header;
