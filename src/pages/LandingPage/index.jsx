import Hero from "../../components/Hero";
import OurServices from "../../components/OurServices";
import WhyUsCard from "../../components/WhyUsCard";
import Testimonies from "../../components/Testimonies";
import Banner from "../../components/Banner";
// import Faq from "../../components/Faq";
import Footer from "../../components/Footer";

function LandingPage() {
  return (
    <div>
      <Hero />
      <OurServices />
      <WhyUsCard />
      <Testimonies />
      <Banner />
      {/* <Faq /> */}
      <Footer />
    </div>
  );
}

export default LandingPage;
