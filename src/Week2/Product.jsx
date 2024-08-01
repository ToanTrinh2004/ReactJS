import React from 'react'
import all_product from '../Assets/all_product'
import Items from './Items'
function Product() {
  return (
    <div className='w-full flex justify-center items-center flex-col px-3'>
    <h1 className='text-3xl font-bold mt-4 mb-4 text-center'>ALL PRODUCTS</h1>
    <div className="w-full max-w-6xl grid grid-cols-4 gap-4">
      {all_product.map((item, i) => (
        <Items 
          key={i} 
          name={item.name} 
          image={item.image} 
          new_price={item.new_price} 
          old_price={item.old_price} 
        />
      ))}
    </div>
  </div>
  
  )
}

export default Product
