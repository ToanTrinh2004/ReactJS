import React from 'react'
function Items(props) {
  return (
    <div>
    <div className='w-88 p-1 hover:scale-105 transition duration-600'>
    <img src={props.image} alt=""/>
    <div className='flex gap-5'>
        <div className='text-gray-700 text-lg font-semibold'>
            ${props.new_price}
        </div>
        <div className='text-gray-500 text-lg font-medium line-through'>
            ${props.old_price}
        </div>
    </div>
</div>
<button className='bg-red-500 text-white font-bold w-40 h-10 justify-self-center top-5 bottom-2'>Add to cart</button>
</div>
  )
}

export default Items
