const localhost = () => {
  if (typeof window !== "undefined") {
    return window.location.hostname === "localhost";
  } else {
    return process.env.HOST === "localhost";
  }
};

export default localhost;
