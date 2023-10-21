import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const product = useLoaderData();
  const { name, brand_name, image, price, rating, type, description, _id } =
    product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand_name = form.brandName.value;
    const image = form.image.value;
    const type = form.type.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const price = form.price.value;

    const updatedProduct = {
      name,
      brand_name,
      image,
      type,
      description,
      rating,
      price,
    };

    console.log(JSON.stringify(updatedProduct));
    // send products to database
    fetch(
      `https://a-10brand-shop-server-q4xirs9sv-rakib-hasans-projects-a466253b.vercel.app/brandProducts/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Product Updated successfully");
        }
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto text-center bg-blue-400 py-10 my-5">
      <h2 className="text-3xl font-semibold my-10">Update: {name} </h2>
      <form onSubmit={handleUpdateProduct}>
        <div>
          <input
            className="bg-slate-100 rounded-md border px-4 py-2 mt-4 mr-8"
            type="text"
            name="name"
            defaultValue={name}
            placeholder="Product Name"
          />
          <input
            className="bg-slate-100 rounded-md border px-4 py-2 mt-4 mr-8"
            type="text"
            name="brandName"
            defaultValue={brand_name}
            placeholder="Brand Name"
          />
        </div>
        <div>
          <input
            className="bg-slate-100 rounded-md border px-4 py-2 mt-4 mr-8"
            type="text"
            name="image"
            defaultValue={image}
            placeholder="Image Url"
          />
          <input
            className="bg-slate-100 rounded-md border px-4 py-2 mt-4 mr-8"
            type="text"
            name="type"
            defaultValue={type}
            placeholder="Type"
          />
        </div>
        <div>
          <input
            className="bg-slate-100 rounded-md border px-4 py-2 mt-4 mr-8"
            type="number"
            name="price"
            defaultValue={price}
            placeholder="Price"
          />
          <input
            className="bg-slate-100 rounded-md border px-4 py-2 mt-4 mr-8"
            type="text"
            name="description"
            defaultValue={description}
            placeholder="Short Description"
          />
        </div>
        <div className="">
          <input
            className="bg-slate-100 rounded-md border px-4 py-2 mt-4 mr-8"
            type="number"
            defaultValue={rating}
            name="rating"
            placeholder="Rating"
          />
        </div>
        <input
          className="btn btn-secondary mt-8"
          type="submit"
          value="Update Product"
        />
      </form>
    </div>
  );
};

export default Update;
