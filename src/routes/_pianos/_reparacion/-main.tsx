import Image from "../../../components/custom/Image";

const styles = {
  p: "text-[16px] tracking-[1px] leading-[1.5] mb-[10px]",
  main: "h-auto pt-[10px] pb-[7vw] mx-auto text-black bg-[#d2d2d2] max-w-5xl text-center sm:pb-[4.5vw] sm:grid sm:grid-cols-12 sm:justify-normal lg:p-[35px] lg:pb-[60px] dark:bg-[#222] dark:text-[#ccc]",
  h2: "text-[30px] text-[#80000099] font-bold py-[28px] leading-[1] dark:text-[#ff000099]",
  a: "text-black no-underline cursor-pointer",
  figcaption:
    "italic text-[16px] tracking-[1px] leading-[1.5] w-full text-center py-[20px] px-[10px]",
  figure: "w-full h-auto",
  img: "w-full h-auto",
  box: "mx-[7vw] h-auto mt-[12px] mb-auto sm:mt-auto sm:mx-[4.5vw] lg:mx-[50px]",
  boxP: "sm:ml-[2vw] sm:col-span-7 md:ml-[5.5vw] min-[820px]:ml-[13vw] min-[920px]:ml-[21vw] lg:ml-[37%]",
  polaroid: "shadow-[0_4px_8px_0_#00000033,0_6px_20px_0_#00000030]",
};

const Main = () => (
  <main className={styles.main}>
    <div className={`box ${styles.box} ${styles.boxP} order-2`}>
      <p className={`${styles.p} my-[15px]`}>
        A veces los pianos, debido a su uso o simplemente al paso del tiempo,
        pueden sufrir el deterioro de alguno de sus componentes. Esto conlleva
        la necesidad de su reposición por otros nuevos y de las mismas
        características. Es importante que ésta intervención sea realizada por
        un técnico-afinador de pianos cualificado, ya que es la única garantía
        de que se realice correctamente.
        <br />
        La reparaciones más frecuentes suelen ser la sustitución de cuerdas y
        bordones (cuerdas entorchadas con hilo de cobre en la zona izquierda del
        piano) rotos.
      </p>
    </div>
    <div className={`box ${styles.box} sm:col-span-5 order-1`}>
      <figure
        className={`subbox polaroid first ${styles.figure} ${styles.polaroid}`}
      >
        <Image
          src="sustitucion-de-una-cuerda-rota.jpg"
          width={315}
          height={236.02}
          alt=""
          className={styles.img}
        />
        <figcaption className={styles.figcaption}>
          Sustitución de una cuerda rota
        </figcaption>
      </figure>
    </div>
    <div className={`box ${styles.box} ${styles.boxP} order-4`}>
      <p className={`${styles.p} my-[15px]`}>
        También son frecuentes la sustitución de muelles rotos y piezas de
        fieltro del mecanismo desgastadas o deterioradas.
        <br />
        Así mismo puede ocurrir que los aplacados de las teclas (las piezas
        blancas que cubren las teclas, habitualmente de marfil en los pianos
        antiguos) estén deteriorados, rotos o a veces perdidos en varias teclas.
        En esos casos la solución ideal es instalar un juego nuevo de aplacados
        en todo el teclado. El aspecto y el tacto del piano cambian totalmente y
        son similares a los de un piano nuevo.
      </p>
    </div>
    <div className={`box ${styles.box} sm:col-span-5 order-3`}>
      <figure
        className={`subbox polaroid third ${styles.figure} ${styles.polaroid}`}
      >
        <Image
          src="cambiando-un-eje-de-la-maquinaria.jpg"
          width={315}
          height={419.58}
          alt=""
          className={styles.img}
        />
        <figcaption className={styles.figcaption}>
          Cambiando un eje de la maquinaria
        </figcaption>
      </figure>
    </div>
    <div className={`box ${styles.box} ${styles.boxP} order-6`}>
      <p className={`${styles.p} my-[15px]`}>
        Otro problema frecuente es el que ocurre cuando los ejes de las piezas
        móviles del mecanismo no se mueven con la soltura correcta. Si están
        torpes impedirán que los martillos golpeen a las cuerdas con normalidad
        y habrá notas que no suenen o que no ejecuten la repetición con
        velocidad. Si los ejes están demasiado flojos esto producirá ruidos
        dentro del piano e imprecisión en el golpeo de las cuerdas. La solución
        habitualmente consiste en la sustitución de los ejes y a veces la
        lubricación.
      </p>
    </div>
    <div className={`box ${styles.box} sm:col-span-5 order-5`}>
      <figure
        className={`subbox polaroid fifth ${styles.figure} ${styles.polaroid}`}
      >
        <Image
          src="instalacion-de-aplacados-nuevos-en-el-teclado.jpg"
          width={315}
          height={236.02}
          alt=""
          className={styles.img}
        />
        <figcaption className={styles.figcaption}>
          Instalación de aplacados nuevos en el teclado
        </figcaption>
      </figure>
    </div>
    <div className={`box full ${styles.box} sm:col-span-12 order-7`}>
      <h2 className={styles.h2}>Restauración Completa de un Piano</h2>
      <p className={`${styles.p} mb-[15px]`}>
        En el caso de pianos de gran valor, principalmente pianos de cola, o
        también de pianos con valor sentimental, existe la opción de realizar
        una restauración completa del piano. En ese caso se sustituyen todos los
        materiales envejecidos del piano por elementos nuevos.
        <br />
        En primer lugar se desmonta completamente el piano y se retiran los
        componentes a sustituir. Se realiza una limpieza completa del interior
        del piano. Posteriormente se procede a lubricar los elementos que
        soportan rozamientos.
        <br />
        Al restaurar un piano las cuerdas y bordones, las clavijas, las cabezas
        de martillos, los fieltros del mecanismo y del teclado, etc. son
        sustituidos por juegos nuevos de las mísmas medidas y características.
        <br />
        Llega el momento de la regulación. Todos los componentes del piano son
        ajustados en altura, posición, recorrido, peso, fuerza, etc. para que el
        funcionamiento total sea perfecto.
        <br />
        Más tarde se procede a entonar los martillos para ajustar el brillo y la
        calidad de sonido del piano.
        <br />
        La afinación es el último eslabón del proceso, dando como resultado un
        rejuvenecimieto completo del piano, que en el aspecto sonoro y de tacto
        del teclado recupera las características del momento de su fabricación.
        Un buen restaurador de pianos consigue que el piano suene tan bien como
        cuando era nuevo.
      </p>
    </div>
    <div
      className={`box image_bottom full ${styles.box} sm:col-span-12 order-8`}
    >
      <figure className={`polaroid ${styles.figure} ${styles.polaroid}`}>
        <Image
          src="piano-de-cola-tras-ser-restaurado.jpg"
          width={900}
          height={675.95}
          alt=""
          className={styles.img}
        />
        <figcaption className={styles.figcaption}>
          Piano de cola tras ser restaurado
        </figcaption>
      </figure>
    </div>
  </main>
);

export default Main;
