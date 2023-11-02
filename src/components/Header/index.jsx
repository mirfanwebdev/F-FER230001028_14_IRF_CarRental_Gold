import './style.css'

function Header() {
    return(
        <div className='container-head'>
            <div>
                <div className='logo-dummy'></div>
            </div>
            <div className='container-link'>
                <a>our services</a>
                <a>why us</a>
                <a>testimonial</a>
                <a>faq</a>
            </div>
        </div>
    )
}

export default Header;