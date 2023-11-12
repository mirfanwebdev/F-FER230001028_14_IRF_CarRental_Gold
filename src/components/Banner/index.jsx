import { Link } from 'react-router-dom';
import './style.css'

function Banner() {
    return (
        <div className="container-banner">
            <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to={'/search'}>
            <button type='button' className='btn'>Mulai Sewa Mobil</button>
            </Link>
        </div>
    )
}

export default Banner;