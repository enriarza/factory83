const styles = {
  p: "text-base tracking-wider w-full h-44 pt-14",
  main: "h-48 mx-auto text-black bg-[#d2d2d2] max-w-5xl text-center dark:bg-[#222] dark:text-[#ccc]",
};

const Main = () => (
  <main className={`${styles.main}`}>
    <div>
      <p className={`gracias ${styles.p}`}>
        Muchas gracias.
        <br />
        Te responderemos lo antes posible
      </p>
    </div>
  </main>
);

export default Main;
