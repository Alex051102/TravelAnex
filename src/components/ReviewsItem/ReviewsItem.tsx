import React from 'react'
import "./ReviewsItem.css"
import stars from "../../assets/icons/5stars.svg"
const ReviewsItem:React.FC<{image:string,from:string,to:string,comment:string}>=({image,from,to,comment})=>{
  return (
   <>
   <div className="reviews__item">
    <div className="reviews__item-container">
        <img className='reviews__item-image' src={image} alt="" />
        <img className='reviews__item-stars' src={stars} alt="" />
        <p className='reviews__item-text-small'>{from}</p>
        <p className='reviews__item-text-small'>{to}</p>
        <p className='reviews__item-text'>{comment}</p>
    </div>
   </div>
   </>
  )
}
export default ReviewsItem
