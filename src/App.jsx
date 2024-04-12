import React, { useContext } from 'react';
import Home from "./component/Home";
import CartPage from "./component/Cart";
import { FaCartShopping } from 'react-icons/fa6';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { cartContext } from './contextApi/Context';

function App() {
  const {cart} = useContext(cartContext)
  return (
    <Router>
      <div>
        <nav className="flex items-center justify-between p-5 bg-black sm:flex-row md:flex-row lg:flex-row">
          <h2 className="text-teal-600 uppercase text-3xl font-bold text-center sm:text-2xl md:text-3xl lg:text-4xl"> Cart App</h2>
          <div className='flex items-center justify-between sm:flex-row md:flex-row lg:flex-row'>
            <Link className="text-white mx-20 font-bold text-3xl sm:text-2xl md:text-3xl lg:text-4xl" to="/">Home</Link>
            <Link to="/cart">
              <div className='flex items-center justify-between text-white text-3xl mx-20 font-bold relative sm:text-2xl md:text-3xl lg:text-3xl'> 
                <FaCartShopping />  
                <span className='text-base p-1 rounded-full absolute top-[-20px] right-[-10px] bg-teal-700'>{cart.length}</span>
              </div>
            </Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
