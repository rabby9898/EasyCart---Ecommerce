import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './common/Header/Header';
import Pages from './pages/Pages';
import Data from './component/FlashDeals/Data';
import { useState } from 'react';
import Cart from './common/Cart/Cart';
import ShopData from './component/Shop/ShopData';
import Footer from './component/Footer/Footer';
import UnConstruct from './component/UnderConstruct/UnConstruct';

function App() {
  const {productItems} = Data;
  const {shopItems} = ShopData;
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id) 
    if(productExit){
      setCartItem(cartItem.map((item) => (item.id === product.id ? {...productExit, qty: productExit.qty + 1} : item)))
    }else{
      setCartItem([...cartItem, {...product, qty: 1}])
    }
  }
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1 ) {
      setCartItem(cartItem.filter ((item) => item.id !== product.id))
    }else{
      setCartItem(cartItem.map((item) =>(item.id === product.id ? {...productExit, qty: productExit.qty - 1} : item)))
    }
  }

  return (
    <>
    <Header cartItem={cartItem}/>

      <Routes>

        <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>}/>
        <Route path='/cart' element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>}/>
        <Route path='/under-development' element={<UnConstruct/>}/>

      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
