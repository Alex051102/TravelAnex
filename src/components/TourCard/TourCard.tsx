import React, { useEffect, useState } from 'react'
import './TourCard.css'
import pic from '../../assets/images/indonesia3.jpg'
import downArr from '../../assets/icons/downCard.svg'
import Button from '../Button/Button'
import { useAppDispatch, useAppSelector } from '../../hook'
import { boolPopUpFood, boolPopUpRoom, boolPopUpTouristsCard ,swapeChoosenRoom,swapeChoosenFood,setFinishCountry,setFinishImage,setFinishName,setFinishFood,setFinishRoom,setFinishTotal,setFinishDate,setFinishTourists} from '../../store/travelSlice'
import galochk from '../../assets/icons/addGalochka.svg'
import user from '../../assets/icons/user.svg'
import comfort from '../../assets/images/comfort-room.png'
import db from '../../../db.json'
import { Link, useLocation } from 'react-router-dom'
export default function TourCard() {
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
    const allTours = db.hotels.flatMap(hotel => hotel.tours);
    const [needTour, setNeedTour] = useState<Resort[]>([]);
    const idTour=useAppSelector(state=>state.travel.idTour);
    const [colorButton1,setColorButton1]=useState('black')
    const [colorButton2,setColorButton2]=useState('black')

    const [colorButton3,setColorButton3]=useState('black')
    const [colorButton4,setColorButton4]=useState('black')
    const totalPrice=needTour[0]?needTour[0].basePrice:0;
    const [roomAddPrice,setRoomAddPrice]=useState(0)
    const [foodAddPrice,setFoodAddPrice]=useState(0)
    const dis=useAppDispatch()
    const children=useAppSelector(state=>state.travel.choosenTouristsChildCard)
    const adult=useAppSelector(state=>state.travel.choosenTouristsAdultCard)
    const [tourists,setTourists]=useState(1)

    const [nameRoom,setNameRoom]=useState('Comfort Room')
    const room=useAppSelector(state=>state.travel.choosenRoom)

    const [nameFood,setNameFood]=useState('Bed and Breakfast')
    const food=useAppSelector(state=>state.travel.choosenFood)
    const storedValue = localStorage.getItem('1');
    const idT = storedValue ? parseInt(storedValue, 10) : 0;
    useEffect(() => {
        const foundTour = allTours.find(tour => tour.id === idT);
        if (foundTour) {
            setNeedTour([foundTour]);
        }
    }, [idT]);

    console.log(needTour)
   /*  useEffect(()=>{
        console.log(room)
    },[room]) */
    
    useEffect(()=>{
        setTourists(c=>c=children+adult)
    },[adult,children])

    useEffect(()=>{
        if(room==0){
            setRoomAddPrice(0)
            setNameRoom('Comfort Room')
        }
        else{
            setRoomAddPrice(room)
            setNameRoom('Premium Room')
    }},[room])

    useEffect(()=>{
        if(food==0){
            setFoodAddPrice(0)
            setNameFood('Bed and Breakfast')
        }
        else{
            setFoodAddPrice(food)
            setNameFood('All Inclusive')
    }},[food])
        

    function swapeRoom(type:string){
        if(type=='comfort'){
            dis(swapeChoosenRoom(0))
            setColorButton1('white')
            setColorButton2('black')
            
        }
        if(type=='premium'){
            dis(swapeChoosenRoom(needTour[0]?needTour[0].availableRooms[1].addPrice:0))
            setColorButton1('black')
            setColorButton2('white')
            
        }
    }

    function swapeFood(type:string){
        if(type=='comfort'){
            dis(swapeChoosenFood(0))
            setColorButton3('white')
            setColorButton4('black')
            
        }
        if(type=='premium'){
            dis(swapeChoosenFood(needTour[0]?needTour[0].food.foodAllInClusive.addPrice:0))
            setColorButton3('black')
            setColorButton4('white')
            
        }
    }

    function sendFinishData(){
  

       

        
        localStorage.setItem('finishCountry',needTour[0]?needTour[0].country:'')
    
        localStorage.setItem('finishName',needTour[0]?needTour[0].name:'')
   
        localStorage.setItem('finishImage',needTour[0]?needTour[0].image:'')
   
        localStorage.setItem('finishFood',nameFood)
  
        localStorage.setItem('finishRoom',nameRoom)
    
        localStorage.setItem('finishTotal',(tourists*(totalPrice+foodAddPrice+roomAddPrice)).toString())
   
        localStorage.setItem('finishTourists',tourists.toString())
    
        localStorage.setItem('finishDate',needTour[0]?needTour[0].time:'')
        
    }
   
  return (
    <>
    <div className="hotel-card">
        <div className="hotel-card__container">
                <div className="hotel-card__nav">
                    {/* <p className='hotel-card__nav-text hotel-card__nav-text--grey'>Главная /</p>
                    <p className='hotel-card__nav-text'>Подбор тура</p> */}
                </div>
                <div className="hotel-card__main">
                    
                    <div className="hotel-card__main-up">
                        <div className="hotel-card__gallery">
                            <div className="hotel-card__gallery-main">
                                <img className='hotel-card__gallery-main-img' src={pic} alt="" />
                            </div>
                            <div className="hotel-card__gallery-others">
                                <img className='hotel-card__gallery-others-img' src={pic} alt="" />
                                <img className='hotel-card__gallery-others-img' src={pic} alt="" />
                                <img className='hotel-card__gallery-others-img' src={pic} alt="" />
                                <img className='hotel-card__gallery-others-img' src={pic} alt="" />
                            </div>
                        </div>
                        <div className="hotel-card__yours">
                            <div className="hotel-card__yours-price hotel-card__yours-price--none">
                                <div className="hotel-card__yours-price-container">
                                    <h2 className='hotel-card__yours-price-title'>Твой выбор</h2>
                                    <p><span className='hotel-card__yours-price-text strong'>{needTour[0]?needTour[0].basePrice:""}</span>/ за 1 человека</p>
                                </div>
                                
                            </div>
                            <div className="hotel-card__yours-item hotel-card__yours-date">
                                <div className="hotel-card__yours-item-container">
                                    <p className='strong'>{needTour[0]?needTour[0].time:""}</p>
                                   
                                </div>
                                
                            </div>
                            <div onClick={()=>dis(boolPopUpTouristsCard(true))} className="hotel-card__yours-item hotel-card__yours-people">
                                <div className="hotel-card__yours-item-container">
                                    <p>Туристы: <span className='strong'>{tourists}</span></p>
                                    <div className="hotel-card__yours-item-arrow">
                                        <img src={downArr} alt="" />
                                    </div>
                                </div>
                                
                            </div>
                            <div onClick={()=>dis(boolPopUpRoom(true))} className="hotel-card__yours-item hotel-card__yours-room">
                                <div className="hotel-card__yours-item-container">
                                    <p>Номер: <span className='strong'>{nameRoom}</span></p>
                                    <div className="hotel-card__yours-item-arrow">
                                        <img src={downArr} alt="" />
                                    </div>
                                </div>
                                
                            </div>
                            <div onClick={()=>dis(boolPopUpFood(true))} className="hotel-card__yours-item hotel-card__yours-food">
                                <div className="hotel-card__yours-item-container">
                                    <p>Питание: <span className='strong'>{nameFood}</span></p>
                                    <div className="hotel-card__yours-item-arrow">
                                        <img src={downArr} alt="" />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="hotel-card__yours-item hotel-card__yours-fly">
                                <div className="hotel-card__yours-item-container">
                                    <p>Вылет: <span className='strong'>Москва, Шереметьево</span></p>
                                    <div className="hotel-card__yours-item-arrow">
                                        <img src={downArr} alt="" />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="hotel-card__yours-total">
                                <div className="hotel-card__yours-total-container">
                                <p className='hotel-card__yours-total-text'>{`ИТОГ:${tourists*(totalPrice+foodAddPrice+roomAddPrice)} ₽`}`</p>
                                <div className="hotel-card__yours-total-button" onClick={sendFinishData}>
                                    <Link to='/finish'><Button text='Оставить заявку' type='' color='red'></Button></Link>
                                </div>
                                </div>
                              
                                
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
                                    <p><span className='hotel-card__yours-price-text strong'>{totalPrice}</span>/ за 1 человека</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="hotel-card__main-why">
                        <div className="hotel-card__main-why-container">
                        <h2 className='hotel-card__main-why-title'>ПОЧЕМУ СТОИТ ВЫБРАТЬ ЭТОТ ОТЕЛЬ</h2>
                        <p className='hotel-card__main-why-text' >{needTour[0]?needTour[0].reasonWhy:''} </p>
                        <div className="hotel-card__main-fast-pluses">
                        {needTour[0]?needTour[0].fastPluses.map((item)=>(
                            <div className="hotel-card__main-fast-pluse">
                            <img src={galochk} alt="" />
                            <p className='hotel-card__main-fast-pluse-text'>{item}</p>
                        </div>
                        )):''}
                            
                            
                        </div>
                        </div>
                        
                    </div>
                    <div className="hotel-card__main-rooms">
                        <div className="hotel-card__main-rooms-container">
                            <h2 className='hotel-card__main-rooms-title'>ДОСТУПНЫЕ НОМЕРА</h2>
                            {needTour[0]?needTour[0].availableRooms.map((item)=>(
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
                                        <div className="hotel-card__main-room-choosen">
                                            <div className="hotel-card__main-room-choosen-button-outer">
                                                {item.addPrice==0?<>
                                                    <button style={{backgroundColor:`${colorButton1}`,color:`${colorButton1=='black'?'white':'black'}`}} onClick={()=>swapeRoom('comfort')} className='hotel-card__main-room-choosen-button'>Выбрать</button>
                                                <p>{item.addPrice==0?'в цене':`+ ${item.addPrice} ₽`}</p>
                                                </>:<><button style={{backgroundColor:`${colorButton2}`,color:`${colorButton2=='black'?'white':'black'}`}} onClick={()=>swapeRoom('premium')} className='hotel-card__main-room-choosen-button'>Выбрать</button>
                                                <p>{item.addPrice==0?'в цене':`+ ${item.addPrice} ₽`}</p></>}
                                                
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
                                    {needTour[0]?needTour[0].geoPosition.near.map(gN=>(
                                        <div className="hotel-card__main-geo-part-item">
                                        <div className="circle"></div>
                                        <p className="hotel-card__main-geo-part-item-text">{gN}</p>
                                    </div>
                                    )):''}
                                    
                                    
                                </div>
                                <div className="hotel-card__main-geo-part">
                                    <h4 className='hotel-card__main-geo-part-title'>Коммуникация</h4>
                                    {needTour[0]?needTour[0].geoPosition.communication.map(gC=>(
                                        <div className="hotel-card__main-geo-part-item">
                                        <div className="circle"></div>
                                        <p className="hotel-card__main-geo-part-item-text">{gC}</p>
                                    </div>
                                    )):''}
                                    
                                    
                                </div>
                                <div className="hotel-card__main-geo-part hotel-card__main-geo-part--grid-down">
                                    <h4 className='hotel-card__main-geo-part-title'>Расстояние от аэропорта</h4>
                                    {needTour[0]?needTour[0].geoPosition.distanceToAirPort.map(gD=>(
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
                                    {needTour[0]?needTour[0].beaches.map(b=>(
                                        <div className="hotel-card__main-beach-item">
                                        <div className="circle"></div>
                                        <p className='hotel-card__main-beach-item-text'>{b}</p>
                                    </div>
                                    )):''}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hotel-card__main-about">
                        <div className="hotel-card__main-about-container">
                            <h2>ОБ ОТЕЛЕ</h2>
                            <div className="hotel-card__main-about-list">
                                <div className="hotel-card__main-about-list-item">
                                    <div className="hotel-card__main-about-list-item-container">
                                        <div className="hotel-card__main-about-list-item-title">
                                            <h4 className='hotel-card__main-about-list-item-title-text'>В ОБЩЕМ</h4>
                                        </div>
                                        <div className="hotel-card__main-about-list-item-pluses">
                                            {needTour[0]?needTour[0].about.inGeneral.map(g=>(
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
                                        {needTour[0]?needTour[0].about.sportAndEntertaiment.map(s=>(
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
                                        {needTour[0]?needTour[0].about.swimmingPool.map(sw=>(
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
                                        {needTour[0]?needTour[0].about.spa.map(sp=>(
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
                                        {needTour[0]?needTour[0].about.services.map(s=>(
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
                                        {needTour[0]?needTour[0].about.contacts.map(c=>(
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
                    <div className="hotel-card__main-about">
                        <div className="hotel-card__main-about-container">
                            <h2>ДЛЯ ДЕТЕЙ</h2>
                            <div className="hotel-card__main-about-list">
                                <div className="hotel-card__main-about-list-item hotel-card__main-about-list-item--no-border">
                                    <div className="hotel-card__main-about-list-item-container">
                                        <div className="hotel-card__main-about-list-item-title">
                                            <h4 className='hotel-card__main-about-list-item-title-text'>УДОБСТВА</h4>
                                        </div>
                                        <div className="hotel-card__main-about-list-item-pluses">
                                        {needTour[0]?needTour[0].forKids.map(k=>(
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
                                <div className="hotel-card__main-food-level">
                                    <div className="hotel-card__main-food-level-container">
                                        <div className="hotel-card__main-food-level-info">
                                            <h3>Bed and Breakfast</h3>
                                            <div className="hotel-card__main-food-level-pluses">
                                                {needTour[0]?needTour[0].food.baseFoodCategory.pluses.map(pl=>(
                                                     <div className="hotel-card__main-food-level-pluse">
                                                     <img src={galochk} alt="" />
                                                     <p className='hotel-card__main-food-level-pluse-text'>{pl}</p>
                                                 </div>
                                                )):''}
                                                
                                            </div>
                                        </div>
                                        <div className="hotel-card__main-food-level-price">
                                            <button style={{backgroundColor:`${colorButton3}`,color:`${colorButton3=='black'?'white':'black'}`}} onClick={()=>swapeFood('comfort')} className='hotel-card__main-food-level--button'>Выбрать</button>
                                            <p>В цене</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hotel-card__main-food-level">
                                    <div className="hotel-card__main-food-level-container">
                                        <div className="hotel-card__main-food-level-info">
                                            <h3>All Inclusive</h3>
                                            <div className="hotel-card__main-food-level-pluses">
                                            {needTour[0]?needTour[0].food.foodAllInClusive.pluses.map(pl=>(
                                                     <div className="hotel-card__main-food-level-pluse">
                                                     <img src={galochk} alt="" />
                                                     <p className='hotel-card__main-food-level-pluse-text'>{pl}</p>
                                                 </div>
                                                )):''}
                                            </div>
                                        </div>
                                        <div className="hotel-card__main-food-level-price">
                                            <button style={{backgroundColor:`${colorButton4}`,color:`${colorButton4=='black'?'white':'black'}`}} onClick={()=>swapeFood('premium')} className='hotel-card__main-food-level--button'>Выбрать</button>
                                            <p>{needTour[0]?`+ ${needTour[0].food.foodAllInClusive.addPrice} ₽`:""}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}
