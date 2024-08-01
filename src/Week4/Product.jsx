import React, { useEffect, useState } from 'react'
import Items from './Items'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import all_product from '../Assets/all_product'
import { addtoCart } from '../Week5/Redux/slice/cartSlice'
function Product(props) {
  const dispatch = useDispatch();
  return (
    <div className='w-full flex justify-center items-center flex-col px-3 '>
      <h1 className='text-3xl font-bold mt-4 mb-4 text-center '>PRODUCTS FOR {props.category.toUpperCase()}</h1>
      <div className="w-full max-w-6xl grid grid-cols-4 gap-4">
      {all_product.filter(item=>item.category===props.category).map((item, i) => (
        <div>
          <Items 
            key={i} 
            name = {item.name}
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
          <button onClick={()=>{dispatch(addtoCart(item))}} className='bg-red-500 text-white font-bold w-40 h-10 justify-self-center top-5 bottom-2'>Add to cart</button>
</div>
        ))}
      </div>
    </div>
  )
}

export default Product
