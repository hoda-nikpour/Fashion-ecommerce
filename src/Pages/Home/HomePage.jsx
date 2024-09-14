
import React from "react";
import Banner from "../../components/Banner/Banner";
import CategoryGrid from "../../components/Category/CategoryGrid";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="text-center my-8">
        <h1 className="md:text-3xl text-xl font-serif text-gold">Based on your previous clothing preferences, we used the color wheel to handpick some selections for you. Explore more sets tailored to your style</h1>
        <Link to="/Sets">
          <button className=" bg-gold md:text-2xl rounded-md mt-8 text-white px-4 py-2  hover:bg-gold/80 tranition-all duration-300 ">
            Ready Sets
          </button>
        </Link>
      </div>
      <CategoryGrid />      
    </div> 
  );
};

export default HomePage;
