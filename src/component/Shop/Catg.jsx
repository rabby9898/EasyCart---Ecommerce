import React from 'react'
import CatgData from './CatgData'


const Catg = () => {

  return (
    <>
        <div className="category">
            <div className="chead d_flex">
                <h1>Brands</h1>
                <h1>Shops</h1>
            </div>
            {
                CatgData.map((value, index) =>{
                    return(
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt='electronics'/>
                            <span>{value.cateName}</span>
                        </div>
                    )
                })
            }
            <div className="box box2"><button>View all</button></div>
        </div>
    </>
  )
}

export default Catg