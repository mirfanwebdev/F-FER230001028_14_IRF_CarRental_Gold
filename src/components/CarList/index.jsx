import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function CarList() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        handleGetCar()
    }, [])

    const handleGetCar = () => {}
        axios
        .get('https://api-car-rental.binaracademy.org/customer/v2/car')
        .then((res) => {
            const carData = res.data.cars
            setCars(carData)
        })
        .catch((err) => console.log(err))

    return (
        <div>
            {cars.map((item) => (
                <div key={item.id}>
                    <img src={item.image} />
                    <p>{item.name}</p>
                    <h2>Rp. {item.price}/ hari</h2>
                    <button>Pilih Mobil</button>
                </div>
            ))}
        </div>
    )
}

export default CarList;