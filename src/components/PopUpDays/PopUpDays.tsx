import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import './PopUpDays.css'
import exit from "../../assets/icons/exit.svg"
import { useAppDispatch, useAppSelector } from '../../hook'
import {swapeChoosenDays,boolPopUpDays,swapeErrorDays} from '../../store/travelSlice'
export default function PopUpDays() {
    const [numNights,setNumNights]=useState <string[]>([])
    const [night1,setNight1]=useState("")
    const [night2,setNight2]=useState("")

    const dis=useAppDispatch()
    const error=useAppSelector(state=>state.travel.errorDays)
   
 
   useEffect(()=>{
     setNumNights([night1,night2])
   },[night1,night2])
 
 
   const clearNumNights = () => {
     let inputs=document.querySelectorAll('.pick-up-area__sub-how-days-input')
     inputs.forEach((inp:any)=>{
       inp.value=""
     })
     setNumNights([])
 };
   console.log(numNights)


   function chooseNumDays(){
    
    if(error.length==0){
        dis(boolPopUpDays(false))
    }
    dis(swapeChoosenDays(numNights))
    
   }
  return (


    <>
    <div className="modal-days">
    <div className="pick-up-area__sub-how-days">
                <div className="pick-up-area__sub-how-days-container">
                <div className="pick-up-area__sub-up">
                        <div className="pick-up-area__sub-up-container">
                            <div className="pick-up-area__sub-up-title">
                            <h1 className='pick-up-area__sub-up-title-text'>На сколько</h1>
                            </div>
                            
                            <div className="pick-up-area__sub-up-exit">
                            <img className='pick-up-area__sub-up-exit-img' onClick={ ()=>dis(boolPopUpDays(false))} src={exit} alt="" />
                            </div>
                           
                        </div>
                          
                      </div>
                  
                  <div className="pick-up-area__sub-how-days-inputs">
                    <div className="pick-up-area__sub-how-days-inputs-container">
                      <p>От</p>
                      <input min={1} onChange={(e)=>setNight1(e.target.value)} className='pick-up-area__sub-how-days-input' type="number" />
                      <p>До</p>
                      <input min={1}  onChange={(e)=>setNight2(e.target.value)} className='pick-up-area__sub-how-days-input' type="number" />
                       
                    </div>
                    <p className='error'>{error}</p>
                    
                  </div>
                  
                  <div className="pick-up-area__sub-country-actions">
                          <div className="pick-up-area__sub-country-actions-container">
                              <div onClick={clearNumNights} className="pick-up-area__sub-country-actions-item"><p>Очистить</p></div>
                              <div onClick={chooseNumDays} className="pick-up-area__sub-country-actions-item"><Button type='sub-width' text='ВЫБРАТЬ' color='black'></Button></div>
                              
                          </div>
                  </div>
                  
                </div>
              </div>
    </div>
        
    </>
  )
}
