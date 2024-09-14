

import React from 'react';
import { Link } from 'react-router-dom';
import BlousesImage from '../../assets/img/images/BlousesImage.jpeg';
import TrousersImage from '../../assets/img/images/TrousersImage.jpeg';
import DressesImage from '../../assets/img/images/DressesImage.jpeg';
import AccessoriesImage from '../../assets/img/images/AccessoriesImage.jpeg';
import ImageSlider from '../ImageSlider/ImageSlider';

const categories = [
  { name: 'Blouses', image: BlousesImage },
  { name: 'Trousers', image: TrousersImage },
  { name: 'Dresses', image: DressesImage },
  { name: 'Accessories', image: AccessoriesImage },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      <div className="grid grid-cols-1 items-center justify-center gap-8 md:my-8 mt-8 md:mt-0">
        {categories.map((category, index) =>
          index <= 1 ? (
            <Link key={index} to={`/${category.name}`}>
              <div  className='flex justify-center'>
     <div className="relative group flex items-center justify-center bg-[#FAF3EA] rounded w-2/3">
                <div className="absolute inset-0 bg-transparent rounded-lg flex items-center justify-center z-10">
                  <span className="text-gold group-hover:scale-110 text-3xl transition-all">{category.name}</span>
                </div>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="relative w-36 h-36 object-cover object-center transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              </div>
         
            </Link>
          ) : null
        )}
      </div>

      <div className="flex items-center justify-center">
        <ImageSlider className="w-full" />
      </div>

      <div className="grid grid-cols-1 items-center justify-center gap-8 md:my-8">
        {categories.map((category, index) =>
          index >= 2 ? (
            <Link key={index} to={`/${category.name}`}>
              <div className='flex justify-center'><div className="relative group flex items-center justify-center bg-[#FAF3EA] rounded w-2/3">
                <div className="absolute inset-0 bg-transparent rounded-lg flex items-center justify-center z-10">
                  <span className="text-gold transition-all group-hover:scale-110 text-3xl">{category.name}</span>
                </div>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="relative w-36 h-36 object-cover object-center transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div></div>
              
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default CategoryGrid;
