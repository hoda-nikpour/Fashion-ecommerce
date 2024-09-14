import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/products?category=${category}`)
      .then(response => setProducts(response.data));
  }, [category]);

  return (
    
    <div>
       <div className="relative bg-cover bg-center h-64 bg-[url('https://i.postimg.cc/K8nZD9J9/slide.jpg')]"></div>
      <h1 className="text-2xl my-4">{category}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-2">
        {products.map(product => (
          <div key={product.id} className="border w-full rounded-md group relative cursor-pointer shadow md:hover:scale-105 transition-all duration-300">
            <img src={product.image} alt={product.name} className="w-full object-cover rounded-t-md group-hover:opacity-0  opacity-100 transition-all duration-1000" />
            <img src={product.hoverImage} alt={product.name} className="w-full  object-cover rounded-t-md group-hover:opacity-100 absolute inset-0 opacity-0 transition-all duration-1000" />
            <h2 className="text-xl my-1 text-gray-700 px-4">{product.name}</h2>
            <p className="md:text-lg font-medium md:mt-2 px-4">${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`}>
            <div className='flex md:justify-start  justify-center '>   
                <button className="md:m-4 mt-5 mb-4 bg-gold rounded-md hover:bg-gold/80 text-white px-4 py-2 tranition-all text-sm md:text-base duration-300 ">More Details</button></div>
         
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
