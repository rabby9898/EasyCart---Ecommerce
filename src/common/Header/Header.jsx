import React from 'react';
import Head from './Head';
import './Header.css';
import Navbar from './Navbar';
import Search from './Search';

const Header = ({cartItem}) => {
  return (
    <>
        <Head/>
        <Search cartItem={cartItem}/>
        <Navbar/>
        
    </>
  )
}

export default Header