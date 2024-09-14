

import React, { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';


const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const { cartItems, updateCartItemQuantity, removeCartItem } = useContext(CartContext);


  const handleBuyNow = () => {
    setShowModal(true);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='px-8'>
      <h1 className="text-2xl">Shopping Cart</h1>
   {cartItems.length > 0 && <div className='md:grid grid-cols-8 text-black rounded py-3 my-5 hidden bg-[#FAF3EA]'>
          
          <p className='flex justify-center '></p>
          <p className='flex justify-center '>Name</p>
          <p className='flex justify-center '>Description</p>
          <p className='flex justify-center '>Price</p>
          
        </div> }
        
        <div className='divide-y  w-full'>
        {cartItems.length === 0 ? (
          <p className='flex justify-center mt-4 text-red-600'>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (<div key={item.id}>
              <div  className="md:grid grid-cols-8 py-4 my-4 hidden">
                <div className='flex justify-start w-full'>
                  <img src={item.image} alt={item.name} className="h-36 w-28 object-cover rounded-md" /></div>


                <h2 className="flex justify-center items-center">{item.name}</h2>
                 <p className="flex justify-center items-center">{item.description}</p>
                <p className="flex justify-center items-center">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-4 justify-center">
                  <button className="bg-gold rounded-full flex justify-center items-center text-white w-6 h-6" onClick={() => updateCartItemQuantity(item, item.quantity - 1)}>
                    <div className='mb-1'> -</div>
                  </button>
                  <span className="mx-2 bg-gold rounded-xl text-white w-20 text-center">{item.quantity}</span>
                  <button className="bg-gold rounded-full flex items-center justify-center text-white w-6 h-6" onClick={() => updateCartItemQuantity(item, item.quantity + 1)}>
                    <div className='mb-1'> +</div>
                  </button>

                </div>
                <button className="flex justify-center items-center hover:scale-110 transition-all duration-300" onClick={() => removeCartItem(item)}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                  <path d="M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z"></path>
                </svg></button>
              </div>



            </div>))}
            {cartItems.map((item) => (<div key={item.id} >
              <div className="grid md:grid-cols-3 grid-cols-2 py-4 my-4 md:hidden ">
                <div className='flex justify-start w-4/5'>
                  <img src={item.image} alt={item.name} className="h-48 w-40 object-cover rounded-md" /></div>

                <div className='md:col-span-2'>
                  <h2 className="text-lg ">{item.name}</h2>
                  <div className='flex'> <div className='flex items-center'>
                    <p className='text-gray-700 text-sm'>Size:</p>
                    <p className='px-1 font-medium'> {item.selectedSize}s</p></div>
                  <div className='flex items-center ml-2'>
                    <p className='text-gray-700 text-sm'>Color:</p>
                    <p className='px-1 font-medium'>{item.selectedColor}yellow</p> </div></div>
                 
                  <p className='text-gray-700 text-sm'>{item.description}</p>
                  <p className="text-lg">${item.price.toFixed(2)}</p>
                  <div className="flex items-center my-2">
                    <button className="bg-gold rounded-full flex justify-center items-center text-white w-6 h-6" onClick={() => updateCartItemQuantity(item, item.quantity - 1)}>
                      <div className='mb-1'> -</div>
                    </button>
                    <span className="mx-2 bg-gold rounded-xl text-white w-20 text-center">{item.quantity}</span>
                    <button className="bg-gold rounded-full flex items-center justify-center text-white w-6 h-6" onClick={() => updateCartItemQuantity(item, item.quantity + 1)}>
                      <div className='mb-1'> +</div>
                    </button>
                
                  </div>
                      <button className=" text-gold mt-2" onClick={() => removeCartItem(item)}> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                  <path d="M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z"></path>
                </svg></button>
                </div>
              </div>
            </div>))}

          </>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className='w-full flex md:justify-end justify-center mt-10 '>
        <div className='bg-[#FAF3EA] md:w-1/5 w-full rounded p-4 shadow'>
          <p className="text-xl mt-4">Total: ${totalPrice.toFixed(2)}</p>
          <button className="mt-8 bg-gold rounded-md hover:bg-gold/80 text-white px-4 py-2 tranition-all duration-300" onClick={handleBuyNow}>Check Out</button>
        </div>
        </div>
      )}

      {showModal && (
        <div className="fixed z-[1002] inset-0 bg-black/30 bg-opacity-75 flex items-center justify-center ">
          <div className="bg-white p-4 rounded w-1/4">
            <h2 className="text-xl">Success!</h2>
            <p>Your purchase was successful.</p>
            <button className="mt-4 bg-gold text-white px-4 py-2 rounded hover:bg-gold/80 transition-all duration-300" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
