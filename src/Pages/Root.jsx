import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Toaster></Toaster>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
