import React, { useState } from "react";
import logo from "../../Assets/mwlogo.png";
import shopping_cart from "../../Assets/cart.png";
import user from "../../Assets/account.png";
import logout from "../../Assets/logout.png";
import avata from "../../Assets/panda.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Notification } from "../../utils/helper";
export const Navbar = () => {
  const [menu, setMenu] = useState("");
  const { cart } = useSelector((store) => store.cart);
  console.log(cart);
  return (
    <div className="flex justify-around p-4 shadow-sm  bg-black sticky top-0 z-50">
      <Link to="/">
        <div className="flex justify-center gap-2 items-center cursor-pointer">
          <img className="w-12 h-12" src={logo} alt="" />
          <p className="text-white text-4xl font-bold">MEN WEAR</p>
        </div>
      </Link>
      <ul className="flex items-center list-none text-white gap-10 text-xl font-semibold ">
        <li
          onClick={() => {
            setMenu("shop");
          }}
          className="flex flex-col gap-1 items-center justify-center cursor-pointer"
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" && (
            <hr className="border-none w-4/5 h-1 rounded bg-red-500" />
          )}
        </li>
        <li
          onClick={() => {
            setMenu("Shirt");
          }}
          className="flex flex-col gap-1 items-center justify-center cursor-pointer"
        >
          <Link style={{ textDecoration: "none" }} to="/shirt">
            Shirt
          </Link>
          {menu === "Shirt" && (
            <hr className="border-none w-4/5 h-1 rounded bg-red-500" />
          )}
        </li>
        <li
          onClick={() => {
            setMenu("Trouser");
          }}
          className="flex flex-col gap-1 items-center justify-center cursor-pointer"
        >
          <Link style={{ textDecoration: "none" }} to="/trouser">
            Trouser
          </Link>
          {menu === "Trouser" && (
            <hr className="border-none w-4/5 h-1 rounded bg-red-500" />
          )}
        </li>
        <li
          onClick={() => {
            setMenu("About Us");
          }}
          className="flex flex-col gap-1 items-center justify-center cursor-pointer"
        >
          <Link style={{ textDecoration: "none" }} to="/aboutus">
          About Us
          </Link>
          {menu === "About Us" && (
            <hr className="border-none w-4/5 h-1 rounded bg-red-500" />
          )}
        </li>
        <li
          onClick={() => {
            setMenu("Support");
          }}
          className="flex flex-col gap-1 items-center justify-center cursor-pointer"
        >
          <Link style={{ textDecoration: "none" }} to="/support">
            Support
          </Link>
          {menu === "Support" && (
            <hr className="border-none w-4/5 h-1 rounded bg-red-500" />
          )}
        </li>
      </ul>

      <div className="flex gap-6 items-center">
        {localStorage.getItem("isLogIn") === "true" ? (
          <>
            <Link to={"/profile"}>
              <div className="flex flex-col items-center justify-center gap-1">
              <img src={avata} alt="" className="h-10 w-10" style={{ filter: 'invert(1)' }} />


                <button className="bg-white rounded-xl px-2 text-sm text-blue-400 font-semibold">
                {JSON.parse(localStorage.getItem("user"))?.name}
                </button>
              </div>
            </Link>
            <img
              onClick={() => {
                localStorage.setItem("isLogIn", "false");
                Notification("Logout Successful");
                localStorage.removeItem("user");
                window.location.reload();
              }}
              src={logout}
              alt="Logout"
              className="h-8 w-8 cursor-pointer"
            />
          </>
        ) : (
          <Link to={"/login"}>
            <img src={user} alt="Login" className="h-8 w-8" />
          </Link>
        )}

        <div
          onClick={() => {
            window.location.reload();
          }}
          className="relative cursor-pointer"
        >
          <Link to={"/cart"}>
            <img src={shopping_cart} alt="" className="h-8 w-8" />
          </Link>
          <p className="w-5 h-5 rounded-full text-center bg-red-500 text-white absolute top-[-30%] right-[-20%] flex items-center justify-center">
            {cart.length ?? 0}
          </p>
        </div>
      </div>
    </div>
  );
};
