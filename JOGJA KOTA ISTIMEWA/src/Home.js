import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Destinasi from "./components/Destinasi";
import Kuliner from "./components/Makanan";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import scrollreveal from "scrollreveal";

export default function Home() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #destinasi,
        #kuliner,
        #aboutus,
        footer
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Hero />
      <Destinasi />
      <Kuliner />
      <Aboutus />
      <Footer />
    </>
  );
}
