

import "./HotTours..css"
import tours from "../../assets/icons/toursBeatiful.svg"

import ScrollBar from '../ScrollBar/ScrollBar'

export default function HotTours() {

  return (
   <>
   
    <div className="hot-tours__outer">

    <img className='beatiful-tours' src={tours} alt="" />
    <div className="hot-tours">
        <div className="hot-tours__container">
            <div className="hot-tours__info">
                <h2 className="hot-tours__title">ГОРЯЩИЕ ТУРЫ</h2>
                <p className="hot-tours__subtitle">ПОЙМАЙТЕ МОМЕНТ</p>
            </div>
           
            
           
            
           
        </div>
       
    </div>
    
    </div>
    <ScrollBar type='hot'></ScrollBar>
    
   

   

  
    
   </>
  )
}
