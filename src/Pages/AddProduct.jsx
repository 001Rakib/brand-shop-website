import toast from "react-hot-toast";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand_name = form.brandName.value;
    const image = form.image.value;
    const type = form.type.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newProduct = { name, brand_name, image, type, description, rating };

    console.log(JSON.stringify(newProduct));
    // send products to database
    fetch(
      "https://a-10brand-shop-server-q4xirs9sv-rakib-hasans-projects-a466253b.vercel.app/brandProducts",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product added successfully");
        }
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto text-center bg-blue-400 py-10 my-5">
      <h2 className="text-3xl font-semibold my-10">
        Add Products To Your Brand
      </h2>
      <form onSubmit={handleAddProduct}>
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
            type="number"
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
            type="number"
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
