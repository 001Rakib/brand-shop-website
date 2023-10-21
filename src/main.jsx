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
import Details from "./Pages/Details";
import PrivateRoute from "./Pages/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://a-10brand-shop-server-q4xirs9sv-rakib-hasans-projects-a466253b.vercel.app/cartProduct"
          ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brand/:id",
        element: <BrandProducts></BrandProducts>,
        loader: () =>
          fetch(
            `https://a-10brand-shop-server-q4xirs9sv-rakib-hasans-projects-a466253b.vercel.app/brandProducts`
          ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://a-10brand-shop-server-q4xirs9sv-rakib-hasans-projects-a466253b.vercel.app/brandProducts/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://a-10brand-shop-server-q4xirs9sv-rakib-hasans-projects-a466253b.vercel.app/brandProducts/${params.id}`
          ),
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
