import React from 'react'
import Tdata from './TopData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
      };
  return (
    <>
        <Slider {...settings}>
        {
            Tdata.map ((value, index) => {
                return (
                  <>
                    <div className="box product" key={index}>
                        <div className="nametop d_flex">
                            <span className="tleft">{value.para}</span>
                            <span className="tright">{value.desc}</span>
                        </div>
                        <div className="img">
                            <img src={value.cover} alt="" />
                        </div>
                    </div>
                  </>
                )
            })
        }
        </Slider>
    </>
  )
}

export default TopCart