import React from 'react'
import successImg from '../../assets/icons/success.svg'
import { useAppDispatch, useAppSelector } from '../../hook'
import { boolSuccess } from '../../store/travelSlice'
import './PopUpSuccess.css'
export default function PopUpSucces() {

    const dis=useAppDispatch()
    setTimeout(()=>{
        dis(boolSuccess(false))
    },2000)
   
  return (
    <>
        <div className="modal-success">
            <div className="header__sub-success">
            <div className="header__sub-success-container">
                <img className="header__sub-success-img" src={successImg} alt="" />
                <h2 className="header__sub-success-text">ЗАЯВКА УСПЕШНО ОТПРАВЛЕНА</h2>
            </div>
            </div>
        </div>
        
      
    </>
  )
}
