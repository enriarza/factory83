//import ContactForm from "./-contactForm";

const styles = {
  p: "text-base tracking-wider",
  //h2: "text-3xl text-[#80000099] font-bold py-7",
  h2: "text-base tracking-wider dark:text-[#ff000099]",
  main: "px-7 pt-3.5 pb-7 mx-auto text-black bg-[#d2d2d2] max-w-5xl text-center sm:p-7 sm:grid sm:gap-4 sm:grid-cols-12 sm:justify-normal lg:gap-16 dark:bg-[#222] dark:text-[#ccc]",
  box: " my-auto",
};

const Main = () => (
  <main className={`${styles.main}`}>
    <div className={`${styles.box} box column form-header sm:col-span-5`}>
      {/* <p id="telefono" className={`pt-5 ${styles.p}`}>
        TELÉFONO DE CONTACTO:{" "}
      </p> */}
      <h2 id="telefono" className={`pt-5 ${styles.p}`}>
        TELÉFONO DE CONTACTO:{" "}
      </h2>
      <span id="tel" className="text-2xl">
        686643019
      </span>
      <p
        className={`${styles.p} py-4 px-5 mt-5 border-t border-solid border-black`}
      >
        Aquí puedes plantearnos tus consultas, solicitarnos presupuestos o
        comentarnos las dudas que te surjan. Estaremos encantados de ayudarte:
      </p>
    </div>
    <div className={`${styles.box} box sm:col-span-7`}>
      {/* <ContactForm /> */}
    </div>
  </main>
);

export default Main;
