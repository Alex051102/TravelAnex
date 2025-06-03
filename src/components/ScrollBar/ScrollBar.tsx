import React, { useRef } from 'react';
import "./ScrollBar.css"
import HotToursItem from '../HotToursItem/HotToursItem'
import db from "../../../db.json"
import ReviewsItem from '../ReviewsItem/ReviewsItem';

import arrLeft from "../../assets/icons/Expand_left_double.svg"
import arrRight from "../../assets/icons/Expand_right_double.svg"
;
import HotelItem from '../HotelItem/HotelItem';
import { Link } from 'react-router-dom';
const ScrollBar: React.FC <{type:string}>=({type})=>{

  const reviews=[
    {
      image:"src/assets/images/review1.png",
      from:"МАРИЯ С. ИЗ МОСКВЫ",
      to:"Летала в Париж 20.07.23 в отель Ritz-Carlton ",
      comment:"Невероятное путешествие!Спасибо за организацию моей поездки в Париж. Все было просто идеально - от отелей до экскурсий. Не могу дождаться следующего приключения с вашей турфирмой!"
    }
    ,{
      image:"src/assets/images/review2.png",
      from:"АЛЕКСАНДР Г. ИЗ САНКТ-ПЕТЕРБУРГА",
      to:"Летал в Тайланд 10.05.23 в отель The Silver Palm Wellness Resort",
      comment:"Путешествие в Таиланд оказалось невероятным благодаря вашим услугам. Профессиональное планирование, отличные рекомендации по местам для посещения и великолепный выбор отелей. Обязательно вернусь к вам снова."
    },
    {
      image:"src/assets/images/review3.png",
      from:"ЕКАТЕРИНА Л. ИЗ ЕКАТЕРИНБУРГА",
      to:"Летала на Бали 12.08.23 в отель Hanging Gardens",
      comment:"Спасибо за незабываемый отдых на Бали! Все было под контролем, начиная с бронирования и заканчивая возвращением домой. Отличная коммуникация и внимание к деталям создали идеальное путешествие."
    },
    {
      image:"src/assets/images/review4.png",
      from:"ОЛЬГА И. ИЗ НОВОСИБИРСКА",
      to:"Летала на Бали 12.08.23 в отель Hanging Gardens",
      comment:"Ваша турфирма стала моим надежным проводником в мир :)После поездки в Японию я почувствовала себя настоящим путешественником. Отличная организация, забота о клиентах и интересные маршруты делают вас лучшими! Большое спасибо!."
    },{
      image:"src/assets/images/review3.png",
      from:"ЕКАТЕРИНА Л. ИЗ ЕКАТЕРИНБУРГА",
      to:"Летала на Бали 12.08.23 в отель Hanging Gardens",
      comment:"Спасибо за незабываемый отдых на Бали! Все было под контролем, начиная с бронирования и заканчивая возвращением домой. Отличная коммуникация и внимание к деталям создали идеальное путешествие."
    },
    {
      image:"src/assets/images/review4.png",
      from:"ОЛЬГА И. ИЗ НОВОСИБИРСКА",
      to:"Летала на Бали 12.08.23 в отель Hanging Gardens",
      comment:"Ваша турфирма стала моим надежным проводником в мир :)После поездки в Японию я почувствовала себя настоящим путешественником. Отличная организация, забота о клиентах и интересные маршруты делают вас лучшими! Большое спасибо!."
    },{
      image:"src/assets/images/review3.png",
      from:"ЕКАТЕРИНА Л. ИЗ ЕКАТЕРИНБУРГА",
      to:"Летала на Бали 12.08.23 в отель Hanging Gardens",
      comment:"Спасибо за незабываемый отдых на Бали! Все было под контролем, начиная с бронирования и заканчивая возвращением домой. Отличная коммуникация и внимание к деталям создали идеальное путешествие."
    },
    {
      image:"src/assets/images/review4.png",
      from:"ОЛЬГА И. ИЗ НОВОСИБИРСКА",
      to:"Летала на Бали 12.08.23 в отель Hanging Gardens",
      comment:"Ваша турфирма стала моим надежным проводником в мир :)После поездки в Японию я почувствовала себя настоящим путешественником. Отличная организация, забота о клиентах и интересные маршруты делают вас лучшими! Большое спасибо!."
    }

  ]
  const hotToursRef = useRef<HTMLDivElement>(null);
  const hotelRecomendRef = useRef<HTMLDivElement>(null);

  const currentRef = type === 'hot' ? hotToursRef : 
  type === 'hotel-recomend' ? hotelRecomendRef : 
  null;
  // Функция для плавной прокрутки
  const smoothScroll = (direction: 'left' | 'right') => {
   
    const cardElement = currentRef?.current;
    if (!cardElement) return;

    const scrollAmount = type=='hotel-recomend'?600:100; // Размер шага прокрутки
    const duration = 0; // Длительность анимации в миллисекундах

    const start = cardElement.scrollLeft;
    const end = direction === 'right' ? start + scrollAmount : start - scrollAmount;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Прогресс от 0 до 1
      cardElement.scrollLeft = start + (end - start) * easeInOutCubic(progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  

  // Кривая анимации (ease-in-out)
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };
  function render(){
    if(type=="hot"){
        return(
            <div className="hot-tours__items">
                <div className="hot-tours__items-container" ref={hotToursRef} tabIndex={0}>
                
               {db.hotels.map((country:any)=>(
                country.tours.map(((tour:any,i:number)=>(
                    i==0?<HotToursItem days={tour.days} image={country.image} basePrice={tour.basePrice} country={country.country} time={tour.time}></HotToursItem>
                    :""
                    
                )))
                
               ))}
               
                
                </div>
                
                
                <div className="hot-tours__navigation">

                </div>
            </div>
        )
    }
    if(type=="reviews"){
      return(
        <div className="reviews__items">
          <div className="reviews__items-container">
          {reviews.map(review=>(
            <ReviewsItem image={review.image} from={review.from} to={review.to} comment={review.comment}></ReviewsItem>
          ))}
          </div>
          
        </div>
      )
      
    }
    if(type=='hotel-recomend'){
      return(
        <div className="hotels-silder">
          <div className="hotels__slider-container" ref={hotelRecomendRef} tabIndex={0}>
            {db.hotels.map(h=>(
           
              <Link to={`/hotel/${h.id}`}><div onClick={()=>localStorage.setItem("2",h.id.toString())}><HotelItem country={h.country} name={h.name} image={h.image} rating={h.rating} pluses={h.tours[0].fastPluses}></HotelItem></div></Link>
          
            ))}
          </div>
        </div>
      )
    }
  }

  return (
    <div className='scroll-bar' style={{ position: 'relative' }}>
      
      <img src={arrLeft} onClick={() => smoothScroll('left')} className='scroll-bar__arrow scroll-bar__arrow-left'/>
        
    

    
      <section
        ref={currentRef}
        className="scroll-bar__section"
        tabIndex={0}
      >
        {render()}
      </section>

     
      <img
        src={arrRight}
        onClick={() => smoothScroll('right')}
        className='scroll-bar__arrow scroll-bar__arrow-right'
      />
       
     
    </div>
  );
};

export default ScrollBar;