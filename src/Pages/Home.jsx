import { useLoaderData } from "react-router-dom";
import BrandCard from "../components/BrandCard";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import TopSold from "../components/TopSold";
import LatestCustomer from "../components/LatestCustomer";

const Home = () => {
  const brands = useLoaderData();
  return (
    <>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto my-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand}></BrandCard>
          ))}
        </div>
      </div>
      <TopSold></TopSold>
      <LatestCustomer></LatestCustomer>
      <Footer></Footer>
    </>
  );
};

export default Home;
