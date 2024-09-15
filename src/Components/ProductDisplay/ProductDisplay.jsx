import React,{useState} from 'react';
import './ProductDisplay.css';
import RelateProducts from '../Related/RelateProducts';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../Week5/Redux/slice/cartSlice';

function ProductDisplay() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    const [quantity,setQuantity] =  useState(1);
    const [newCost,setNewCost] = useState(product.newCost);
    
    const [oldCost,setOldCost] = useState(product.oldCost);
    const [size,setSize] = useState("S");
    const dispatch = useDispatch();
    const handleDecrese = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
        setNewCost(product.newCost * (quantity - 1));
        setOldCost(product.oldCost * (quantity - 1));
      }
    };
    
    const handleIncrese = () => {
      setQuantity(quantity + 1);
      setNewCost(product.newCost * (quantity + 1));
      setOldCost(product.oldCost * (quantity + 1));
    };
    const handleSizeSelection = (size) => {
      setSize(size);
    };
    const selectedButton = (Size) => {
      if(Size === size){
        return { backgroundColor: 'white', color: 'black', border: '1px solid black' }
      }
      else
      {}
    };
    
  return (
    <div>
      <div className="content_container">
        <div className="breadcrumbs">
          Trang chủ / Sản phẩm  <span>/{product.name}</span>
        </div>
        <div className="product-details">
          <div className="product-pov">
            <img  src={product.image_fs} alt="Sản phẩm" className="thumbnail" />
            <img  src={product.image_bs} alt="Sản phẩm" className="thumbnail" />
          </div>
          <div className="product-img">
            <img src={product.image_fs} alt="Sản phẩm" className="img-main" />
          </div>
          <div className="product-description">
            <h1 className="product-title">{product.name}</h1>
            <div className="product-cost">
              <span onChange={()=>{setNewCost(newCost)}} className="old-prices">{product.oldCost * (quantity)}.000đ</span>
              <span  onChange={()=>{setOldCost(oldCost)}} className="new-prices">{product.newCost * (quantity)}.000đ</span>
            </div>
            <div className="product-selection">
              <div className="product-sizes">
                <div className="sizes-title">
                  <p>Kích thước: <span className="sizes-span"></span></p>
                  <p>Hướng dẫn chọn size</p>
                </div>
                <div className="size-selections">
                <button type="button" value="S" onClick={() => handleSizeSelection("S")} style={selectedButton("S")}>S</button>
                <button type="button" value="M" onClick={() => handleSizeSelection("M")} style={selectedButton("M")} >M</button>
                <button type="button" value="L" onClick={() => handleSizeSelection("L")} style={selectedButton("L")} >L</button>
                <button type="button" value="XL" onClick={() => handleSizeSelection("XL")} style={selectedButton("XL")}>XL</button>
                <button type="button" value="2XL" onClick={() => handleSizeSelection("2XL")} style={selectedButton("2XL")}>2XL</button>
                </div>
              </div>
              <div className="product-order">
                <div className="quantity-counter">
                  <p className="quantity-btn" id="decrease-btn" onClick={handleDecrese}>-</p>
                  <input type="text"  value={quantity} onChange={()=>{setQuantity(quantity)}} readOnly style={{ border: 'none', width:"30px", paddingLeft:'10px' }} />
                  <p className="quantity-btn" id="increase-btn" onClick={handleIncrese}>+</p>
                </div>
                <div className="order-submit">
                  <button type="button" id="add-to-cart-btn" onClick={()=>dispatch(addtoCart(product))}>
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
            <div className="product-support"></div>
            <div className="line"></div>
          </div>
        </div>
        <RelateProducts/>
        
      </div>
    </div>
  );
}

export default ProductDisplay;
