import React, { useEffect, useState } from 'react'
import './HotelCard.css'
import pic from '../../assets/images/indonesia3.jpg'
import downArr from '../../assets/icons/downCard.svg'
import Button from '../Button/Button'
import { useAppDispatch, useAppSelector } from '../../hook'
import { boolPopUpFood, boolPopUpRoom, boolPopUpTouristsCard ,swapeChoosenRoom,swapeChoosenFood} from '../../store/travelSlice'
import galochk from '../../assets/icons/addGalochka.svg'
import user from '../../assets/icons/user.svg'
import comfort from '../../assets/images/comfort-room.png'
import db from '../../../db.json'
import { useLocation } from 'react-router-dom'
import TourItem from '../TourItem/TourItem'
export default function HotelCardZ() {
    console.log('hot')
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    interface AvailableRoom {
        nameRoom: string;
        plusesRoom: string[];
        addPrice: number;
      }
      
      interface GeoPosition {
        near: string[];
        communication: string[];
        distanceToAirPort: string[];
      }
      
      interface About {
        inGeneral: string[];
        sportAndEntertaiment: string[];
        swimmingPool: string[];
        spa: string[];
        services: string[];
        contacts: string[];
      }
      
      interface FoodCategory {
        pluses: string[];
      }
      
      interface FoodAllInclusive extends FoodCategory {
        addPrice: number;
      }
      
      interface Food {
        places: string[];
        baseFoodCategory: FoodCategory;
        foodAllInClusive: FoodAllInclusive;
      }
      
      interface Resort {
        id:number;
        name: string;
        country: string;
        image: string;
        flyOut: string;
        rating: number;
        basePrice: number;
        time: string;
        timeNumber: string;
        startTime: number;
        days: number;
        reasonWhy: string;
        fastPluses: string[];
        availableRooms: AvailableRoom[];
        geoPosition: GeoPosition;
        beaches: string[];
        about: About;
        forKids: string[];
        food: Food;
      }
    interface Hotel{
        id:number;
        name: string;
        country:string;
        image:string;
        flyOut:string,
        rating:number;
        tours:Resort[]
    }
    const allTours = db.hotels;
    const [needTour, setNeedTour] = useState<Hotel[]>([]);
    
   
    
    const dis=useAppDispatch()
   

  
    const storedValue = localStorage.getItem('2');
    const idH = storedValue ? parseInt(storedValue, 10) : 0;
    useEffect(() => {
        const foundTour = allTours.find(hotel => hotel.id === idH);
        if (foundTour) {
            setNeedTour([foundTour]);
        }
    }, [idH]);

    console.log(needTour)   
    
    
    function minPriceHotel(){
        let minn=999999999
        needTour[0]?needTour[0].tours.forEach(i=>{
            if(i.basePrice<minn){
                minn=i.basePrice
            }
        }):""

        return minn

        
    }
   
  return (
    <>
    <div className="hotel-card">
        <div className="hotel-cardH__container">
                <div className="hotel-card__nav">
                    <p className='hotel-card__nav-text hotel-card__nav-text--grey'>Главная /</p>
                    <p className='hotel-card__nav-text'>Подбор отеля</p>
                </div>
                <div className="hotel-card__main">
                    
                    <div className="hotel-cardH__main-up">
                        <div className="hotel-card__gallery">
                            <div className="hotel-card__gallery-main">
                                <img className='hotel-cardH__gallery-main-img' src={pic} alt="" />
                            </div>
                            <div className="hotel-card__gallery-others">
                                <img className='hotel-cardH__gallery-others-img' src={pic} alt="" />
                                <img className='hotel-cardH__gallery-others-img' src={pic} alt="" />
                                <img className='hotel-cardH__gallery-others-img' src={pic} alt="" />
                                <img className='hotel-cardH__gallery-others-img' src={pic} alt="" />
                            </div>
                        </div>
                        
                        <div className="hotel-card__info">
                            <p className="hotel-card__info-country">{needTour[0]?needTour[0].country:''}</p>
                            <h2 className="hotel-card__info-name">{needTour[0]?needTour[0].name:""}</h2>
                            <div className="hotel-card__info-rate">
                                <div className="hotel-card__info-rating">
                                    <p className='hotel-card__info-rating-text'>{needTour[0]?needTour[0].rating:""}</p>
                                </div>
                                <p>250 отзывов</p>
                                
                            </div>
                            <div className="hotel-card__yours-price">
                                <div className="hotel-card__yours-price-container hotel-card__yours-price--left-none">
                                    <h2 className='hotel-card__yours-price-title hotel-card__yours-price-title--none'>Твой выбор</h2>
                                    <p><span className='hotel-card__yours-price-text strong'>от {minPriceHotel()}</span>/ за 1 человека</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="hotel-card__main-why">
                        <div className="hotel-cardH__main-why-container">
                        <h2 className='hotel-card__main-why-title'>ПОЧЕМУ СТОИТ ВЫБРАТЬ ЭТОТ ОТЕЛЬ</h2>
                        <p className='hotel-card__main-why-text' >{needTour[0]?needTour[0].tours[0].reasonWhy:''} </p>
                        <div className="hotel-card__main-fast-pluses">
                        {needTour[0]?needTour[0].tours[0].fastPluses.map((item)=>(
                            <div className="hotel-card__main-fast-pluse">
                            <img src={galochk} alt="" />
                            <p className='hotel-card__main-fast-pluse-text'>{item}</p>
                        </div>
                        )):''}
                            
                            
                        </div>
                        </div>
                        
                    </div>
                    <div className="hotel-card__main-rooms">
                        <div className="hotel-cardH__main-rooms-container">
                            <h2 className='hotel-card__main-rooms-title'>ДОСТУПНЫЕ НОМЕРА</h2>
                            {needTour[0]?needTour[0].tours[0].availableRooms.map((item)=>(
                                <div className="hotel-card__main-room">
                                <img className='hotel-card__main-room-img' src={comfort} alt="" />
                                <div className="hotel-card__main-room-info">
                                    <div className="hotel-card__main-room-info-container">
                                        <div className="hotel-card__main-room-people">
                                            <h3 className='hotel-card__main-room-name'>{item.nameRoom}</h3>
                                            <div className="hotel-card__main-room-people-amount">
                                                <img src={user} alt="" />
                                                <img src={user} alt="" />
                                                <p>2 человека</p>
                                            </div>
                                        </div>
                                        
                                        <div className="hotel-card__main-room-pluses">
                                            {item.plusesRoom.map((plus)=>(
                                                 <div className="hotel-card__main-room-pluse">
                                                    <img className='hotel-card__main-room-pluse-image' src={galochk} alt="" />
                                                    <p>{plus}</p>
                                                </div>
                                            ))}
                                           
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )):''}
                            
                          
                            
                        </div>
                    </div>
                    <div className="hotel-card__main-geo">
                        <div className="hotel-card__main-geo-container">
                            <h2 className='hotel-card__main-geo-title'>РАСПОЛОЖЕНИЕ ОТЕЛЯ</h2>
                            <div className="hotel-card__main-geo-main">
                                <div className="hotel-card__main-geo-part">
                                    <h4 className='hotel-card__main-geo-part-title'>Окрестности</h4>
                                    {needTour[0]?needTour[0].tours[0].geoPosition.near.map(gN=>(
                                        <div className="hotel-card__main-geo-part-item">
                                        <div className="circle"></div>
                                        <p className="hotel-card__main-geo-part-item-text">{gN}</p>
                                    </div>
                                    )):''}
                                    
                                    
                                </div>
                                <div className="hotel-card__main-geo-part">
                                    <h4 className='hotel-card__main-geo-part-title'>Коммуникация</h4>
                                    {needTour[0]?needTour[0].tours[0].geoPosition.communication.map(gC=>(
                                        <div className="hotel-card__main-geo-part-item">
                                        <div className="circle"></div>
                                        <p className="hotel-card__main-geo-part-item-text">{gC}</p>
                                    </div>
                                    )):''}
                                    
                                    
                                </div>
                                <div className="hotel-card__main-geo-part hotel-card__main-geo-part--grid-down">
                                    <h4 className='hotel-card__main-geo-part-title'>Расстояние от аэропорта</h4>
                                    {needTour[0]?needTour[0].tours[0].geoPosition.distanceToAirPort.map(gD=>(
                                        <div className="hotel-card__main-geo-part-item">
                                        <div className="circle"></div>
                                        <p className="hotel-card__main-geo-part-item-text">{gD}</p>
                                    </div>
                                    )):''}
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hotel-card__main-beach">
                        <div className="hotel-card__main-beach-container">
                            <h2>ПЛЯЖИ</h2>
                            <div className="hotel-card__main-beach-main">
                                <h4>Пляжи и отели</h4>
                                <div className="hotel-card__main-beach-items">
                                    {needTour[0]?needTour[0].tours[0].beaches.map(b=>(
                                        <div className="hotel-card__main-beach-item">
                                        <div className="circle"></div>
                                        <p className='hotel-card__main-beach-item-text'>{b}</p>
                                    </div>
                                    )):''}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hotel-cardH__main-about">
                        <div className="hotel-card__main-about-container">
                            <h2>ОБ ОТЕЛЕ</h2>
                            <div className="hotel-card__main-about-list">
                                <div className="hotel-card__main-about-list-item">
                                    <div className="hotel-card__main-about-list-item-container">
                                        <div className="hotel-card__main-about-list-item-title">
                                            <h4 className='hotel-card__main-about-list-item-title-text'>В ОБЩЕМ</h4>
                                        </div>
                                        <div className="hotel-card__main-about-list-item-pluses">
                                            {needTour[0]?needTour[0].tours[0].about.inGeneral.map(g=>(
                                                <div className="hotel-card__main-about-list-item-pluse">
                                                <div className="circle"></div>
                                                <p className="hotel-card__main-about-list-item-pluse-text">
                                                    {g}
                                                </p>
                                            </div>
                                            )):""}
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="hotel-card__main-about-list-item">
                                    <div className="hotel-card__main-about-list-item-container">
                                        <div className="hotel-card__main-about-list-item-title">
                                            <h4 className='hotel-card__main-about-list-item-title-text'>СПОРТ И РАЗВЛЕЧЕНИЯ</h4>
                                        </div>
                                        <div className="hotel-card__main-about-list-item-pluses">
                                        {needTour[0]?needTour[0].tours[0].about.sportAndEntertaiment.map(s=>(
                                                <div className="hotel-card__main-about-list-item-pluse">
                                                <div className="circle"></div>
                                                <p className="hotel-card__main-about-list-item-pluse-text">
                                                    {s}
                                                </p>
                                            </div>
                                            )):""}
                                        </div>
                                    </div>
                                </div>
                                <div className="hotel-card__main-about-list-item">
                                    <div className="hotel-card__main-about-list-item-container">
                                        <div className="hotel-card__main-about-list-item-title">
                                            <h4 className='hotel-card__main-about-list-item-title-text'>БАССЕЙН</h4>
                                        </div>
                                        <div className="hotel-card__main-about-list-item-pluses">
                                        {needTour[0]?needTour[0].tours[0].about.swimmingPool.map(sw=>(
                                                <div className="hotel-card__main-about-list-item-pluse">
                                                <div className="circle"></div>
                                                <p className="hotel-card__main-about-list-item-pluse-text">
                                                    {sw}
                                                </p>
                                            </div>
                                            )):""}
                                        </div>
                                    </div>
                                </div>
                                <div className="hotel-card__main-about-list-item">
                                    <div className="hotel-card__main-about-list-item-container">
                                        <div className="hotel-card__main-about-list-item-title">
                                            <h4 className='hotel-card__main-about-list-item-title-text'>СПА</h4>
                                        </div>
                                        <div className="hotel-card__main-about-list-item-pluses">
                                        {needTour[0]?needTour[0].tours[0].about.spa.map(sp=>(
                                                <div className="hotel-card__main-about-list-item-pluse">
                                                <div className="circle"></div>
                                                <p className="hotel-card__main-about-list-item-pluse-text">
                                                    {sp}
                                                </p>
                                            </div>
                                            )):""}
                                        </div>
                                    </div>
                                </div>
                                <div className="hotel-card__main-about-list-item">
                                    <div className="hotel-card__main-about-list-item-container">
                                        <div className="hotel-card__main-about-list-item-title">
                                            <h4 className='hotel-card__main-about-list-item-title-text'>УСЛУГИ</h4>
                                        </div>
                                        <div className="hotel-card__main-about-list-item-pluses">
                                        {needTour[0]?needTour[0].tours[0].about.services.map(s=>(
                                                <div className="hotel-card__main-about-list-item-pluse">
                                                <div className="circle"></div>
                                                <p className="hotel-card__main-about-list-item-pluse-text">
                                                    {s}
                                                </p>
                                            </div>
                                            )):""}
                                        </div>
                                    </div>
                                </div>
                                <div className="hotel-card__main-about-list-item hotel-card__main-about-list-item--no-border">
                                    <div className="hotel-card__main-about-list-item-container">
                                        <div className="hotel-card__main-about-list-item-title">
                                            <h4 className='hotel-card__main-about-list-item-title-text'>КОНТАКТЫ</h4>
                                        </div>
                                        <div className="hotel-card__main-about-list-item-pluses">
                                        {needTour[0]?needTour[0].tours[0].about.contacts.map(c=>(
                                                <div className="hotel-card__main-about-list-item-pluse">
                                                <div className="circle"></div>
                                                <p className="hotel-card__main-about-list-item-pluse-text">
                                                    {c}
                                                </p>
                                            </div>
                                            )):""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hotel-cardH__main-about">
                        <div className="hotel-card__main-about-container">
                            <h2>ДЛЯ ДЕТЕЙ</h2>
                            <div className="hotel-card__main-about-list">
                                <div className="hotel-card__main-about-list-item hotel-card__main-about-list-item--no-border">
                                    <div className="hotel-card__main-about-list-item-container">
                                        <div className="hotel-card__main-about-list-item-title">
                                            <h4 className='hotel-card__main-about-list-item-title-text'>УДОБСТВА</h4>
                                        </div>
                                        <div className="hotel-card__main-about-list-item-pluses">
                                        {needTour[0]?needTour[0].tours[0].forKids.map(k=>(
                                                <div className="hotel-card__main-about-list-item-pluse">
                                                <div className="circle"></div>
                                                <p className="hotel-card__main-about-list-item-pluse-text">
                                                    {k}
                                                </p>
                                            </div>
                                            )):""}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="hotel-card__main-food">
                        <div className="hotel-card__main-food-container">
                            <h2 className='hotel-card__main-food-title'>ЕДА</h2>
                            <div className="hotel-card__main-food-levels">
                                <div className="hotel-cardH__main-food-level">
                                    <div className="hotel-card__main-food-level-container">
                                        <div className="hotel-card__main-food-level-info">
                                            <h3>Bed and Breakfast</h3>
                                            <div className="hotel-card__main-food-level-pluses">
                                                {needTour[0]?needTour[0].tours[0].food.baseFoodCategory.pluses.map(pl=>(
                                                     <div className="hotel-card__main-food-level-pluse">
                                                     <img src={galochk} alt="" />
                                                     <p className='hotel-card__main-food-level-pluse-text'>{pl}</p>
                                                 </div>
                                                )):''}
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="hotel-cardH__main-food-level">
                                    <div className="hotel-card__main-food-level-container">
                                        <div className="hotel-card__main-food-level-info">
                                            <h3>All Inclusive</h3>
                                            <div className="hotel-card__main-food-level-pluses">
                                            {needTour[0]?needTour[0].tours[0].food.foodAllInClusive.pluses.map(pl=>(
                                                     <div className="hotel-card__main-food-level-pluse">
                                                     <img src={galochk} alt="" />
                                                     <p className='hotel-card__main-food-level-pluse-text'>{pl}</p>
                                                 </div>
                                                )):''}
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hotel-card__main-tours">
                        <h2 className='hotel-card__main-tours-title'>ТУРЫ</h2>
                        {needTour[0]?needTour[0].tours.map(t=>(
                            <TourItem idTour={t.id} imageHotel={t.image} coutry={t.country} nameHotel={t.name} rating={t.rating} date={t.time} add={t.fastPluses} price={t.basePrice}></TourItem>
                        )):''}
                    </div>
                   
                </div>
        </div>
    </div>
    </>
  )
}
