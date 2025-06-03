import React, { useEffect, useState } from 'react'
import './PopUpRoom.css'
import exit from '../../assets/icons/exit.svg'
import Button from '../Button/Button'
import { useAppDispatch, useAppSelector } from '../../hook'
import { swapeChoosenRoom,boolPopUpRoom } from '../../store/travelSlice'
import db from '../../../db.json'
export default function PopUpRoom() {
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
    
    const storedValue = localStorage.getItem('1');
    const idT = storedValue ? parseInt(storedValue, 10) : 0;
    useEffect(() => {
        const foundTour = allTours.find(tour => tour.id === idT);
        if (foundTour) {
            setNeedTour([foundTour]);
        }
    }, [idT]);
    const dis=useAppDispatch()
    const [choosenRoomState,setChoosenRoomState]=useState(22000)
    function checked1(e:React.ChangeEvent<HTMLInputElement>){
        const isChecked=e.target.checked
        if(isChecked==true){
            setChoosenRoomState(0)
        }
       
    }
    function checked2(e:React.ChangeEvent<HTMLInputElement>){
        const isChecked=e.target.checked
        if(isChecked==true){
            setChoosenRoomState(needTour[0]?needTour[0].availableRooms[1].addPrice:0)
        }
       
    }
    function sendRoom(){
        
        dis(swapeChoosenRoom(choosenRoomState))
        dis(boolPopUpRoom(false))
    }
  return (
    <>
        <div className="modal-room">
            <div className="pop-up-room">
                <div className="pop-up-room__container">
                <div className="pick-up-area__sub-up">
                        <div className="pick-up-area__sub-up-container">
                            <div className="pick-up-area__sub-up-title">
                            <h1 className='pick-up-area__sub-up-title-text'>Номер</h1>
                            </div>
                            
                            <div className="pick-up-area__sub-up-exit">
                            <img className='pick-up-area__sub-up-exit-img' onClick={()=>dis(boolPopUpRoom(false))} src={exit} alt="" />
                            </div>
                           
                        </div>
                          
                      </div>
                <div className="pop-up-room__main">
                    <div className="pop-up-room__main-container">
                        <div className="pop-up-room__main-item">
                            <div className="pop-up-room__main-item-radio">
                                <input onChange={checked1} className='pop-up-room__main-item-radio-button' type="radio" id='base' name='room'/>
                                <label htmlFor="base">Comfort room</label>
                            </div>
                            <div className="pop-up-room__main-price">
                            <p>в цене</p>
                        </div>
                          
                        </div>
                        
                    <div className="pop-up-room__main-item">
                        <div className="pop-up-room__main-item-radio">
                            <input onChange={checked2} className='pop-up-room__main-item-radio-button' type="radio" id='lux' name='room' />
                            <label htmlFor="lux">Premium room</label>
                        </div>
                        <div className="pop-up-room__main-price">
                            <p>{`+ ${needTour[0]?needTour[0].availableRooms[1].addPrice:0} ₽/номер`}</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="pop-up-room__choose">
                    <div onClick={sendRoom} className="pop-up-room__choose-button">
                        <Button color='black' type='' text='Выбрать'></Button>
                    </div>
                </div>
                </div>
           
                
            </div>
        </div>
    </>
  )
}
