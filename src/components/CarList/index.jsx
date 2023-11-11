import './styles.css'

function CarList({ cars }) {
    
    return (
        <div className="car-list-container">
            {cars.map((item) => (
                <div key={item.id} className="car-card">
                    <img src={item.image} />
                    <p>{item.name}</p>
                    <h2>Rp. {item.price}/ hari</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Pilih Mobil</button>
                </div>
            ))}
        </div>
    )
}

export default CarList;