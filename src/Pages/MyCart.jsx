import { useLoaderData } from "react-router-dom";
import CartProducts from "../components/CartProducts";
import { useState } from "react";

const MyCart = () => {
  const cartProducts = useLoaderData();
  const [cartProduct, setCartProduct] = useState(cartProducts);
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-semibold text-center my-10">Cart Product</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartProduct.map((product) => (
          <CartProducts
            key={product._id}
            product={product}
            setCartProduct={setCartProduct}
            cartProduct={cartProduct}
          ></CartProducts>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
