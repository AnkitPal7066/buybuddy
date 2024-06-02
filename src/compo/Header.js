import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from './ContextApi';

export default function Header() {
  const { query, setQuery } = useContext(Cart);

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleLogo = () => {
    setQuery("");
  };

  return (
    <div className="">
      <header className="bg-gray-800 md:px-5 text-white z-10 w-full fixed py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <Link onClick={handleLogo} to="/buybuddy" className="flex items-center justify-center w-full md:w-auto">
            <img
              src="https://th.bing.com/th/id/R.0cb88b323268226c8b6b05dfaf98e6c1?rik=RIvs2MsUJX02eA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fshopping-transparent%2fshopping-transparent-11.png&ehk=2b0eXeJo%2bkyeDy7Ipo5yxyH2hCnGoYcjAddxJV5mVe0%3d&risl=&pid=ImgRaw&r=0"
              alt="Logo"
              className="h-14 w-auto mr-2"
            />
            <span className="text-lg font-semibold">BuyBuddy</span>
          </Link>

          <div className="sm:px-20 w-fit flex justify-center mt-2 md:mt-0">
            <div className="flex bg-gray-700 md:w-auto justify-center border focus:border-none pr-3 rounded-md">
              <select onChange={handleQuery} defaultValue="" className="bg-gray-700 rounded-md py-2 pl-3">
                <option value="" disabled>Select Categories</option>
                <option value="category/electronics">Electronics</option>
                <option value="category/jewelery">Jewelery</option>
                <option value="category/men's%20clothing">Men's Clothing</option>
                <option value="category/women's%20clothing">Women's Clothing</option>
              </select>
            </div>
          </div>

          <div className="mt-2 md:mt-0">
            <Link to="/cart" className="flex items-center gap-3">
              <img
                src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-royal-brites-poster-foam-board-photo-paper-royal-lace-19.png"
                className="h-8 w-auto"
                alt="Shopping Cart Icon"
              />
              <div className="text-xl">Cart</div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
