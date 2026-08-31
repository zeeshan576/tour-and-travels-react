import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import About from './routes/About'
import Service from './routes/Service'
import Contact from './routes/Contact'
import ScrollToTop from './ScrollToTop'

function App() {


  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Service/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes> 
    </>
  )
}

export default App

