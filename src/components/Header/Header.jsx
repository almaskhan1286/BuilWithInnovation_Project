import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { logout } from "../UserAuthentication/userAuth";

const Header = ({ handleSearch, cartItems }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const goToPage = (path) => {
    navigate(path);
  };

  const onChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    handleSearch(value);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const totalCartItems =
    cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <header className="bg-gray-800 text-white py-2 px-1 md:py-1">
      <div className="container mx-auto flex justify-between items-center">
        <span
          className="cursor-pointer w-14 h-14 md:w-16 md:h-16 "
          onClick={() => goToPage("/")}
        >
          <img src="./src/assets/p-logo.png" alt="Buil With Innovation" />
        </span>

        <div className="relative flex items-center justify-center flex-grow">
          <input
            type="text"
            value={searchText}
            placeholder="Search"
            onChange={onChange}
            className="w-auto md:w-2/3 px-4 py-2 rounded-md border-2 border-gray-600 text-black focus:outline-none focus:border-gray-400 pl-2"
          />
        </div>

        <span
          className="relative cursor-pointer mr-4"
          onClick={() => goToPage("/cart")}
        >
          <FaOpencart className="h-8 w-8" />

          <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-semibold">
            {totalCartItems}
          </div>
        </span>

        <span className="cursor-pointer" onClick={handleLogout}>
          <RiLogoutCircleRLine className="h-8 w-8" />
        </span>
      </div>
    </header>
  );
};

export default Header;
