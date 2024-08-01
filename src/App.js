import { useState } from 'react';
import './App.css'
import './Components/Calculate'
import Shop from './Week2/Shop';
import State from './Week3/State';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Week4/Navbar';
import { Hero } from './Week2/Hero';
import Product from './Week4/Product';
import Login from './Week4/Login';
import Cart from './Week5/Cart';
function App() {

  return (
    <main>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/men' element={<Product category={"men"} />}></Route>
      <Route path='/women' element={<Product category={"women"} />}></Route>
      <Route path='/kid' element={<Product category={"kid"} />}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </main>
  );
}

export default App;
