import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import BookingForm from './components/BookingForm.jsx'
import Admin from './components/Admin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/booking' element={<BookingForm/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
