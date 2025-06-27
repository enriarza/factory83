const Header = ({ activity, place }: { activity: string; place: string }) => (
  <header className="h-auto text-white pt-5 m-auto max-w-5xl bg-[#00000080] text-center">
    <h1 className="mt-24 mb-5 mx-auto font-ubuntu_medium text-5xl tracking-wide text-[#ffffffcc] w-11/12 dark:text-[#cccccccc]">
      {activity} de Pianos
      {place ? ` en ${place}` : ""}
    </h1>
    <p className="text-base tracking-wider w-11/12 m-auto sm:text-xl dark:text-[#ccc]">
      En ciertas ocasiones un piano, bien sea por su uso o por el paso del
      tiempo, puede sufrir el deterioro o la rotura de alguno de sus
      componentes. En esos casos la sustitución del elemento dañado por uno
      nuevo y los ajustes correspondientes devolverán al instrumento a su estado
      natural de eficiencia y óptimo funcionamiento. Es importante que ésta
      intervención sea realizada por un técnico-afinador de pianos cualificado,
      ya que es la única garantía de que se realice correctamente.
      <br />
      {place ? `Trabajamos en ${place}` : ""}
    </p>
  </header>
);

export default Header;
