import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './components/Cart';
import Contact from './pages/Contact';
import Offers from './components/Offers';
import Orders from './pages/Orders';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Terms from './pages/Terms';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Collection from './pages/Collection';
import Product from './pages/Product';


const App = () => {
  return (
     <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
       <Navbar />  
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/cart' element={<Cart />} />
         <Route path='/collection' element={<Collection />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/product' element={<Product />}/> 
         <Route path='/forgot-password' element={<ForgotPassword />} />
         <Route path='/login' element={<Login />} />
         <Route path='/offers' element={<Offers />} />
         <Route path='/orders' element={<Orders />} />
         <Route path='/privacy-policy' element={<PrivacyPolicy />} />
         <Route path='/profile' element={<Profile />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='/terms' element={<Terms />} />
       </Routes>
        <Footer/>
     </div>
  )
}

export default App

