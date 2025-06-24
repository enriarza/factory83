import { territories } from "../-components/variations";
import Image from "../../../components/custom/Image";

const styles = {
  p: "text-base tracking-wider mb-2.5",
  h2: "text-3xl text-[#80000099] font-bold py-7 dark:text-[#ff000099]",
  figure: "max-w-md h-auto mx-auto",
  img: "w-full h-auto",
  polaroid: "shadow-[0_4px_8px_0_#00000033,0_6px_20px_0_#00000030]",
  main: "h-auto pb-2.5 mx-auto text-black bg-[#d2d2d2] max-w-5xl text-center sm:pb-4 dark:bg-[#222] dark:text-[#ccc]",
  box: "h-auto mx-7 my-auto sm:mx-9 sm:col-span-6 md:mx-12",
};

const Main = () => (
  <main className={styles.main}>
    <div
      id="Main1_dondeTrabajamos"
      className={`box full dondeTrabajamos ${styles.box}`}
    >
      <h2 className={styles.h2}>Dónde ofrecemos nuestros servicios</h2>
      <ul className="">
        {Object.keys(territories).map((place, index) => (
          <li key={`place_${index}`} className="sm:w-64 sm:inline-block">
            {place}
          </li>
        ))}
      </ul>
    </div>
    <div className={`box full ${styles.box} pb-6`}>
      <h2 className={styles.h2}>Breve Curriculum</h2>
      <p className={`${styles.p} mb-4`}>
        Estudios musicales en el Conservatorio Jesús Guridi de Vitoria y en el
        L&apos;AULA de música moderna y Jazz (Berklee college of music) de
        Barcelona. Estudios de afinación, regulación y restauración de pianos en
        Hazen (Madrid) durante 1987 y 1988. Alumno de Guido de la Llana
        (afinador del Teatro Real y del Auditorio Nacional de Madrid), Yoji
        Suzuki (Master Yamaha Concert Technician) y Lucien Rosselet (maestro de
        la escuela suiza). 25 años de experiencia profesional afinando para
        artistas como Joaquín Achúcarro, Grigory Sokolof, las hermanas Labèque o
        Arcadi Volodos.
      </p>
      <div id="mifoto">
        <figure className={`polaroid ${styles.figure} ${styles.polaroid}`}>
          <Image
            src="enrique-arzamendi.jpg"
            width={450}
            height={166.92}
            alt="Enrique Arzamendi"
            className={styles.img}
          />
        </figure>
      </div>
    </div>
  </main>
);

export default Main;
