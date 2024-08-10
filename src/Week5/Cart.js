import React, { useEffect } from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { removeCart ,increse,decrese } from "./Redux/slice/cartSlice";
const all_product = JSON.parse(localStorage.getItem("cart")) || [];
function Cart() {
  const dispatch = useDispatch();
  const delCart = (id) => {
    dispatch(removeCart({ id }));
  }
  const handleIncrease = (id) => {
    dispatch(increse({ id }));
  };

  const handleDecrease =(id,quantity) => {
    if (quantity > 1) {
      dispatch(decrese({ id}));
    } else {
      dispatch(removeCart({ id}));
    }
  };

  const Subtotal = all_product.reduce(
    (total, item) => total + item.new_price * item.quantity,
    0
  );
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Quantity</p>
        <p>Price</p>
      </div>
      <hr />
      {all_product.map((e) => {
        return (
          <div>
            <div className="cartitems-format cartitems-format-main">
              <img src={e.image} alt="" className="carticon-product-icon" />
              <p>{e.name}</p>
              <div className="flex flex-row items-center gap-2">
  <button
   
    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-md"
    onClick={()=>{handleDecrease(e.id,e.quantity)}}
  >
    -
  </button>

  <p className="w-12 text-center px-2 border border-gray-300 rounded-md shadow-sm">
    {e.quantity}
  </p>

  <button
    
    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-md"
    onClick={()=>{handleIncrease(e.id)}}
  >
    +
  </button>

  <button
    onClick={() => delCart(e.id)}
    className="w-8 h-8 hover:text-red-500"
  >
    x
  </button>
</div>

              <p>${e.new_price * e.quantity}</p>
            </div>
            <hr></hr>
          </div>
        );
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${Subtotal}</p>
            </div>
            <hr></hr>
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr></hr>
            <div className="cartitems-total-item">
              <p>Discount</p>
              <p>$0</p>
            </div>
            <hr></hr>
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${Subtotal}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECK OUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Enter discount code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
