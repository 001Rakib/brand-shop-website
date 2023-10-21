import { useLoaderData, useParams } from "react-router-dom";
import BrandProductCard from "../components/BrandProductCard";
import Slider from "../components/Slider";

const BrandProducts = () => {
  const brandProducts = useLoaderData();
  const { id } = useParams();
  const clickedBrand = brandProducts.filter(
    (products) => products.brand_name == id
  );
  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2  space-y-5 justify-between my-6">
        {clickedBrand.map((prod) => (
          <BrandProductCard key={prod._id} prod={prod}></BrandProductCard>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
