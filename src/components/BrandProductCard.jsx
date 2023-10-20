import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BrandProductCard = ({ prod }) => {
  const { name, brand_name, image, price, rating, type, _id } = prod;
  return (
    <>
      {prod ? (
        <div className="max-w-screen-xl mx-auto">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="p-8 rounded-t-lg" src={image} alt="product image" />
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h5>
              <h5>{brand_name}</h5>
              <div className="flex items-center mt-2.5 mb-5">
                <p>{type}</p>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {rating}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${price}
                </span>
                <Link to={`/details/${_id}`}>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium">
                    Details
                  </button>
                </Link>
                <Link to={`/updateProduct/${_id}`}>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-3xl font-bold text-center">
            No Products Available
          </h2>
        </div>
      )}
    </>
  );
};

export default BrandProductCard;
BrandProductCard.propTypes = {
  prod: PropTypes.object,
};
