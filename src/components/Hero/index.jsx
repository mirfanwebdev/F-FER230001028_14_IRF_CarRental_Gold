import Header from '../Header'
import carImage from '../../assets/image-car-mercedes.png'
import { Link } from 'react-router-dom'
import './style.css'
import HamburgerMenu from '../HamburgerMenu'
import { useState } from 'react'

function Hero({isHidden}) {
    const [isDisplay, setDisplay] = useState(true)

    const handleDisplay = () => {
        setDisplay(!isDisplay)
    }

    return(
        <div className='container-section'>
            <Header 
                className='header'
                isDisplay={isDisplay}
                handleDisplay={handleDisplay}
            />
            <HamburgerMenu 
                isDisplay={isDisplay} 
                handleDisplay={handleDisplay} 
            />
            {isHidden ? <div className='blank'></div> : <div className='container-hero'>
                <div className='container-text'>
                    <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <Link to={'/search'}>
                    <button type='button' className='btn' >Mulai Sewa Mobil</button>
                    </Link>
                </div>
                <div className='container-image'>
                    <img src={carImage} alt='car-image' />
                    <div className='background'></div>
                </div>
            </div> }
        </div>
    )
}

export default Hero;