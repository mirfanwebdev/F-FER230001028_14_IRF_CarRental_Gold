import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import CarList from "../../components/CarList";
import Hero from "../../components/Hero";
import SearchForm from "../../components/SearchForm";
import axios from "axios";
import "./style.css";

function Pagination({ handleNext, handlePrev }) {
  return (
    <div className="pagination">
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

function SearchCarPage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isRented, setIsRented] = useState(false);
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isHidden] = useState(true);

  useEffect(() => {
    handleGetCar(name, category, isRented);
  }, []);

  const handleGetCar = (
    dataName = "",
    dataCategory = "",
    dataStatus = "",
    dataMinPrice = "",
    dataMaxPrice = "",
    page = 1
  ) => {
    axios
      .get(
        `https://api-car-rental.binaracademy.org/customer/v2/car?name=${dataName}&category=${dataCategory}&isRented=${dataStatus}&page=${page}&pageSize=3&minPrice=${dataMinPrice}&maxPrice=${dataMaxPrice}`
      )
      //
      .then((res) => {
        const carData = res.data.cars;
        setCars(carData);
        // console.log(carData)
        // console.log(dataMinPrice, dataMaxPrice)
      })
      .catch((err) => console.log(err));
  };

  const handleNext = () => {
    setPage(page + 1);
    handleGetCar(name, category, isRented, minPrice, maxPrice, page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
    handleGetCar(name, category, isRented, minPrice, maxPrice, page - 1);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setIsRented(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const convertPrice = () => {
    if (price == "low") {
      setMinPrice(0);
      setMaxPrice(400000);
    } else if (price == "medium") {
      setMinPrice(400000);
      setMaxPrice(600000);
    } else if (price == "high") {
      setMinPrice(600000);
      setMaxPrice("");
    }
  };

  const handleSubmit = () => {
    convertPrice();
    handleGetCar(name, category, isRented, minPrice, maxPrice);
    // console.log(name)
  };

  const convertButton = () => {
    setIsSubmit(!isSubmit);
  };

  const handleIsSubmit = (e) => {
    e.preventDefault();
    convertButton();
    handleSubmit();
    // console.log(isSubmit)
  };

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
        handleChangePrice={handleChangePrice}
        isSubmit={isSubmit}
        handleIsSubmit={handleIsSubmit}
      />
      <CarList cars={cars} />
      <Pagination handleNext={handleNext} handlePrev={handlePrev} />
      <Footer />
    </>
  );
}

export default SearchCarPage;
