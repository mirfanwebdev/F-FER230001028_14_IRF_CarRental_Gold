import "./styles.css";
import Footer from "../../components/Footer";
import CarDetails from "../../components/CarDetails";
import Hero from "../../components/Hero";
import { useState } from "react";

function DetalisPage() {
  const [isHidden] = useState(true);

  return (
    <>
      <Hero isHidden={isHidden} />
      <CarDetails />
      <Footer />
    </>
  );
}

export default DetalisPage;
