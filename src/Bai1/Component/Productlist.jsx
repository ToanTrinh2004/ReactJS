import React from 'react'
import Product from './Product'
import all_product from '../Assets/Allproduct'
import './Productlist.css'
function Productlist() {
  return (
    <div className='productlist'>
    {all_product.map((item, i) => (
          <Product 
            key={i} 
            des={item.des} 
            img={item.img} 
            new_price={item.new_price} 
            old_price={item.old_price} 
            title={item.title}
          />
        ))}
    </div>
  )
}

export default Productlist
