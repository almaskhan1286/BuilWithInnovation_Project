import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import FilterProducts from "./FilterProducts";
import Header from "../Header/Header";
import CartProducts from "../CartProducts/CartProducts";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const onPriceRangeChange = (price) => {
    if (price === "") {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.price <= price
      );
      setFilteredProducts(newFilteredProducts);
    }
  };

  const handleSearch = (query) => {
    const newFilteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(newFilteredProducts);
  };

  const addToCart = (product) => {
    console.log("Adding to Cart:", product);
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  return (
    <>
      <Header handleSearch={handleSearch} cartItems={cart} />
      <div className="flex w-1/2 mt-10 m-auto items-center justify-center">
        <div className="flex flex-1 mx-4 items-center">
          <FilterProducts onPriceRangeChange={onPriceRangeChange} />
        </div>
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Products products={filteredProducts} addToCart={addToCart} />
            }
          />
          <Route path="/cart" element={<CartProducts cartItems={cart} />} />
        </Routes>
      </div>
    </>
  );
};

export default Home;
