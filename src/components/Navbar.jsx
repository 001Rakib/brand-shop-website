import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged Out Successfully"))
      .catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/add-product"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/my-cart"}>My Cart</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-slate-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case lg:text-xl">Brand Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="mr-2">{user ? <p>{user.displayName}</p> : ""}</div>
          <div className="avatar">
            <div className="w-10 rounded-full mr-3">
              {user ? (
                <img src={user.photoURL}></img>
              ) : (
                <img src="https://i.ibb.co/RYWNQjF/user.png"></img>
              )}
            </div>
          </div>
          {user ? (
            <Link onClick={handleLogout} className="btn">
              Logout
            </Link>
          ) : (
            <Link to={"/login"} className="btn">
              login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
