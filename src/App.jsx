import LandingPage from './pages/LandingPage'
import SearchCarPage from './pages/SearchCarPage'
import DetailsPage from './pages/DetailsPage'
import NotFound from './pages/NotFound'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/search' element={<SearchCarPage/>} />
          <Route path='/search/:id' element={<DetailsPage/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
    // <>
    //   <LandingPage />
    // </>
  )
}

export default App
