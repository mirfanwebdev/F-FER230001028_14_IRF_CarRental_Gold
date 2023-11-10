import React from "react";
import Hero from "../../components/Hero";
import OurServices from "../../components/OurServices";
import WhyUsCard from "../../components/WhyUsCard";
import Testimonies from "../../components/Testimonies";

function LandingPage() {
    return(
        <div>
            <Hero />
            <OurServices/>
            <WhyUsCard />
            <Testimonies/>
        </div>
    )
}

export default LandingPage;