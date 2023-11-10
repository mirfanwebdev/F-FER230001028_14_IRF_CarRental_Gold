import CarList from "../../components/CarList";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import SearchForm from "../../components/SearchForm";
import './style.css'

function SearchCarPage() {
    return (
        <>
         <Hero/> 
         <SearchForm/> 
         <CarList/> 
         <Footer/>
        </>
    )
}

export default SearchCarPage;