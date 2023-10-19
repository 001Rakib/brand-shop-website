const AddProduct = () => {
  return (
    <div className="max-w-screen-xl mx-auto text-center bg-blue-400 py-10">
      <h2 className="text-3xl font-semibold my-10">
        Add Products To Your Brand
      </h2>
      <form className="">
        <div>
          <input
            className="bg-slate-100 rounded-md border px-4 py-2 mt-4 mr-8"
            type="text"
            name="name"
            placeholder="Product Name"
          />
          <input
            className="bg-slate-100 rounded-md border px-4 py-2 mt-4 mr-8"
            type="text"
            name="brandName"
            placeholder="Brand Name"
          />
        </div>
        <div>
          <input
            className="bg-slate-100 rounded-md border px-4 py-2 mt-4 mr-8"
            type="text"
            name="image"
            placeholder="Image Url"
          />
          <input
            className="bg-slate-100 rounded-md border px-4 py-2 mt-4 mr-8"
            type="text"
            name="type"
            placeholder="Type"
          />
        </div>
        <div>
          <input
            className="bg-slate-100 rounded-md border px-4 py-2 mt-4 mr-8"
            type="text"
            name="price"
            placeholder="Price"
          />
          <input
            className="bg-slate-100 rounded-md border px-4 py-2 mt-4 mr-8"
            type="text"
            name="description"
            placeholder="Short Description"
          />
        </div>
        <div className="">
          <input
            className="bg-slate-100 rounded-md border px-4 py-2 mt-4 mr-8"
            type="text"
            name="rating"
            placeholder="Rating"
          />
        </div>
        <input
          className="btn btn-secondary mt-8"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
