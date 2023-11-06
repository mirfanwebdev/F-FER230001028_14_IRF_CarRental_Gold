import './style.css'
import imgService from '../../assets/img_service.png'

function OurServices() {
    const servicesList = [
        'Sewa Mobil Dengan Supir di Bali 12 Jam',
        'Sewa Mobil Lepas Kunci di Bali 24 Jam',
        'Sewa Mobil Jangka Panjang Bulanan',
        'Gratis Antar - Jemput Mobil di Bandara',
        'Layanan Airport Transfer / Drop In Out',
    ]
    return(
        <div className='section-service'>
            <div className='container-img'>
                <img src={imgService} alt='our-services-image' />
            </div>
            <div className='container-text-service'>
                <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                {servicesList.map((item) => <li>{item}</li>)}
            </div>
        </div>
    )
}

export default OurServices;