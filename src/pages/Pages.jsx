import React from 'react'
import Announcement from '../component/Announcement/Announcement'
import Discount from '../component/Discount/Discount'
import FlashDeals from '../component/FlashDeals/FlashDeals'
import Home from '../component/mainPage/Home'
import NewArrivals from '../component/Newarrivals/NewArrivals'
import Shop from '../component/Shop/Shop'
import TopCate from '../component/Top/TopCate'
import Wrapper from '../component/Wrapper/Wrapper'

const Pages = ({productItems, addToCart, cartItem, shopItems}) => {
  return (
    <>
        <Home/>
        <FlashDeals productItems= {productItems} addToCart={addToCart}/>
        <TopCate/>
        <NewArrivals/>
        <Discount/>
        <Shop shopItems={shopItems} addToCart={addToCart}/>
        <Announcement/>
        <Wrapper/>
    </>
  )
}

export default Pages