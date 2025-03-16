import { useEffect } from "react";
import Router from "./router/Router";
import * as AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      delay: 300,
      duration: 1000,
      easing: "ease",
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
