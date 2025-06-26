//import { Link } from "@remix-run/react";
import Image from "../../../components/custom/Image";

const styles = {
  p: "text-[16px] tracking-[1px] leading-[1.5] mb-[10px]",
  //h2: "text-[30px] text-[#c2000099] font-bold py-[28px] leading-[1]", // * my-[30px] is the key. margin can create blurred spaces. If possible, better use padding instead margin.
  h2: "text-[30px] text-[#80000099] font-bold py-[28px] leading-[1] dark:text-[#ff000099]", // * my-[30px] is the key. margin can create blurred spaces. If possible, better use padding instead margin.
  a: "text-black no-underline cursor-pointer",
  figcaption:
    "italic text-[16px] tracking-[1px] leading-[1.5] w-full text-center py-[20px] px-[10px]",
  figure: "w-full h-auto",
  img: "w-full h-auto",
  polaroid: "shadow-[0_4px_8px_0_#00000033,0_6px_20px_0_#00000030]",
  main: "h-auto pb-[7vw] mx-auto text-black bg-[#d2d2d2] max-w-5xl text-center sm:pb-[2.5vw] lg:pb-[25px] dark:bg-[#222] dark:text-[#ccc]",
  box: "mx-[7vw] h-auto my-auto sm:mx-[4.5vw] sm:col-span-6 lg:mx-[50px]",

  sectionBottom: "sm:grid sm:grid-cols-12 sm:justify-normal ",
  boxBottom: "sm:col-span-6",
};

