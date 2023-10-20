import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import AuthProvider from "./provider/AuthProvider";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AddProduct from "./Pages/AddProduct";
import MyCart from "./Pages/MyCart";
import Register from "./Pages/Register";
import BrandProducts from "./Pages/BrandProducts";
import Update from "./Pages/Update";
import Error from "./Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/my-cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brand/:id",
        element: <BrandProducts></BrandProducts>,
        loader: () => fetch(`http://localhost:5000/brandProducts`),
      },
      {
        path: "/updateProduct/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brandProducts/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
