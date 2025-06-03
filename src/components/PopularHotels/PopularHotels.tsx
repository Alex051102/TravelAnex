
import PopularHotelsItem from '../PopularHotelsItem/PopularHotelsItem'
import "./PopularHotels.css"
import db from "../../../db.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import hotels from "../../assets/icons/Hotels.svg"
import { Link } from 'react-router-dom';
export default function PopularHotels() {
   
    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 3,
        
        speed: 1500,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                centerPadding: "100px",
                slidesToShow: 1
               
              }
            },
            {
                breakpoint: 700,
                settings: {
                  centerPadding: "50px",
                  slidesToShow: 1
                 
                }
              },
              {
                breakpoint: 400,
                settings: {
                  centerPadding: "20px",
                  slidesToShow: 1
                 
                }
              }
        ]
       
      };
  return (
    <>
    <div className="popular-hotels">
        <div className="popular-hotels__container">
            <div className="popular-hotels__info">
                <img className='popular-hotels__cursive' src={hotels} alt="" />
                <h2 className="popular-hotels__title">ПОПУЛЯРНЫЕ ОТЕЛИ</h2>
                <p className="popular-hotels__subtitle">УЮТ И РОСКОШЬ В ЛУЧШИХ ОТЕЛЯХ МИРА</p>
            </div>
            <div className="embla" style={{width:"96%"}}>
            <Slider {...settings}>
                {db.hotels.map(hotel=>(
                  
                    <Link to={`/hotel/${hotel.id}`}><div onClick={()=>localStorage.setItem("2",hotel.id.toString())}><PopularHotelsItem rating={hotel.rating} name={hotel.name} type="" image={hotel.image}></PopularHotelsItem></div></Link>
                ))}
                        
                   
            </Slider>
            </div>
            
            
        </div>
    </div>
    </>
  )
}
