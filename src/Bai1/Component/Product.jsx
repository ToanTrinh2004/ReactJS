import React from 'react'
import './Product.css'
function Product(props) {
  return (
    <div className='product'>
    <div >
      <img className='img' src={props.img} alt=''></img>
    </div>
    <p className='des'>{props.des}</p>
    <p className='title'>{props.title}</p>
    <div className='price'>
      <p className='new'>${props.new_price}</p>
      <p className='old'>${props.old_price}</p>
    </div>
    <div className='box'>
        ADD TO CART
    </div>
   
    </div>
  )
}

export default Product
