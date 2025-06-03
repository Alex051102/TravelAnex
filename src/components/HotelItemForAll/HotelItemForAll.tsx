import React from 'react'
import galochk from '../../assets/icons/addGalochka.svg'
import Button from '../Button/Button'
import './HotelItemForAll.css'
const HotelItemForAll: React.FC <{country:string ,name:string ,image:string, rating:number,pluses:string[],price:number}>=({country,name,image,rating,pluses,price})=>{
  return (
    <>
        <div className="hotel-all__item">
            <img className='hotel-all__item-image' src={image} alt="" />
            <div className="hotel-all__item-main">
                <div className="hotel-all__item-main-container">
                    <p>{country}</p>
                    <h3>{name}</h3>
                    <div className="hotel-all__item-rate">
                        <div className="hotel-all__item-rating">
                            
                                <p className='hotel-all__item-rating-text'>{rating}</p>
                      
                            
                        </div>
                        <p>250 отзывов</p>
                   
                    </div>
                    <div className="hotel-all__item-pluses">
                            {pluses.map(p=>(
                                <div className="hotel-all__item-pluse">
                                    <img src={galochk} alt="" />
                                    <p>{p}</p>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
            <div className="hotel-all__item-price">
                <div className="hotel-all__item-price-container">
                    <p className='hotel-all__item-price-text'>от {price} ₽</p>
                    <div className="hotel-all__item-price-button">
                        <Button color='red' type='hotel-all-width' text='ПОДРОБНЕЕ'></Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default HotelItemForAll
