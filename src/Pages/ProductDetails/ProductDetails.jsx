

import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../../contexts/CartContext';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
  
    const fetchProduct = async () => {
      try {
        setLoading(true); 
        const response = await axios.get(`http://localhost:5000/products/${productId}`);
        setProduct(response.data); 
      } catch (err) {
        setError(err); 
      } finally {
        setLoading(false); 
      }
    };

    fetchProduct(); 
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <div className="p-4 md:flex justify-between w-full items-center">
      <div className='w-full flex justify-center'>
        <img src={product.image} alt={product.name} className="shadow rounded-md h-96  md:mt-14 object-cover" /></div>

      <div className='w-2/3 flex flex-col items-start'>
        <h1 className="md:text-2xl text-xl text-gray-700 mt-4">{product.name}</h1>
        <p className="mt-2 font-semibold text-lg">${product.price.toFixed(2)}</p>
        <p className="mt-2">{product.description}</p>
        <div className='flex md:flex-col flex-row w-full'>  <div className="mt-4">
          <label className="block">Size</label>
          <select
            className="w-28 p-2.5 mt-2 font-normal rounded-md border border-gold text-black text-sm focus:ring-gold focus:border-gold"
            onChange={(e) => setSelectedSize(e.target.value)}
            value={selectedSize}
          >
            <option value="" disabled>Sizes</option>
            {product.size.map(size => (
              <option className='font-medium text-gold' key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
          <div className="mt-4 ml-4 md:ml-0">
            <label className="block">Color</label>
            <select
              className="w-28 p-2.5 mt-2 font-normal rounded-md border border-gold text-black text-sm focus:ring-gold focus:border-gold"
              onChange={(e) => setSelectedColor(e.target.value)}
              value={selectedColor}
            >
              <option value="" disabled>Colors</option>
              {product.color.map(color => (
                <option className='font-medium text-gold' key={color} value={color}>{color}</option>
              ))}
            </select>
          </div></div>

        <button
          className="mt-4 bg-gold rounded-md hover:bg-gold/80 text-white px-4 py-2 tranition-all duration-300"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
