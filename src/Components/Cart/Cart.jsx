import React from "react";
import "./Cart.css";
import { useFormik } from "formik";
import BasicTextField from "../BasicTextField";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import {
  removeCart,
  increse,
  decrese,
} from "../../Week5/Redux/slice/cartSlice";
import axios from "axios";
import { Notification } from "../../utils/helper";
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
const products = JSON.parse(localStorage.getItem("cart")) || [];
const user = JSON.parse(localStorage.getItem("user")) || {};
const orderId = uuid();
function Cart() {
  const dispatch = useDispatch();
  const delCart = (id) => {
    dispatch(removeCart({ id }));
  };
  const handleIncrease = (id) => {
    dispatch(increse({ id }));
  };

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decrese({ id }));
    } else {
      dispatch(removeCart({ id }));
    }
  };

  const Subtotal = products.reduce(
    (total, item) => total + item.newCost * item.quantity,
    0
  );
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullName: user.name || "",
      phoneNumber: user.phone || "",
      email: user.email || "",
      address: "",
      deliveryNote: "",
      paymentMethod: "",
    },
    validationSchema: yup.object({
      fullName: yup.string().required("Vui lòng nhập tên của bạn"),
      phoneNumber: yup
        .string()
        .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ")
        .min(10, "Số điện thoại phải có ít nhất 10 số")
        .required("Vui lòng nhập số điện thoại"),
      email: yup
        .string()
        .email("Email không hợp lệ")
        .required("Vui lòng nhập email"),
      address: yup.string().required("Vui lòng nhập địa chỉ của bạn"),
      deliveryNote: yup.string(),
      paymentMethod: yup
        .string()
        .required("Vui lòng chọn phương thức thanh toán"),
    }),
    onSubmit: (values) => {
      handleCheckout(values,products,Subtotal);
    },
  });
  const handleCheckout = async (values, products,Subtotal) => {
    try {
      const Order = {
        name: values.fullName,
        email: values.email,
        phone: values.phoneNumber,
        address: values.address,
        deliveryNote: values.deliveryNote,
        paymentMethod: values.paymentMethod,
        products: products.map((product) => ({
          id: product.id,
          name: product.name,
          size: product.size,
          image : product.image_fs,
          quantity: product.quantity,
          price: product.newCost,
        })),
        totalAmount: Subtotal,
        date: new Date().toLocaleString(),
        orderId : orderId
      };
      await axios.post('http://localhost:4000/order', Order);
      Notification("Order placed successfully!");
      localStorage.removeItem("cart");
      localStorage.setItem("orderId",orderId);
      navigate("/orderDetail")
      window.location.reload();
     
      
  
    } catch (error) {
      console.error("Error during checkout:", error);
      Notification("An error occurred while placing the order.", "error");
    }
  };
 
  return (
    <div className="cart-container">
      <div className="bill">
        <form id="orderInfo" onSubmit={formik.handleSubmit}>
          <h2 className="heading">Thông Tin Đặt Hàng</h2>
          <div className="form-field">
            <div className="form-col">
              <span>Họ và tên</span>
              <BasicTextField
                label="Full Name"
                value={formik.values.fullName}
                onChange={formik.handleChange("fullName")}
                onBlur={formik.handleBlur("fullName")}
                error={Boolean(
                  formik.touched.fullName && formik.errors.fullName
                )}
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </div>
            <div className="form-col">
              <span>Số điện thoại</span>
              <BasicTextField
                placeholder="Nhập số điện thoại của bạn"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange("phoneNumber")}
                onBlur={formik.handleBlur("phoneNumber")}
                error={Boolean(
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                )}
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />
            </div>
          </div>
          <div className="form-col">
            <span>Email</span>
            <BasicTextField
              placeholder="Nhập Email của bạn"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className="form-col">
            <span>Địa chỉ</span>
            <BasicTextField
              placeholder="Nhập địa chỉ của bạn (ví dụ: 146 Tô Ký, Quận 12, TpHCM)"
              value={formik.values.address}
              onChange={formik.handleChange("address")}
              onBlur={formik.handleBlur("address")}
              error={Boolean(formik.touched.address && formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </div>
          <div className="form-col">
            <span>Ghi chú giao hàng</span>
            <BasicTextField
              placeholder="Ghi chú giao hàng VD: Vào giờ hành chính"
              value={formik.values.deliveryNote}
              onChange={formik.handleChange("deliveryNote")}
            />
          </div>
          <h2>Hình thức thanh toán</h2>
          <div className="payment">
            <label className="payment-item">
              <input
                type="radio"
                name="paymentMethod"
                value="COD"
                checked={formik.values.paymentMethod === "COD"}
                onChange={formik.handleChange("paymentMethod")}
              />
              <span className="payment-icon">
                <img src="../Assets/COD.svg" alt="COD" />
              </span>
              <span className="payment-col">
                <span>COD</span>
                <span>Thanh Toán khi nhận hàng</span>
              </span>
            </label>
          </div>

          <div className="payment">
            <label className="payment-item">
              <input
                type="radio"
                name="paymentMethod"
                value="Momo"
                checked={formik.values.paymentMethod === "Momo"}
                onChange={formik.handleChange("paymentMethod")}
              />
              <span className="payment-icon">
                <img src="../Assets/momo-icon.png" alt="Momo" />
              </span>
              <span className="payment-col">
                <span>Thanh toán Momo</span>
              </span>
            </label>
          </div>
          <div className="payment">
            <label className="payment-item">
              <input
                type="radio"
                name="paymentMethod"
                value="Momo"
                checked={formik.values.paymentMethod === "Momo"}
                onChange={formik.handleChange("paymentMethod")}
              />
              <span className="payment-icon">
                <img src="../Assets/icon-vietqr.svg" alt="Momo" />
              </span>
              <span className="payment-col">
                <span>Ví điện tử VNPAY/VNPAY QR</span>
              </span>
            </label>
          </div>
          <div className="payment">
            <label className="payment-item">
              <input
                type="radio"
                name="paymentMethod"
                value="Bank"
                checked={formik.values.paymentMethod === "Momo"}
                onChange={formik.handleChange("paymentMethod")}
              />
              <span className="payment-icon">
                <img src="../Assets/mceclip1_21.png" alt="Momo" />
              </span>
              <span className="payment-col">
                <span>Quét QR & Thanh toán bằng ứng dụng ngân hàng</span>
              </span>
            </label>
          </div>
        </form>
      </div>

      <div className="info">
        <h2 className="heading">Giỏ Hàng</h2>
        <div className="title">
          <span>Tất cả sản phẩm</span>
          <span>Số lượng</span>
          <span>Giá</span>
        </div>
        <hr className="line" />

        <div className="form-col">
          {products.map((e) => (
            <div className="product-list-container">
              <div className="product-list" key={e.id}>
                <img src={e.image_fs} alt={e.name} />
                <div className="product-list-detail">
                  <div className="product-list-display-col">
                    <span className="product-list-detail-name">{e.name}</span>
                    <div className="product-list-q-p">
                      <select className="size">
                        <option value="S" selected={e.size === "S"}>
                          S
                        </option>
                        <option value="M" selected={e.size === "M"}>
                          M
                        </option>
                        <option value="L" selected={e.size === "L"}>
                          L
                        </option>
                        <option value="XL" selected={e.size === "XL"}>
                          XL
                        </option>
                        <option value="2XL" selected={e.size === "2XL"}>
                          2XL
                        </option>
                        <option value="3XL" selected={e.size === "3XL"}>
                          3XL
                        </option>
                      </select>
                      <div className="quantity-container">
                        <button
                          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-md"
                          onClick={() => {
                            handleDecrease(e.id, e.quantity);
                          }}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="quantity"
                          value={e.quantity}
                          min="1"
                        />

                        <button
                          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-md"
                          onClick={() => {
                            handleIncrease(e.id);
                          }}
                        >
                          +
                        </button>
                      </div>

                      <div className="price-display">
                        <span className="product-price-new">
                          {e.newCost * e.quantity}.000đ
                        </span>
                        <span className="product-price-old">
                          {e.oldCost * e.quantity}.000đ
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this product?"
                          )
                        ) {
                          delCart(e.id);
                        }
                      }}
                      className="product-del"
                    >
                      XÓA SẢN PHẨM
                    </button>
                  </div>
                </div>
              </div>
              <hr className="line" />
            </div>
          ))}
        </div>
        <div className="voucher-field">
          <input type="text" placeholder="Nhập mã giảm giá" />
          <button>Áp dụng Voucher</button>
        </div>
        <hr className="line" />
        <div className="checkout">
          <div>
            <span>Tạm tính</span>
            <span id="subtotal">{Subtotal}.000đ</span>
          </div>
          <div>
            <span>Giảm giá</span>
            <span>0đ</span>
          </div>
          <div>
            <span>Phí giao hàng</span>
            <span id="ship-fee">Free</span>
          </div>
          <hr className="line" />
          <div className="tong">
            <span>Tổng</span>
            <span id="Total">{Subtotal}.000đ</span>
          </div>
          <button form="orderInfo" type="sumbit" className="thanhtoan">Thanh Toán</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
