import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Search = ({ products }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.trim() !== "") {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredProducts);
    } else {
      setSearchResults([]);
    }
  }, [query, products]);

  const onClose = () => {
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center">
          <input
            autoFocus
            type="text"
            placeholder="Search for products"
            value={query}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <MdClose className="text-gray-500 cursor-pointer" onClick={onClose} />
        </div>
        <div className="mt-4">
          {searchResults.length === 0 && (
            <div className="text-gray-500 text-center">No results found.</div>
          )}
          <div className="mt-4">
            {searchResults.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="flex items-center py-2 border-b border-gray-200 cursor-pointer"
              >
                <div className="w-16 h-16 mr-4 overflow-hidden"></div>
                <div>
                  <div className="text-gray-800 font-semibold">
                    {item.title}
                  </div>
                  <div className="text-gray-500">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
