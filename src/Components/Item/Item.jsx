import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Item(props) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    const selectedProduct = {
      name: props.name,
      newCost: props.newCost,
      oldCost: props.oldCost,
      image_fs: props.image_fs,
      image_bs: props.image_bs,
      id : props.id
    };
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    const breakcum = props.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    navigate(`/product/${breakcum}`);
    window.location.reload();
    window.scrollTo(0, 0)
  };
  
  return (
    <div
      className='w-88 p-1'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
     onClick={handleClick}
    >
      <img
        src={hovered ? props.image_bs : props.image_fs}
        alt={props.name}
        className='transition duration-300'
      />
      <p className='text-sm'>{props.name}</p>
      <div className='flex gap-5'>
        <div className='text-gray-700 text-lg font-semibold'>
          {props.newCost}đ
        </div>
        <div className='text-gray-500 text-lg font-medium line-through'>
          {props.oldCost}đ
        </div>
      </div>
    </div>
  );
}

export default Item;

