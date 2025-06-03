import React from 'react'
import star from "../../assets/icons/star.svg"
import more from "../../assets/icons/strangeArrow.svg"
import "./PopularHotelsItem.css"
const PopularHotelsItem:React.FC<{rating:number,name:string,type:string,image:string}>=({rating,name,type,image})=>{
  return (
   <>
   <div className="popular-hotel__item-outer" >
   <div className={`popular-hotel__item ${type}`} style={{background:`url(${image})`,backgroundPosition:"center",backgroundSize:"cover"}}>
        <div className={`popular-hotel__item-container`}>
            <div className="popular-hotel__item-rating">
                <p className="popular-hotel__item-rating-number">{rating}</p>
                <div className="popular-hotel__item-rating-star-outer">
                    <img className='popular-hotel__item-rating-star' src={star} alt="" />
                </div>
            </div>
            <div className="popular-hotel__item-info">
                <h1 className="popular-hotel__item-name">
                   {name}
                    
                </h1>
                <div className="popular-hotel__item-show-more">
                    <p className="popular-hotel__item-show-more-text">узнать подробнее</p>
                    <img className="popular-hotel__item-show-more-image" src={more} alt="" />
                </div>
            </div>
        </div>
    </div>
   </div>
    
   </>
  )
}
export default PopularHotelsItem
