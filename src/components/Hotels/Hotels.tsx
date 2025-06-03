import React from 'react'
import db from '../../../db.json'
import { Link } from 'react-router-dom'
import './Hotels.css'

import back from '../../assets/images/homeBack.png'
import ScrollBar from '../ScrollBar/ScrollBar'
import filter from '../../assets/icons/filters.svg'
import HotelItemForAll from '../HotelItemForAll/HotelItemForAll'
export default function Hotels() {
    console.log(db)
    function minPrice(i1:number,i2:number){
        if(i1<i2){
            return i1
        }
        else{
            return i2
        }

    }
  return (
   <>
   <div className="hotels">
    <div className="hotels__container">
        <div style={{background:`url(${back})`}} className="hotels__intro">
            <div className="hotels__intro-container">
                <h1 className='hotels__intro-title'>ОТЕЛИ</h1>
                <p className='hotels__intro-sub-title'>ИДЕАЛЬНЫЕ ОТЕЛИ ДЛЯ ВАШЕГО ОТДЫХА</p>
            </div>
        </div>
        <div className="hotels__nav">
            <p className='hotels__nav-text hotels__nav-text--grey'>Главная/</p>
            <p className='hotels__nav-text'>Подбор отеля</p>
        </div>
        <div className="hotels__collection">
            <div className="hotels__collection-container">
                <h1 className='hotels__collection-title'>РЕКОМЕНДАЦИИ</h1>
                <ScrollBar type='hotel-recomend'></ScrollBar>
            </div>
            
            
        </div>
        <div className="hotels__collection bg-grey">
            <div className="hotels__collection-container">
                
                <h1 className='hotels__collection-title'>БЕСТСЕЛЛЕРЫ</h1>
                <p className='hotels__collection-text'>ОТЕЛИ, КОТОРЫЕ ЧАЩЕ ВСЕГО БРОНИРУЮТ НАШИ КЛИЕНТЫ</p>
                <ScrollBar type='hotel-recomend'></ScrollBar>
            </div>
        </div>

        <div className="hotels__collection">
            <div className="hotels__collection-container">
                <h1 className='hotels__collection-title'>САМЫЕ РЕЙТИНГОВЫЕ</h1>
                <p className='hotels__collection-text'>ЭТИ ОТЕЛИ СОБРАЛИ БОЛЬШЕ ВСЕГО МНЕНИЙ И ОЦЕНОК ОТ НАШИХ КЛИЕНТОВ</p>
                
                <ScrollBar type='hotel-recomend'></ScrollBar>
            </div>
        </div>

        <div className="hotel-all">
            <div className="hotel-all__container">
                <h1 className='hotel-all__text'>ЕЩЕ ОТЕЛИ</h1>
                <div className="hotel-all__filter-section">
                    <div className="hotel-all__filter-section-text-outer">
                        <p className='hotel-all__filter-section-text'>ВОСПОЛЬЗУЙСЯ ФИЛЬТРОМ И НАЙДИ ОТЕЛЬ МЕЧТЫ</p>
                    </div>
                    <div className="hotel-all__filter-section-button-outer">
                        <button className='hotel-all__filter-section-button'>
                            <img className='hotel-all__filter-section-button-img' src={filter} alt="" />
                            <p className='hotel-all__filter-section-button-text'>Фильтры</p>
                        </button>
                    </div>
                    

                </div>
                <div className="hotel-all__items">
                    {db.hotels.map(h=>(
                        
                        <HotelItemForAll image={h.image} country={h.country} name={h.name} rating={h.rating} pluses={h.tours[0].fastPluses} price={minPrice(h.tours[0].basePrice,h.tours[1].basePrice)}></HotelItemForAll>
                    ))}
                </div>
            </div>
        </div>
    </div>
   </div>
   
   </>
  )
}
