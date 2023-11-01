import { createSlice } from "@reduxjs/toolkit";
import ProductData from "./ProductData";

const initialState = {
  cart: [],
  items: ProductData,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
      
    },

    getCartTotal: (state)=>{
      let {totalQuantity, totalPrice} = state.cart.reduce((cartTotal, cartItem)=>{
        console.log(cartTotal)
        console.log(cartItem);
        const {price, quantity} = cartItem;
        // console.log(price, quantity);

        const itemTotal  =  price*quantity;
        cartTotal.totalPrice += itemTotal      
        cartTotal.totalQuantity += quantity;
        return cartTotal;
      },
      {
        totalQuantity:0,
        totalPrice:0
      })
      state.totalPrice =  parseInt(totalPrice.toFixed(2));
      state.totalQuantity  = totalQuantity
    } 
    ,

    removeItem:(state,action)=>{
      state.cart = state.cart.filter((item)=>item.id !== action.payload)
    }
    ,
    incresequantity: (state, action)=>{
      state.cart =  state.cart.map((item)=>
      {
        if(item.id === action.payload){
          return {...item, quantity: item.quantity+1}
        } 
        return item
        }
      )
    }
    ,
    decresequantity: (state, action)=>{
      state.cart =  state.cart.map((item)=>
      {
        if(item.id === action.payload){
          return {...item, quantity: item.quantity-1}
        } 
        return item
        }
      )
    }
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  incresequantity,
  decresequantity
} = cartSlice.actions;

export default cartSlice.reducer;