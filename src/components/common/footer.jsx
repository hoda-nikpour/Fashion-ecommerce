import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="grid grid-cols-1 w-full footer footer-center py-5 mt-20">
      <footer className="footer p-10 text-base-content border-t border-[rgb(159,159,159)]">
        <nav>
          
          <ul className="hidden md:flex space-x-4 ">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Blouses">Blouses</Link></li>
          <li><Link to="/Trousers">Trousers</Link></li>
          <li><Link to="/Dresses">Dresses</Link></li>
          <li><Link to="/Sets">Sets</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
        </nav>
        <nav>
         
          <fieldset className="form-control md:w-80">
            
            <div className="join flex ">
              <input
                type="text"
                placeholder="username@site.com"
                className="focus:ring-0 text-sm mt-6 border-b border-gold px-3 focus:invalid:border-none focus:invalid:ring-0 w-2/3"
              />
              <button className="bg-[#B88E2F] text-sm md:text-base hover:bg-[#B88E2F]/80 tranition-all duration-300 text-white font-bold py-2 px-4 mt-6 rounded-r-md join-item" >
                Subscribe
              </button>

            </div>
          </fieldset>
        </nav>
      </footer>
      <footer className="md:w-9/12 footer px-10 py-4 border-t text-base-content border-base-300">
        <aside className="items-center grid-flow-col text-sm">
          <p>2024 Hoda Nikpour. All rights reverved</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
