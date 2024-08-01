import React from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../Week5/Redux/slice/cartSlice';
function Items(props) {
  const dispatch = useDispatch();
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

</div>
  )
}

export default Items
