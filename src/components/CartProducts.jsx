import PropTypes from "prop-types";
const CartProducts = ({ product }) => {
  const { image, name, price, _id } = product;

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(
      `https://a-10brand-shop-server-qkkeowvqn-rakib-hasans-projects-a466253b.vercel.app/cartProduct/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className=" grid justify-center my-5">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <div className="flex justify-between">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Price:${price}
            </p>
            <button
              onClick={() => handleDelete(_id)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
CartProducts.propTypes = {
  product: PropTypes.object,
};
