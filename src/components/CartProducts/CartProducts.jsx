import React from "react";

const CartProducts = ({ cartItems }) => {
  // console.log("CART ITEMs:> ",cartItems)      //// Issue to be solved........ cartItems are undefined

  if (!cartItems) {
    return <p>No items in the cart.</p>;
  }

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-lg font-semibold">
                    Total: ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
            <p className="text-lg font-semibold mt-4">Total: ${totalAmount}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CartProducts;
