import React, { useEffect } from "react";
import "./Cart.css";
const all_product = JSON.parse(localStorage.getItem("cart"));
function Cart() {
  const Subtotal = all_product.reduce(
    (total, product) => total + product.new_price,
    0
  );
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
      </div>
      <hr />
      {all_product.map((e) => {
        return (
          <div>
            <div className="cartitems-format cartitems-format-main">
              <img src={e.image} alt="" className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
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