const Main = () => (
  <main className={styles.main}>
    <section>
      <div className={`box full first ${styles.box}`}>
        <h2 className={`${styles.h2} pb-[27px]`}>Afinación</h2>
        <figure
          className={`afinacion float_left polaroid ${styles.figure} ${styles.polaroid} sm:w-[59%] sm:float-left sm:mr-[3vw] sm:mb-[2vw]`}
        >
          <Image
            src="afinacion-de-un-piano-de-cola.jpg"
            width={540}
            height={404.61}
            alt=""
            className={styles.img}
          />
          <figcaption className={styles.figcaption}>
            Afinación de un piano de cola
          </figcaption>
        </figure>
        <p className={`${styles.p} mt-[15px]`}>
          La afinación es el ajuste más conocido de los pianos. De hecho para
          muchas personas es sinónimo de todo lo que se puede ajustar y reparar
          en un piano.
          <br />
          <br />
          La afinación consiste en el ajuste de la tensión de cada una de las
          cuerdas de forma que cada nota suene a su altura correcta. Debido a
          que un piano tiene más de 200 cuerdas este trabajo es complejo y
          laborioso.
          <br />
          <br />
          La utilización de afinadores electrónicos para realizar ésta tarea no
          suele dar buenos resultados porque cada piano tiene una inarmonicidad
          diferente (desviación de la afinación teórica) y eso hace que sea
          necesario adaptar los ajustes a cada piano en particular.
          <br />
          <br />
          Los pianos se desafinan tanto si se tocan como si no, ya que la
          tensión de las cuerdas (alrededor de 70 kg. por cuerda de media) hace
          que éstas se vayan aflojando poco a poco. Sí que es cierto que cuanto
          más se toque el piano se desafinará con mayor velocidad.
          <br />
          <br />
          {/* La frecuencia recomendada para<a href="/afinador_de_pianos"> afinar </a> */}
          La frecuencia recomendada para
          {/* <Link to="/afinador-de-pianos"> afinar </Link> */}
          un piano depende de su uso. Si es un piano de concierto, por ejemplo
          en un teatro o sala de conciertos, se debe afinar antes de cada
          actuación ya que lo que se busca es la mayor perfección posible. Si el
          piano está en una vivienda y tiene un uso diario o muy frecuente lo
          ideal es afinarlo todos los años. Si está en una vivienda pero se toca
          poco, por ejemplo los fines de semana, quizás con afinar cada dos años
          sea suficiente. Si el piano no se está usando en absoluto no es
          necesario afinarlo. Todo esto es válido tanto para un piano vertical
          como para un piano de cola o una pianola.
        </p>
      </div>
    </section>
    <section className={`${styles.sectionBottom}`}>
      <div className={`box fourth ${styles.box} ${styles.boxBottom} order-3`}>
        <h2 className={styles.h2}>
          Regulación de la Maquinaria, Teclado y Apagadores
        </h2>
        <p className={styles.p}>
          Estos ajustes persiguen que todos los movimientos de la cadena que
          forman las teclas, las palancas del mecanismo, los martillos y los
          apagadores sean homogéneos y requieran la misma fuerza en los dedos.
          Para ello los técnicos de pianos tienen que ajustar las teclas de
          forma que todas estén a la misma altura y se hundan lo mismo al
          pulsarlas y la dureza de las mismas sea idéntica.
          <br />
          También hay que ajustar varios tornillos de regulación del mecanismo
          que actúan orientando correctamente las palancas y haciendolas actuar
          en el momento oportuno. Otro ajuste importante es el de la distancia
          que recorren los martillos desde su posición de descanso hasta las
          cuerdas a las que han de golpear.
          <br />
          Además, hay que ajustar la fuerza de varios juegos de muelles, el
          funcionamiento de los apagadores para que cuando se deja de pulsar una
          tecla el sonido se apague inmediatamente, etc, etc.
        </p>
      </div>
      <div className={`box second ${styles.box} ${styles.boxBottom} order-1`}>
        <figure className={`polaroid ${styles.figure} ${styles.polaroid}`}>
          <Image
            src="maquinaria-de-un-piano-de-cola.jpg"
            width={400}
            height={299.7}
            alt=""
            className={styles.img}
          />
          <figcaption className={styles.figcaption}>
            Maquinaria de un piano de cola
          </figcaption>
        </figure>
      </div>
      <div className={`box fifth ${styles.box} ${styles.boxBottom} order-4`}>
        <h2 className={styles.h2}>Ajustes de los Pedales</h2>
        <p className={styles.p}>
          Los pianos poseen normalmente 3 pedales aunque algunos modelos tienen
          solo 2.
          <br />
          El pedal derecho, o pedal &quot;forte&quot; es el más importante y
          sirve para hacer que las notas se mantengan sonando aunque se dejen de
          pulsar.
          <br />
          El pedal izquierdo es el pedal &quot;piano&quot;. Consigue que el
          instrumento suene un poco más suave y, en el caso de los pianos de
          cola, con un timbre más dulce.
          <br />
          Por último, el pedal derecho en los pianos de cola se llama
          &quot;pedal tonal&quot; y es una variación del pedal derecho. Sin
          embargo en la mayoría de los pianos verticales es el pedal que activa
          la sordina. La sordina hace que el volumen del piano se reduzca y se
          utiliza principalmente para no molestar a los vecinos.
          <br />
          Al ajustar los pedales, hay que conseguir que cada uno de ellos actúe
          con precisión, tanto al pulsarse como al soltarse, y que no se
          produzca ningún ruido como consecuencia de los rozamientos normales de
          sus elementos.
        </p>
      </div>
      <div className={`box third ${styles.box} ${styles.boxBottom} order-2`}>
        <figure className={`polaroid ${styles.figure} ${styles.polaroid}`}>
          <Image
            src="pedales-de-un-piano-de-cola.jpg"
            width={400}
            height={492.3}
            alt=""
            className={styles.img}
          />
          <figcaption className={styles.figcaption}>
            Pedales de un piano de cola
          </figcaption>
        </figure>
      </div>
      <div className={`box eighth ${styles.box} ${styles.boxBottom} order-7`}>
        <h2 className={styles.h2}>Entonación</h2>
        <p className={styles.p}>
          La entonación es una de las materias más delicadas en la regulación de
          un piano. Su objetivo es conseguir el grado óptimo de brillo y calidad
          de sonido del instrumento. Para ello los técnicos-afinadores han de
          actuar sobre la dureza del fieltro de las cabezas de los martillos. Si
          la dureza es excesiva se procede a pinchar el fieltro con unas agujas
          especiales para hacerle perder tensión. Si, por el contrario, el
          fieltro está demasiado blando se recurre a la administración de lacas
          y sustancias como el Collodión para que el martillo recupere la dureza
          y tensión correctas.
        </p>
      </div>
      <div className={`box sixth ${styles.box} ${styles.boxBottom} order-5`}>
        <figure className={`polaroid ${styles.figure} ${styles.polaroid}`}>
          <Image
            src="entonando-un-martillo-de-piano-de-cola.jpg"
            width={400}
            height={532}
            alt=""
            className={styles.img}
          />
          <figcaption className={styles.figcaption}>
            Entonando un martillo de piano de cola
          </figcaption>
        </figure>
      </div>
      <div className={`box ninth ${styles.box} ${styles.boxBottom} order-8`}>
        <h2 className={styles.h2}>Limpieza Interna del Piano</h2>
        <p className={styles.p}>
          Debido al difícil acceso al interior del piano, a menudo, pese a
          mantener un gran cuidado en la impieza externa del piano, el interior
          del mismo acumula polvo y suciedad. Con el tiempo esto pueden generar
          ruidos, torpeza en el mecanismo y en general un empeoramiento en el
          rendimiento del piano. Por eso es conveniente cada cierto número de
          años que el técnico de pianos realice una limpieza integral del
          interior del instrumento, tanto de la zona de las cuerdas y la tabla
          de resonancia como del mecanismo, la zona interior de los pedales y la
          estructura sobre la que se asientan las teclas. Junto con la limpieza,
          una lubricación de las piezas que soportan rozamientos favorecerá un
          funcionamiento mucho más suave y silencioso del instrumento.
        </p>
      </div>
      <div className={`box seventh ${styles.box} ${styles.boxBottom} order-6`}>
        <figure className={`polaroid ${styles.figure} ${styles.polaroid}`}>
          <Image
            src="eliminacion-de-la-suciedad-de-la-tabla-de-resonancia.jpg"
            width={400}
            height={300.25}
            alt=""
            className={styles.img}
          />
          <figcaption className={styles.figcaption}>
            Eliminacion de la suciedad de la tabla de resonancia
          </figcaption>
        </figure>
      </div>
    </section>
  </main>
);

export default Main;
