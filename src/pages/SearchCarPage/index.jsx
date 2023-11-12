import { useState, useEffect } from "react";
import CarList from "../../components/CarList";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import SearchForm from "../../components/SearchForm";
import axios from "axios";

function SearchCarPage() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [isRented, setIsRented] = useState(false)
    const [cars, setCars] = useState([])
    const [isHidden] = useState(true)

    useEffect(() => {
        handleGetCar(name, category, isRented)
    }, [])

    const handleGetCar = (dataName = '', dataCategory = '', dataStatus = '') => {
        axios
            .get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${dataName}&category=${dataCategory}&isRented=${dataStatus}&page=1&pageSize=10`)
            .then((res) => {
                const carData = res.data.cars
                setCars(carData)
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

    const handleSubmit = (e) => {
        e.preventDefault();
        handleGetCar(name, category, isRented)
        console.log(name)
    }

    return (
        <>
         <Hero isHidden={isHidden} /> 
         <SearchForm
            name={name}
            category={category}
            isRented={isRented}
            handleChangeName={handleChangeName}
            handleChangeCategory={handleChangeCategory}
            handleChangeStatus={handleChangeStatus}
            handleSubmit={handleSubmit}
         /> 
         <CarList
            cars={cars}
         /> 
         <Footer/>
        </>
    )
}

export default SearchCarPage;