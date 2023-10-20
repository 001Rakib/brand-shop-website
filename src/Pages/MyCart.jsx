import { useLoaderData } from "react-router-dom";
import CartProducts from "../components/CartProducts";

const MyCart = () => {
  const cartProducts = useLoaderData();
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-semibold text-center my-10">Cart Product</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cartProducts.map((product) => (
          <CartProducts key={product._id} product={product}></CartProducts>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
