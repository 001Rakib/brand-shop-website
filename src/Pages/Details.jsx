import { Rating } from "@material-tailwind/react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const productDetails = useLoaderData();
  const { name, brand_name, image, price, rating, type, description } =
    productDetails;

  const ratingNum = parseInt(rating);

  const handleAddToCart = () => {
    fetch(
      "https://a-10brand-shop-server-qkkeowvqn-rakib-hasans-projects-a466253b.vercel.app/cartProduct",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Added to Cart Successfully");
        }
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto grid justify-center my-10 p-2 md:p-0">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img src={image} alt="image" className="object-cover w-full h-full" />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            {brand_name}
          </h6>
          <h6 className="block mb-2 font-sans text-xs antialiased  tracking-normal text-pink-500 uppercase">
            Type: {type}
          </h6>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {description}
          </p>
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            Price: ${price}
          </h6>
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            Rating: <Rating value={ratingNum}></Rating>
          </h6>

          <button
            onClick={handleAddToCart}
            className="flex items-center bg-blue-200 gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
