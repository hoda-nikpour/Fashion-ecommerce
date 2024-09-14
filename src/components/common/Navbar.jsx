

import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="fixed top-0 w-full z-[1000]">
      <div className='bg-[#8b6919] text-white py-4 px-2 flex justify-between items-center relative '>
      <div className="flex items-center w-suto">
       
        <ul className="hidden md:flex space-x-4 ">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Blouses">Blouses</Link></li>
          <li><Link to="/Trousers">Trousers</Link></li>
          <li><Link to="/Dresses">Dresses</Link></li>
          <li><Link to="/Sets">Sets</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </div>
      <div className="flex md:flex-1 items-center  justify-between md:justify-end w-full">
        <div className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
          <div className="hamburger-icon">☰</div>
        </div>
        <Link to="/cart" className="relative flex justify-end ">
          <FaShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">{cartItems.length}</span>
         
         )}
        </Link>
      </div>
        {isOpen && (
         <div className="absolute ml-5 w-full bg-transparent font-serif font-extralight text-sm space-x-1 text-white flex items-center text-xs py-4 md:hidden">
         <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
         <Link to="/Blouses" onClick={() => setIsOpen(false)}>Blouses</Link>
         <Link to="/Trousers" onClick={() => setIsOpen(false)}>Trousers</Link>
         <Link to="/Dresses" onClick={() => setIsOpen(false)}>Dresses</Link>
         <Link to="/Sets" onClick={() => setIsOpen(false)}>Sets</Link>
       <Link to="/about-us" onClick={() => setIsOpen(false)}>AboutUs</Link>
       <Link to="/contact-us" onClick={() => setIsOpen(false)}>ContactUs</Link>
       </div>
   
      )
   }</div>
    </nav>
  );
};

export default Navbar;
