const BrandProductCard = ({ prod }) => {
  const { name, brand_name, image, price, rating, type } = prod;
  console.log(name);
  return (
    <>
      {prod ? (
        <div className="max-w-screen-xl mx-auto">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {name}
                </h5>
                <h5>{brand_name}</h5>
              </a>
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
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Details
                </a>
                <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium">
                  Update
                </button>
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
