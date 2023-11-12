import './styles.css'
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import CarDetails from '../../components/CarDetails';
import { useState } from 'react';

function DetalisPage() {
    const [isHidden] = useState(true)

    return (
        <>
            <Hero isHidden={isHidden} />
            <CarDetails/>
            <Footer/>
        </>
    )
}

export default DetalisPage;