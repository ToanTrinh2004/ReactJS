import React, { useEffect, useState } from 'react'
import Items from './Items'
import axios from 'axios'
import all_product from '../Assets/all_product'
function Product(props) {
  return (
    <div className='justify-center flex flex-col px-3 '>
      <h1 className='text-3xl font-bold mt-4 mb-4 text-center '>PRODUCTS FOR {props.category.toUpperCase()}</h1>
      <div className="grid grid-cols-4 gap-4">
      {all_product.filter(item=>item.category===props.category).map((item, i) => (
          <Items 
            key={i} 
            name = {item.name}
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
