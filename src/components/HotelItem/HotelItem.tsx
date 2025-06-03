import React from 'react'
import "./HotelItem.css"
import galochk from '../../assets/icons/addGalochka.svg'
const HotelItem: React.FC <{country:string ,name:string ,image:string, rating:number,pluses:string[]}>=({country,name,image,rating,pluses})=>{
  return (
    <>
        <div className="hotel-item">
            <div className="hotel-item__container">
                <img className='hotel-item__image' src={image} alt="" />
                <div className="hotel-item__info">
                    <div className="hotel-item__info-container">
                        <div className="hotel-item__info-up">
                            <p className='hotel-item__info-country'>{country}</p>
                            <h3 className='hotel-item__info-name'>{name}</h3>
                        </div>
                        <div className="hotel-item__info-rate">
                            <div className="hotel-item__info-rating">
                                <p className='hotel-item__info-rating-text'>{rating}</p>
                            </div>
                            <p>522 отзывов</p>
                        </div>
                        <div className="hotel-item__info-pluses">
                            {pluses.map((k)=>(
                                <div className="hotel-item__info-pluse">
                                    <img src={galochk} alt="" />
                                    <p className='hotel-item__info-pluse-text'>{k}</p>
                                </div>
                            ))}
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HotelItem
