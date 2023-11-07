import React from "react";
import Hero from "../../components/Hero";
import OurServices from "../../components/OurServices";
import WhyUsCard from "../../components/WhyUsCard";

function LandingPage() {
    return(
        <div>
            <Hero />
            <OurServices/>
            <WhyUsCard />
        </div>
    )
}

export default LandingPage;