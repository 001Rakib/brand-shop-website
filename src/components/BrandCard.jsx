import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
          <img src={brand.image} alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {brand.brand}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
BrandCard.propTypes = {
  brand: PropTypes.object,
};
