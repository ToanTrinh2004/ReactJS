import React ,{useEffect,useState} from 'react'
import Item from '../Item/Item';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../Week5/Redux/slice/cartSlice';
import { useNavigate } from 'react-router-dom';
function Trouser() {
  const [TrouserProduct,setTrouserProduct] = useState([]);
  const [search,setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products?category_like=quan");
        setTrouserProduct(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const dispatch = useDispatch();
  const fillterProducts = TrouserProduct.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) 
  );
  const navigate = useNavigate();
  return (
        <div className='w-full flex justify-center items-center flex-col px-3 gap-5 mt-5 '>
        <h2 className='text-4xl font-bold'>Search Product</h2>
        <div class=' mx-auto w-96 text-2xl'>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
        placeholder="Search something.." /> 
    </div>
</div>
        <h2 className='text-4xl font-bold'>Trouser Product</h2>
      <div className="w-full max-w-7xl grid grid-cols-5 gap-4">
      {fillterProducts.map((item, i) => (
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

export default Trouser