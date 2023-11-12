import './styles.css'

function HamburgerMenu({ isDisplay, handleDisplay }) {
    return (
        <div>
            {isDisplay ?
                <div className='mobile'>
                    <button onClick={handleDisplay} className='hamburger-menu'>
                        <i className="bi bi-list"></i>
                    </button>
                </div> :
                <div className='mobile mobile-menu'>
                    <div>
                        <p>BCR</p>
                        <button onClick={handleDisplay} >
                        <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className='menu-list'>                    
                        <a href='#our-services'>Our Services</a>
                        <a href='#why-us'>Why Us</a>
                        <a href='#testimony'>Testimonial</a>
                        <a href='#faq'>FAQ</a>
                    </div>
                </div>
            } 
        </div>
    )
}

export default HamburgerMenu