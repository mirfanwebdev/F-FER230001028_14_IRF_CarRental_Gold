import './style.css'

function Header() {
    return(
        <div className='container-head'>
            <div>
                <div className='logo-dummy'></div>
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