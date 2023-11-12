import './style.css'
import logo from '../../assets/minivan-logo.svg'

function Header() {
    return(
        <div className='container-head'>
            <div>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className='container-link'>
                <a href='#our-services'>our services</a>
                <a href='#why-us'>why us</a>
                <a href='#testimony'>testimonial</a>
                <a href='#faq'>faq</a>
            </div>
        </div>
    )
}

export default Header;