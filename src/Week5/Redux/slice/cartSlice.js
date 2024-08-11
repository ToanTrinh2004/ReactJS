import { createSlice } from "@reduxjs/toolkit";
import { Notification } from "../../../utils/helper";
const cart = JSON.parse(localStorage.getItem("cart")) ?? []
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart : [...cart]

    },
    reducers: {
      addtoCart(state, action) {
        let index = state.cart.findIndex((item) => item.id === action.payload.id);
      
        if (index === -1) {
          state.cart.push({ ...action.payload, quantity: 1 });
        } else {
          state.cart[index].quantity += 1;
        }
      
        localStorage.setItem("cart", JSON.stringify(state.cart));
        Notification("Add Successfully");
        
      },
      
      removeCart(state, action) {
        let index = state.cart.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.cart.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(state.cart));
          Notification("Delete Successfully");
        } else {
          Notification("Item not found in cart");
        }
        window.location.reload()
      },
      
      increse(state, action) {
        let index = state.cart.findIndex((item) => item.id === action.payload.id);
        
        if (index !== -1) {
          state.cart[index].quantity += 1;
        }
      
        localStorage.setItem("cart", JSON.stringify(state.cart));
        window.location.reload()
      },
      
      decrese(state, action) {
        let index = state.cart.findIndex((item) => item.id === action.payload.id);
        
        if (index !== -1) {
          if (state.cart[index].quantity > 1) {
            state.cart[index].quantity -= 1;
          } else {
            state.cart.splice(index, 1); // Remove the item if quantity is 1
          }
        }
      
        localStorage.setItem("cart", JSON.stringify(state.cart));
        window.location.reload()
      }
      
      
      
  }
})
  
  //export const { todoAdded, todoToggled } = todosSlice.actions
  export const {addtoCart} = cartSlice.actions
  export const {removeCart} = cartSlice.actions
  export const {increse} = cartSlice.actions
  export const {decrese} = cartSlice.actions
  export default cartSlice.reducer