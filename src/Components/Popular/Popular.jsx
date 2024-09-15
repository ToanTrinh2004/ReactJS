import React ,{useEffect,useState} from 'react'
import Item from '../Item/Item';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../Week5/Redux/slice/cartSlice';
import { useNavigate } from 'react-router-dom';
function Popular() {
  const [popularProduct,setPopularProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        setPopularProduct(response.data.slice(0,5)); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
        <div className='w-full flex justify-center items-center flex-col px-3 gap-5 mt-5 '>
        <h2 className='text-4xl font-bold'>Popular Product</h2>
      <div className="w-full max-w-7xl grid grid-cols-5 gap-4">
      {popularProduct.map((item, i) => (
        <div className=''>
          <Item 
            key={i} 
            name = {item.name}
            image_fs={item.image_fs}
            image_bs={item.image_bs} 
            newCost={item.newCost} 
            oldCost={item.oldCost} 
          />
          <div className='flex flex-row gap-2 '>
          <button onClick={()=>{dispatch(addtoCart(item)); navigate("/cart"); window.location.reload(); window.scrollTo(0, 0)}} className='bg-red-500 text-white font-bold w-40 h-10 justify-self-center top-5 bottom-2'>Buy now</button>
          <button onClick={()=>dispatch(addtoCart(item))} className='bg-red-500 text-white font-bold w-40 h-10 justify-self-center top-5 bottom-2'>Add to cart</button>
          </div>
</div>
        ))}
      </div>

    </div>
  )
}

export default Popular