import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ReceivingService from './pages/ReceivingService'
import FacilityFeatures from './pages/FacilityFeatures'
import StorageFAQ from './pages/StorageFAQ'
import Contact from './pages/Contact'
import PaymentPortal from './pages/PaymentPortal'
import Blog from './pages/Blog'
import Partners from './pages/Partners'
import './design/Home.css'

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
        <Route path='/payment-portal' element={<PaymentPortal />} />
        <Route path='*' element={<Blog />} />
        <Route path='/partners' element={<Partners />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
