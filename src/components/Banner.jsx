const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/shadow-tropical-palm-leaves-pastel-pink-background-minimal-nature-summer-concept_629685-7488.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Top Brands Only For You</h1>
            <p className="mb-5">
              In our website you can find 6 top brands from the world. You can
              visit their products, check details and if you like any product
              you can purchase directly without any hassle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
