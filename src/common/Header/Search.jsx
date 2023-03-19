import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Easy_cart_logo.png';

const Search = ({cartItem}) => {
  window.addEventListener("scroll", function(){
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY>100)
  })
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <Link to='/'>
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder='Search Your Product Here ' />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
              <div className="icon f_flex circleUser">
                <i className="fa fa-user icon-circle"></i>
              </div>
              <div className="cart">
                <Link to='/cart'>
                  <i className="fa fa-shopping-bag icon-circle"></i>
                  <span>{cartItem.length === 0 ? "0" : cartItem.length}</span>
                </Link>
              </div>
          
          </div>
        </div>
      </section>
    </>
  )
}

export default Search;