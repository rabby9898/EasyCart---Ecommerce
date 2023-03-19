import React from 'react'
import Ddata from './Ddata'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../Newarrivals/NewArrivals.css';

const DIscountCard = () => {

        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          margin: 20,
        }
  return (
    <>
        <Slider {...settings}>
         {Ddata.map((value, index) => {

            return (
                <>
                    <div className="box product">
                        <div className="img">
                            <img src={value.cover} alt="" width='100%' />
                        </div>
                        <h4>{value.name}</h4>
                        <span>{value.price}</span>
                    </div>
                </>
            )
        })}
        </Slider>
    </>
  )
}

export default DIscountCard