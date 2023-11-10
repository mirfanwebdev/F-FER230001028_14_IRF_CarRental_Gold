import './styles.css'

function Footer() {
    return (
        <div className="container-footer">
            <div className="address">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="link-footer">
                <p>Our services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>
            <div className="social-footer">
                <p>Connect with us</p>
                <div>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-envelope-fill"></i>
                    {/* <p>instagram</p>
                    <p>twitter</p>
                    <p>email</p> */}
                </div>
            </div>
            <div className="copyright">
                <p>Copyright Binar 2022</p>
                <div className="logo-dummy"></div>
            </div>
        </div>
    )
}

export default Footer;