import React from 'react'
import all_product from '../Assets/all_product'
import Items from './Items'
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Week5/Redux/slice/cartSlice';
function Product() {
  const dispatch = useDispatch();
  return (
    <div className='w-full flex justify-center items-center flex-col px-3'>
    <h1 className='text-3xl font-bold mt-4 mb-4 text-center'>ALL PRODUCTS</h1>
    <div className="w-full max-w-6xl grid grid-cols-4 gap-4">
      {all_product.map((item, i) => (
        <div>
        <Items 
          key={i} 
          name={item.name} 
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
