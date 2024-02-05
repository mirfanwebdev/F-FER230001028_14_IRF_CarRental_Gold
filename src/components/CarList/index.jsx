import { Link } from "react-router-dom";
import "./styles.css";

function CarList({ cars }) {
  const NOTFOUND =
    "https://placehold.jp/30/c9c9c9/ffffff/300x150.png?text=image+notfound";
  const formatedPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <div className="car-list-container">
      {cars.map((item) => (
        <div key={item.id} className="car-card">
          {item.image ? <img src={item.image} /> : <img src={NOTFOUND} />}
          {/* <img src={item.image} /> */}
          <p>{item.name}</p>
          <h2>{formatedPrice(item.price)}/ hari</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to={`/search/${item.id}`}>
            <button>Pilih Mobil</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CarList;
