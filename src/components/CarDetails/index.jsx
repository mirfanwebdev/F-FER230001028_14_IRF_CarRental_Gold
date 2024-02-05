import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

function CarDetails() {
  const [detail, setDetail] = useState({});
  const param = useParams();
  const includeList = [
    "Apa saja yang termasuk dalam paket misal durasi max 12 jam",
    "Sudah termasuk bensin selama 12 jam",
    "Sudah termasuk Tiket Wisata",
    "Sudah termasuk pajak",
  ];
  const excludeList = [
    "Tidak termasuk biaya makan sopir Rp 75.000/hari",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan",
  ];
  const termsList = [
    "Tidak termasuk biaya makan sopir Rp 75.000/hari",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan",
    "Tidak termasuk biaya makan sopir Rp 75.000/hari",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan",
    "Tidak termasuk biaya makan sopir Rp 75.000/hari",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan",
  ];

  const NOTFOUND =
    "https://placehold.jp/30/c9c9c9/ffffff/300x150.png?text=image+notfound";

  const formatedPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  useEffect(() => {
    handleDetail();
  }, []);

  const handleDetail = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)
      .then((res) => {
        // console.log(res.data);
        setDetail(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleCategory = (type) => {
    let capacity;
    if (type == "small") {
      capacity = "2-4 orang";
    } else if (type == "medium") {
      capacity = "4-6 orang";
    } else if (type == "large") {
      capacity = "6-8 orang";
    }
    return capacity;
  };

  return (
    <div className="detail-card">
      <div className="package-detail">
        <p>Tentang Paket</p>
        <div className="detail-list">
          <p>Include</p>
          {includeList.map((item) => (
            <li key={item.id}>{item}</li>
          ))}
        </div>
        <div className="detail-list">
          <p>Exclude</p>
          {excludeList.map((item) => (
            <li key={item.id}>{item}</li>
          ))}
        </div>
        <div className="detail-list">
          <p>Refund, Reschedule, Overtime</p>
          {termsList.map((item) => (
            <li key={item.id}>{item}</li>
          ))}
        </div>
      </div>
      <div className="container-car-detail">
        {detail.image ? (
          <img src={detail.image} alt={detail.name} />
        ) : (
          <img src={NOTFOUND} alt={detail.name} />
        )}
        <img src={detail.image} alt={detail.name} />
        <p>{detail.name}</p>
        <span>
          <i class="bi bi-people"></i> {handleCategory(detail.category)}
        </span>
        <div>
          <p>Total:</p>
          <p>{formatedPrice(detail.price)}</p>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
