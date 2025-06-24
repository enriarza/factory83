import Image from "../../../components/custom/Image";

const styles = {
  p: "text-base tracking-wider mb-2.5",
  h2: "text-3xl text-[#80000099] font-bold py-7 dark:text-[#ff000099]",
  a: "text-black no-underline cursor-pointer",
  figcaption: "italic text-base tracking-wider w-full text-center py-5 px-2.5",
  figure: "w-full h-auto",
  img: "w-full h-auto",
  polaroid: "shadow-[0_4px_8px_0_#00000033,0_6px_20px_0_#00000030]",
  main: "h-auto pb-7 mx-auto text-black bg-[#d2d2d2] max-w-5xl text-center sm:py-6 sm:grid sm:grid-cols-12 sm:justify-normal md:py-11 dark:bg-[#222] dark:text-[#ccc]",
  box: "mx-7 h-auto my-auto sm:col-span-6 md:mx-10 lg:mx-12",
};

const Main = () => (
  <main className={`${styles.main}`}>
    <div className={`box first ${styles.box} order-1`}>
      <h2 className={styles.h2}>Afinación de Pianos</h2>
      <p className={`${styles.p}`}>
        Para que un piano nos ofrezca todo su potencial y sea una fuente de
        placer y disfrute es esencial que esté perfectamente afinado y mantenga
        su mecanismo óptimamente regulado. La intervención de un afinador de
        pianos cualificado hará que el mantenimiento de nuestro piano sea algo
        siempre cómodo, sencillo y asequible.
      </p>
    </div>
    <div className={`box image_top second ${styles.box} order-2`}>
      <figure className={`polaroid ${styles.figure} ${styles.polaroid}`}>
        <Image
          src="afinacion-de-un-piano-vertical.jpg"
          width={400}
          height={300}
          alt=""
          className={`${styles.img}`}
        />
        <figcaption className={styles.figcaption}>
          Afinación de un piano vertical
        </figcaption>
      </figure>
    </div>
    <div className={`box fourth ${styles.box} order-4`}>
      <h2 className={styles.h2}>Reparación de Pianos</h2>
      <p className={styles.p}>
        En ciertas ocasiones un piano, bien sea por su uso o por el paso del
        tiempo, puede sufrir el deterioro o la rotura de alguno de sus
        componentes. En esos casos la sustitución del elemento dañado por uno
        nuevo y los ajustes correspondientes devolverán al instrumento a su
        estado natural de eficiencia y óptimo funcionamiento. Es importante que
        ésta intervención sea realizada por un técnico-afinador de pianos
        cualificado, ya que es la única garantía de que se realice
        correctamente.
      </p>
    </div>
    <div className={`box third ${styles.box} order-3`}>
      <figure className={`polaroid ${styles.figure} ${styles.polaroid}`}>
        <Image
          src="reparacion-de-un-martillo-de-un-piano-de-cola.jpg"
          width={400}
          height={300}
          alt=""
          className={styles.img}
        />
        <figcaption className={styles.figcaption}>
          Reparación de un martillo de un piano de cola
        </figcaption>
      </figure>
    </div>
    <div className={`${styles.box} box fifth order-5`}>
      <h2 className={styles.h2}>Transporte de Pianos</h2>
      <p className={styles.p}>
        El traslado de pianos conjuga la delicadeza de la manipulación de
        instrumentos musicales que son auténticas obras de arte con la
        dificultad que conlleva el desplazamiento de objetos de gran peso, que
        en ocasiones alcanzan los 500 kg. El transportista de pianos es un
        especialista.
      </p>
    </div>
    <div className={`box image_bottom sixth ${styles.box} order-6`}>
      <figure className={`polaroid ${styles.figure} ${styles.polaroid}`}>
        <Image
          src="traslado-de-un-piano-vertical.jpg"
          width={400}
          height={272}
          alt=""
          className={styles.img}
        />
        <figcaption className={styles.figcaption}>
          Traslado de un piano vertical
        </figcaption>
      </figure>
    </div>
  </main>
);

export default Main;
