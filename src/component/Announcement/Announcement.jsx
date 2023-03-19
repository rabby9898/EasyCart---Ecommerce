import React from 'react'
import banner1 from "../../assets/banner-1.png"
import banner2 from "../../assets/banner-2.png"
import './Announce.css'

const Announcement = () => {

    // const myStyle1 = {
    //     width: '30%',
    //     height: '340px'
    // }
    // const myStyle2 = {
    //     width: '68%',
    //     height: '340px'
    // }
  return (
    <>
       <section className="announc background">
        <div className="container d_flex">
            <div className="img myStyle1">
                <img src={banner1} alt="" />
            </div>
            <div className="img myStyle2">
                <img src={banner2} alt="" />
            </div>
        </div>
       </section>
    </>
  )
}

export default Announcement