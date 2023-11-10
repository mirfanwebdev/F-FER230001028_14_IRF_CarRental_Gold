import './style.css';
import avatar from '../../assets/photos/img_photo.png';
import avatar2 from '../../assets/photos/img_photo2.png';

function Testimonies() {
    const testimonyList = [
        {
            image: avatar,
            message: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
            author: 'John Dee 32, Bromo',
        },
        {
            image: avatar,
            message: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
            author: 'John Dee 32, Bromo',
        },
        {
            image: avatar2,
            message: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
            author: 'John Dee 32, Bromo',
        },
    ]

    return(
        <div className='container-testimony-section'>
            <h2>Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
          <div className='container-testimony'>
            {testimonyList.map((item) => (
                <div key={item.id} className='testimony-card'>
                    <img src={item.image} alt='image-avatar' />
                    <div className='card-text'>
                        <p>{item.message}</p>
                        <p>{item.author}</p>
                    </div>
                </div>
            ))}
          </div>  
          <div className='container-button-arrow'>
            <button>left</button>
            <button>right</button>
          </div>
        </div>
    )
}

export default Testimonies;