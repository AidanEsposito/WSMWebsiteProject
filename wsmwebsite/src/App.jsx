import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import ReceivingService from './ReceivingService'
import FacilityFeatures from './FacilityFeatures'
import './Home.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/facility-features' element={<FacilityFeatures />} />
      <Route path='/receiving-service' element={<ReceivingService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App