import { useState, useEffect } from "react";
import CarList from "../../components/CarList";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import SearchForm from "../../components/SearchForm";
import axios from "axios";

function SearchCarPage() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [isRented, setIsRented] = useState(false)
    const [cars, setCars] = useState([])
    const [isHidden] = useState(true)

    useEffect(() => {
        handleGetCar(name, category, isRented)
    }, [])

    const handleGetCar = (
        dataName = '', 
        dataCategory = '', 
        dataStatus = '',
        dataMinPrice = '',
        dataMaxPrice = '',
    ) => {
        axios
            .get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${dataName}&category=${dataCategory}&isRented=${dataStatus}&page=1&pageSize=10&minPrice=${dataMinPrice}&maxPrice=${dataMaxPrice}`)
            // 
            .then((res) => {
                const carData = res.data.cars
                setCars(carData)
                console.log(carData)
                console.log(dataMinPrice, dataMaxPrice)
            })
            .catch((err) => console.log(err))
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeCategory = (e) => {
        setCategory(e.target.value)

    }

    const handleChangeStatus = (e) => {
        setIsRented(e.target.value)
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value);
    }

    const convertPrice = () => {
        if (price == 'low') {
            setMinPrice(0)
            setMaxPrice(400000)
        } else if (price == 'medium') {
            setMinPrice(400000)
            setMaxPrice(600000)
        } else if (price == 'high') {
            setMinPrice(600000)
            setMaxPrice('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        convertPrice();
        handleGetCar(name, category, isRented, minPrice, maxPrice)
        // console.log(name)
    }

    return (
        <>
         <Hero isHidden={isHidden} /> 
         <SearchForm
            name={name}
            category={category}
            price={price}
            isRented={isRented}
            handleChangeName={handleChangeName}
            handleChangeCategory={handleChangeCategory}
            handleChangeStatus={handleChangeStatus}
            handleSubmit={handleSubmit}
            handleChangePrice={handleChangePrice}
         /> 
         <CarList
            cars={cars}
         /> 
         <Footer/>
        </>
    )
}

export default SearchCarPage;