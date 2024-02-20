import React from "react";

const Products = ({ products, addToCart }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 p-6 rounded-lg flex flex-col justify-between transition duration-300 ease-in-out transform hover:shadow-lg"
            >
              <div className="flex justify-center">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col items-center mt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600">${product.price}</p>
                <button
                  className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
