import React, { useState } from "react";
import logo from "../Assets/logo.png"
import shopping_cart from "../Assets/shopping_cart.png";
import search from "../Assets/find.png";
import user from "../Assets/account.png";
export const Header = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className="flex justify-around p-4 shadow-sm  bg-orange-300 sticky">
      <div className="flex justify-center gap-2 items-center cursor-pointer">
        <img src={logo} alt="" />
        <p className="text-red-500 text-4xl font-semibold">SHOPPER</p>
      </div>
      <ul className="flex items-center list-none text-red-500 gap-10 text-xl font-semibold ">
        <li onClick={()=>{setMenu("shop")}} className="flex flex-col gap-1 items-center justify-center cursor-pointer">SHOP
          {menu === "shop" && <hr className="border-none w-4/5 h-1 rounded bg-red-500" />}
        </li>
        <li  onClick={()=>{setMenu("men")}} className="flex flex-col gap-1 items-center justify-center cursor-pointer">MEN
          {menu === "men" && <hr className="border-none w-4/5 h-1 rounded bg-red-500" />}
        </li>
        <li  onClick={()=>{setMenu("women")}} className="flex flex-col gap-1 items-center justify-center cursor-pointer">WOMEN
          {menu === "women" && <hr className="border-none w-4/5 h-1 rounded bg-red-500" />}
        </li>
        <li  onClick={()=>{setMenu("kid")}} className="flex flex-col gap-1 items-center justify-center cursor-pointer">KID
          {menu === "kid" && <hr className="border-none w-4/5 h-1 rounded bg-red-500" />}
        </li>
        <li  onClick={()=>{setMenu("Support")}} className="flex flex-col gap-1 items-center justify-center cursor-pointer">
          {menu === "Support" && <hr className="border-none w-4/5 h-1 rounded bg-red-500" />}
        </li>
      </ul>

      <div className="flex gap-6 items-center">
        
        <img src={search} alt="" className="h-8 w-8" />
        <img src={user} alt="" className="h-8 w-8" />
        <img src={shopping_cart} alt="" className="h-8 w-8" />
      </div>
    </div>
  );
};