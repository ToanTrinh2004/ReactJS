import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Cart from './Components/Cart/Cart';
import SignUp from './Components/Pages/SignUp';
import { Navbar } from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import Home from './Components/Pages/Home';
import OrderDetail from './Components/OrderDetail/OrderDetail';
import Trouser from './Components/Pages/Trouser';
import Shirt from './Components/Pages/Shirt';
import AboutUs from './Components/AboutUs/AboutUs';
function App() {

  return (
    <main>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shirt' element={<Shirt/>}></Route>
      <Route path='/trouser' element={<Trouser/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
     
      <Route path="/product/:productName" element={<ProductDisplay />} />
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/orderdetail' element={<OrderDetail/>}></Route>
    </Routes>
    <Footer/>
    </main>
  );
}

export default App;
