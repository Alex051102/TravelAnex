import React, { useState } from 'react'
import './PopUpTourists.css'
import Button from '../Button/Button'
import exit from "../../assets/icons/exit.svg"
import { useAppDispatch } from '../../hook'
import {swapeChoosenChild,swapeChoosenAdult,boolPopUpTourists} from '../../store/travelSlice'
export default function PopUpTourists() {
    const [counterAdult,setCounterAdult]=useState(0)
    const [counterChildren,setCounterChildren]=useState(0)

    const dis=useAppDispatch()

  
        function choosePeople(){
          

          dis(swapeChoosenAdult(counterAdult))
          dis(swapeChoosenChild(counterChildren))

         dis(boolPopUpTourists(false))
  
        
        }
  
   function incDecPeople(type:string,action:string){
    if(type=="adult"){
      if(action=="inc"){
        
          setCounterAdult(c=>c+1)
       
      }
    
      if(action=="dec"){
        if(counterAdult>0){
          setCounterAdult(c=>c-1)
        }
      }
    }
  
    if(type=="children"){
      if(action=="inc"){
        
          setCounterChildren(c=>c+1)
       
      }
    
      if(action=="dec"){
        if(counterChildren>0){
          setCounterChildren(c=>c-1)
        }
      }
    }
    
   }
   function clearCounters(){
    setCounterAdult(0);
    setCounterChildren(0)
   }
  return (
    <>
        <div className="modal-tourists">
        <div className="pick-up-area__sub-people">
                <div className="pick-up-area__sub-people-container">
                <div className="pick-up-area__sub-up">
                        <div className="pick-up-area__sub-up-container">
                            <div className="pick-up-area__sub-up-title">
                            <h1 className='pick-up-area__sub-up-title-text'>Туристы</h1>
                            </div>
                            
                            <div className="pick-up-area__sub-up-exit">
                            <img className='pick-up-area__sub-up-exit-img' onClick={ ()=>dis(boolPopUpTourists(false))} src={exit} alt="" />
                            </div>
                           
                        </div>
                          
                      </div>
                  <div className="pick-up-area__sub-people-main">
                  <div className="pick-up-area__sub-people-category">
                    <p className='pick-up-area__sub-people-category-name'>Взрослые</p>
                    <div className="pick-up-area__sub-people-counter">
                      <button onClick={()=>{incDecPeople('adult',"dec")}} className='pick-up-area__sub-people-button pick-up-area__sub-people-button--minus'>-</button>
                      <p className='pick-up-area__sub-people-counter-num'>{counterAdult}</p>
                      <button onClick={()=>{incDecPeople('adult',"inc")}} className='pick-up-area__sub-people-button'>+</button>
                    </div>
                  </div>
                  <div className="pick-up-area__sub-people-category">
                    <p className='pick-up-area__sub-people-category-name'>Дети (0-17 лет)</p>
                    <div className="pick-up-area__sub-people-counter">
                      <button onClick={()=>{incDecPeople('children',"dec")}} className='pick-up-area__sub-people-button pick-up-area__sub-people-button--minus'>-</button>
                      <p className='pick-up-area__sub-people-counter-num'>{counterChildren}</p>
                      <button onClick={()=>{incDecPeople('children',"inc")}} className='pick-up-area__sub-people-button'>+</button>
                    </div>
                  </div>
                  </div>

                  
                  
                  <div className="pick-up-area__sub-country-actions">
                          <div className="pick-up-area__sub-country-actions-container">
                              <div onClick={clearCounters} className="pick-up-area__sub-country-actions-item"><p>Очистить</p></div>
                              <div onClick={choosePeople} className="pick-up-area__sub-country-actions-item"><Button type='sub-width' text='ВЫБРАТЬ' color='black'></Button></div>
                              
                          </div>
                  </div>
                </div>
              </div>
        </div>
    </>
  )
}
