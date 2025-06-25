//import { Link } from "@remix-run/react";
import Image from "../../../components/custom/Image";
import Slideshow from "../../../components/custom/Slideshow";
const slides = [
  "ruedas-de-goma.jpg",
  "cruz-de-ruedas.jpg",
  "soporte-de-ruedas.jpg",
];

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
  slideshow: "animate-fadeOn",
};

const Main = () => (
  <main className={styles.main}>
    <div className={`box first ${styles.box} order-1`}>
      <h2 className={styles.h2}>Pianos Verticales</h2>
      <p className={styles.p}>
        Es el tipo de piano más frecuente. Tras colocarle una funda de
        protección especial de 2 centímetros de grosor, se carga en un pequeño
        carrito con ruedas de goma (para no rayar los suelos de madera) con el
        que se saca de la vivienda. Posteriormente el piano es colocado sobre la
        máquina elevadora con orugas con la que se traslada subiendo o bajando
        escaleras hasta el furgón de transporte. En el lugar de destino se
        realiza el proceso inverso hasta su colocación definitiva en el lugar
        indicado.
      </p>
    </div>
    <div className={`box image_top second ${styles.box} order-2`}>
      <figure className={`polaroid ${styles.polaroid} ${styles.figure}`}>
        <Image
          src="transportando-un-piano-vertical.jpg"
          width={400}
          height={400}
          alt=""
          className={styles.img}
        />
        <figcaption className={styles.figcaption}>
          Transportando un piano vertical
        </figcaption>
      </figure>
    </div>
    <div className={`box fourth ${styles.box} order-4`}>
      <h2 className={styles.h2}>Pianos de Cola</h2>
      <p className={styles.p}>
        Son los hermanos mayores de ésta familia de instrumentos. Para su
        traslado es necesario desmontar sus tres patas y utilizar un patín de
        madera firmemente sujeto al lateral izquierdo del piano (que es el único
        lateral plano del instrumento) sobre el que volcarlo. El uso de una
        funda de protección especial para pianos de cola, el carrito de ruedas
        de goma y la máquina elevadora de orugas es similar al de los
        transportes de pianos verticales.
      </p>
    </div>
    <div className={`box third ${styles.box} order-3`}>
      <figure className={`polaroid ${styles.polaroid} ${styles.figure}`}>
        <Image
          src="piano-de-cola.jpg"
          width={400}
          height={299.7}
          alt=""
          className={styles.img}
        />
        <figcaption className={styles.figcaption}>Piano de cola</figcaption>
      </figure>
    </div>
    <div className={`box fifth ${styles.box} order-5`}>
      <h2 className={styles.h2}>Pianos Digitales</h2>
      <p className={styles.p}>
        Cada vez más frecuentes en nuestras casas, su transporte implica
        desmontar varios de los componentes del piano, protegerlos con fundas y
        trasladarlos a mano o en la máquina elevadora con orugas, según las
        circunstancias. Posteriormente hay que volver a montar y conectar los
        elementos y hacer las comprobaciones y chequeos para verificar su
        correcto funcionamiento.{" "}
      </p>
    </div>
    <div className={`box sixth ${styles.box} order-6`}>
      <figure className={`polaroid ${styles.polaroid} ${styles.figure}`}>
        <Image
          src="piano-digital.jpg"
          width={400}
          height={400}
          alt=""
          className={styles.img}
        />
        <figcaption className={styles.figcaption}>Piano digital</figcaption>
      </figure>
    </div>
    <div className={`box eighth ${styles.box} order-8`}>
      <h2 className={styles.h2}>Pianolas</h2>
      <p className={styles.p}>
        Las pianolas fueron una evolución de los pianos verticales que tuvo
        lugar en la segunda década del siglo pasado. Ante la ausencia de
        reproductores de música de calidad en esa época, el hecho de que un
        piano interpretara música sin la necesidad de un pianista fue algo que
        revolucionó el ámbito de los instrumentos musicales domésticos. Para
        hacernos idea de la magnitud de estos cambios solo entre los años 1910 y
        1925 vendieron en los Estados Unidos más de 2,6 millones de pianolas.
        Son pianos de grandes dimensiones, a veces llegan pesar hasta 350 kg. y
        su transporte requiere frecuentemente desmontar la maquinaria, el
        teclado y las patas laterales del instrumento.
      </p>
    </div>
    <div className={`box seventh ${styles.box} order-7`}>
      <figure className={`polaroid ${styles.polaroid} ${styles.figure}`}>
        <Image
          src="pianola.jpg"
          width={400}
          height={360.11}
          alt=""
          className={styles.img}
        />
        <figcaption className={styles.figcaption}>Pianola</figcaption>
      </figure>
    </div>
    <div className={`box ninth ${styles.box} order-9`}>
      <h2 className={styles.h2}>Clavicémbalos</h2>
      <p className={styles.p}>
        También llamados clavecines o claves. Antepasados de los pianos
        modernos, estos bellos instrumentos requieren una gran delicadeza en su
        manipulación. Construidos con maderas delgadas y sin la estructura
        metálica de los pianos (a los que confiere su solidez), sus traslados
        han de ser muy cuidadosos, evitando toda brusquedad.
      </p>
    </div>
    <div className={`box tenth ${styles.box} order-10`}>
      <figure className={`polaroid ${styles.polaroid} ${styles.figure}`}>
        <Image
          src="clavicembalo.jpg"
          width={400}
          height={299.7}
          alt=""
          className={styles.img}
        />
        <figcaption className={styles.figcaption}>Clavicémbalo</figcaption>
      </figure>
    </div>
    <div className={`box twelveth ${styles.box} order-12`}>
      <h2 className={styles.h2}>Órganos Positivos</h2>
      <p className={styles.p}>
        El órgano positivo es un pequeño órgano de tubos utilizado
        principalmente para la interpretación de música antigua. Su transporte
        requiere, además del esmero y delicadeza en la manipulación del
        instrumento, que se mantenga éste siempre en posición horizontal para
        evitar desajustes en sus componentes (básicamente tubos y lengüetas).
      </p>
    </div>
    <div className={`box eleventh ${styles.box} order-11`}>
      <figure className={`polaroid ${styles.polaroid} ${styles.figure}`}>
        <Image
          src="organo-positivo.jpg"
          width={400}
          height={300}
          alt=""
          className={styles.img}
        />
        <figcaption className={styles.figcaption}>Órgano positivo</figcaption>
      </figure>
    </div>
    <div className={`box thirteenth ${styles.box} order-[13]`}>
      <h2 className={styles.h2}>Instalación de Protectores de Ruedas</h2>
      <p className={styles.p}>
        Con el objeto de evitar que las ruedas del piano rayen el suelo (sobre
        todo si éste es de madera) existen unos accesorios que instalados bajo
        las mismas cumplen ese cometido. Además tienen la virtud de disminuir el
        volumen del sonido del piano que perciben los vecinos al proporcionar
        una aislamiento de las vibraciones que se transmiten por la estructura
        del edificio.
      </p>
    </div>
    <div className={`box fourteenth ${styles.box} order-[14]`}>
      <figure className={`polaroid ${styles.polaroid} ${styles.figure}`}>
        <Image
          src="protector-de-ruedas.jpg"
          width={400}
          height={532.8}
          alt=""
          className={styles.img}
        />
        <figcaption className={styles.figcaption}>
          Protector de ruedas
        </figcaption>
      </figure>
    </div>
    <div className={`box sixteenth ${styles.box} order-[16]`}>
      <h2 className={styles.h2}>Instalación de Ruedas</h2>
      <p className={styles.p}>
        Cuando se necesita cambiar la ubicación del piano con cierta frecuencia
        es importante que disponga de unas buenas ruedas. Hay pianos que no las
        tienen, otros que tienen ruedas metálicas y pueden rayar los suelos de
        madera y por último pianos cuyas ruedas no funcionan adecuadamente.
        Existe todo un conjunto de soluciones para cada uno de los casos, desde
        ruedas dobles de goma para no rayar los suelos de madera, soportes de
        ruedas para pianos pequeños, cruces de 4 ruedas de goma para pianos de
        cola, etc.
      </p>
    </div>

    <div className={`box fifteenth ${styles.box} order-[15]`}>
      <figure className={`polaroid ${styles.polaroid} ${styles.figure}`}>
        <Slideshow
          slides={slides}
          speed={8000}
          imageStyles={`${styles.img} ${styles.slideshow}`}
          figcaptionStyles={`${styles.figcaption} ${styles.slideshow}`}
        />
      </figure>
    </div>
    <div className={`box seventeenth ${styles.box} order-[17]`}>
      <h2 className={styles.h2}>Utilización de Grúas</h2>
      <p className={styles.p}>
        En ciertas ocasiones, bien sea por las dimensiones del piano o por la
        estrechez de las escaleras, no es factible la utilización de la máquina
        elevadora con orugas y en ese caso con frecuencia se recurre al uso de
        gruas. Nuestra empresa tramita los permisos y lleva a cabo todo el
        {/* proceso del<Link to="/traslado-de-pianos"> traslado </Link> */}
        desde el origen del piano hasta su lugar de destino.
      </p>
    </div>
    <div className={`box image_bottom eighteenth ${styles.box} order-[18]`}>
      <figure className={`polaroid ${styles.polaroid} ${styles.figure}`}>
        <Image
          src="transporte-de-un-piano-de-cola-utilizando-una-grua.jpg"
          width={400}
          height={532.8}
          alt=""
          className={styles.img}
        />
        <figcaption className={styles.figcaption}>
          Transporte de un piano de cola utilizando una grúa
        </figcaption>
      </figure>
    </div>
  </main>
);

export default Main;
