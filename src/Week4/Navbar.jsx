import React, { useState } from "react";
import logo from "../Assets/logo.png"
import shopping_cart from "../Assets/shopping_cart.png";
import search from "../Assets/find.png";
import user from "../Assets/account.png";
import logout from "../Assets/logout.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
export const Navbar = () => {
  const [menu, setMenu] = useState("");
  const {cart} = useSelector(store => store.cart);
  console.log(cart);
  return (
    
    <div className="flex justify-around p-4 shadow-sm  bg-orange-300 sticky">
       <Link to='/'><div className="flex justify-center gap-2 items-center cursor-pointer">
       <img src={logo} alt="" />
        <p className="text-red-500 text-4xl font-semibold">SHOPPER</p>
      </div></Link>
      <ul className="flex items-center list-none text-red-500 gap-10 text-xl font-semibold ">
        <li onClick={()=>{setMenu("shop")}} className="flex flex-col gap-1 items-center justify-center cursor-pointer"><Link style={{textDecoration:'none'}} to='/'>Shop</Link>
          {menu === "shop" && <hr className="border-none w-4/5 h-1 rounded bg-red-500" />}
        </li>
        <li  onClick={()=>{setMenu("men")}} className="flex flex-col gap-1 items-center justify-center cursor-pointer"><Link style={{textDecoration:'none'}} to='/men'>Men</Link>
          {menu === "men" && <hr className="border-none w-4/5 h-1 rounded bg-red-500" />}
        </li>
        <li  onClick={()=>{setMenu("women")}} className="flex flex-col gap-1 items-center justify-center cursor-pointer"><Link style={{textDecoration:'none'}} to='/women'>Women</Link>
          {menu === "women" && <hr className="border-none w-4/5 h-1 rounded bg-red-500" />}
        </li>
        <li  onClick={()=>{setMenu("kid")}} className="flex flex-col gap-1 items-center justify-center cursor-pointer"><Link style={{textDecoration:'none'}} to='/kid'>Kid</Link>
          {menu === "kid" && <hr className="border-none w-4/5 h-1 rounded bg-red-500" />}
        </li>
        <li  onClick={()=>{setMenu("Support")}} className="flex flex-col gap-1 items-center justify-center cursor-pointer"><Link style={{textDecoration:'none'}} to='/support'>Support</Link>
          {menu === "Support" && <hr className="border-none w-4/5 h-1 rounded bg-red-500" />}
        </li>
      </ul>

      <div className="flex gap-6 items-center">
        
        <img src={search} alt="" className="h-8 w-8" />
         <Link to={'/login'}>
        <img src={user} alt="" className="h-8 w-8" />
        </Link>
       <div onClick={()=>{window.location.reload()}} className="relative cursor-pointer">
       <Link to={'/cart'}> <img src={shopping_cart} alt="" className="h-8 w-8" /></Link>
       <p className="w-5 h-5 rounded-full text-center bg-red-500 text-white absolute top-[-30%] right-[0] flex items-center justify-center">
    {cart.length ?? 0}
  </p>
       </div>
      
      </div>
    </div>
  );
};