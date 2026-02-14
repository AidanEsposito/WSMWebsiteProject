import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import ReceivingService from './ReceivingService'
import FacilityFeatures from './FacilityFeatures'
import StorageFAQ from './StorageFAQ'
import Contact from './Contact'
import './Home.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/facility-features' element={<FacilityFeatures />} />
      <Route path='/receiving-service' element={<ReceivingService />} />
      <Route path='/storage-faq' element={<StorageFAQ />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App