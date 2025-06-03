import React from 'react'
import Button from '../Button/Button'
import './TourItem.css'
import food from "../../assets/icons/food.svg"
import calendar from "../../assets/icons/calendar.svg"
import galochk from "../../assets/icons/addGalochka.svg"
import { Link } from 'react-router-dom'
import {swapeIdTour} from '../../store/travelSlice'
import { useAppDispatch } from '../../hook'
const TourItem:React.FC<{idTour:number,imageHotel:string,coutry:string, nameHotel:string, rating:number, date:string, add:Array<string>, price:number}>=({idTour,imageHotel,coutry, nameHotel, rating, date, add, price})=> {
    const dis=useAppDispatch()
    
    return (
    <>
    <Link to={`/tour/${idTour}`}>
    <div onClick={()=>localStorage.setItem('1',idTour.toString())} className="tours__card">
            <img className='tours__card-image' src={imageHotel} alt="" />
            <div className="tours__card-info">
                <div className="tours__card-info-container">
                    <div className="tours__card-info-main">
                        <div className="tours__card-info-main-all">
                            <div className="tours__card-info-main-all-up">
                                <p className="tours__card-info-country tours__card-text">{coutry}</p>
                                <p className="tours__card-info-hotel">{nameHotel}</p>
                                <div className="tours__card-info-rating">
                                    <div className="tours__card-info-rating-number"><p className='tours__card-info-rating-number-text'>{rating}</p></div>
                                    <p className="tours__card-info-rating-reviews tours__card-text">250 отзывов</p>
                                </div>
                                
                            </div>
                            <div className="tours__card-info-main-all-down">
                                <div className="tours__card-info-date">
                                    <img className='tours__card-info-img' src={calendar} alt="" />
                                    <p className='tours__card-info-date-text tours__card-text'>{date}</p>
                                </div>
                                <div className="tours__card-info-food">
                                    <img className='tours__card-food-img' src={food} alt="" />
                                    <p className='tours__card-info-food-text tours__card-text'>All Inclusive</p>
                                </div>
                            </div>
                        </div>
                        <div className="tours__card-info-main-additions">
                            <div className="tours__card-info-main-additions-container">
                            {add.map(plus=>(
                                <div className='tours__card-info-main-addition'>

                                    <img src={galochk} alt="" />
                                    <p className='tours__card-info-main-addition-text tours__card-text'>{plus}</p>
                                </div>
                            ))}
                            </div>
                           
                        </div>
                    </div>
                    <div className="tours__card-info-price">
                        <div className="tours__card-info-price-container">
                            <p className='tours__card-info-price-text'>
                                {price}₽ <span>/ за 1</span>
                            </p>
                            <div className="tours__card-info-price-button">
                                <Button color='red' text='ПОДРОБНЕЕ' type='card-width'></Button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Link>
        
    </>
  )
}

export default TourItem
