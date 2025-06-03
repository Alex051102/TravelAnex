import React, { useEffect, useState } from 'react'
import './Finish.css'
import FinishDop from '../FinishDop/FinishDop'
import imgg from '../../assets/images/egypt.jpg'
import Button from '../Button/Button'
import { useAppDispatch, useAppSelector } from '../../hook'
import { swapeBoolValid } from '../../store/travelSlice'
import FinishPersonal from '../FinishPersonal/FinishPersonal'
import FinishPay from '../FinishPay/FinishPay'
export default function Finish() {


    
    const [stage,setStage]=useState(1)

    const dis=useAppDispatch()
   
    const [addedSum,setAddedSum]=useState(0)

    const [nextButton,setNextButton]=useState(<>
        <div className="finish__card-price-button" onClick={()=>{setStage(2);stage==1?dis(swapeBoolValid(false)):dis(swapeBoolValid(true))}}>
                                       <Button color='red' type='finish-width' text='Продолжить'></Button>
                                   </div>
       </>)
   
       useEffect(()=>{
           if(stage==3){
            setNextButton(<></>)
           }
           else{
            setNextButton(<>
                <div className="finish__card-price-button" onClick={()=>{setStage(2);stage==1?dis(swapeBoolValid(false)):dis(swapeBoolValid(true))}}>
                                               <Button color='red' type='finish-width' text='Продолжить'></Button>
                                           </div>
               </>)
           }
       },[stage])

    function handle(data:number){
        setAddedSum(data)
    }

    console.log(addedSum)
   
    function setterStage(){
        if(stage==1){
            return <FinishDop added={handle}></FinishDop>
        }
        if(stage==2){
            return <FinishPersonal number={Number(localStorage.getItem('finishTourists'))}></FinishPersonal>
        }
        if(stage==3){
            return <FinishPay></FinishPay>
        }
    }
    const personalBool=useAppSelector(state=>state.travel.personalBool)

    useEffect(()=>{
        if(personalBool==true){
            setStage(3)
        }
       
    },[personalBool])

   
   
  return (
    <>
        <div className="finish">
            <div className="finish__container">
                <div className="finish__progress">
                <div className="finish__progress-text">
                    <p className='finish__progress-text-item'>Дополнительные услуги</p>
                    <p className='finish__progress-text-item'>Личные данные</p>
                    <p className='finish__progress-text-item'>Способ оплаты</p>
                </div>
                
                <div className="finish__progress-bar">
                    <div onClick={()=>setStage(1)} className={`finish__progress-bar-circle ${stage==1?'blue-bg':''}`}>
                        <p className={`finish__progress-bar-circle-text ${stage==1?'white-text':""}`}>1</p>
                    </div>
                    <div className="finish__progress-bar-line"></div>
                    <div onClick={()=>setStage(2)} className={`finish__progress-bar-circle ${stage==2?'blue-bg':''}`}>
                        <p className={`finish__progress-bar-circle-text ${stage==2?'white-text':""}`}>2</p>
                    </div>
                    <div className="finish__progress-bar-line"></div>
                    <div onClick={()=>setStage(3)} className={`finish__progress-bar-circle ${stage==3?'blue-bg':''}`}>
                        <p className={`finish__progress-bar-circle-text ${stage==3?'white-text':""}`}>3</p>
                    </div>
                </div>
                </div>
                <div className="finish__main">
                    {setterStage()}
                    
                    {stage==3?<></>:<div className="finish__next">
                        <button onClick={()=>{setStage(2);dis(swapeBoolValid(true))}} className='finish__next-button'><p className='finish__next-button-text'>Продолжить</p></button>
                    </div>}
                    
                    <div className="finish__card">
                        <div className="finish__card-container">
                            <div className="finish__card-info">
                            <div className="finish__card-img-outer">
                                <img className='finish__card-img' src={localStorage.getItem('finishImage')!=null?localStorage.getItem('finishImage')!:''} alt="" />
                            </div>
                            
                            <div className="finish__card-block">
                                <p>{localStorage.getItem('finishCountry')}</p>
                                <h4>{localStorage.getItem('finishName')}</h4>
                            </div>
                            <div className="finish__card-block">
                                <p>Срок: <span>{localStorage.getItem('finishDate')}</span></p>
                                <p>Туристы: <span>{localStorage.getItem('finishTourists')} человека</span></p>
                                <p>Номер: <span>{localStorage.getItem('finishRoom')}</span></p>
                                <p>Питание: <span>{localStorage.getItem('finishFood')}</span></p>
                                <p>Вылет: <span>Москва,Шереметьево</span></p>
                            </div>
                            </div>
                            
                            <div className="finish__card-price">
                                <div className="finish__card-price-text">
                                    <p>Общая сумма:</p>
                                    <p>{Number(localStorage.getItem('finishTotal')) + addedSum*Number(localStorage.getItem('finishTourists'))} ₽</p>
                                </div>
                               {nextButton}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}
