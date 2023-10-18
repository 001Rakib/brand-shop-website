import { useLoaderData } from "react-router-dom";
import BrandProductCard from "../components/BrandProductCard";

const BrandProducts = () => {
  const brandProducts = useLoaderData();
  console.log(brandProducts);
  return (
    <div>
      <h2>Products</h2>
      <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 mx-auto space-y-5 justify-between">
        {brandProducts.map((prod) => (
          <BrandProductCard key={prod._id} prod={prod}></BrandProductCard>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
