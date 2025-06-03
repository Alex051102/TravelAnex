import React, { useState } from 'react'
import './FinishDop.css'
const FinishDop:React.FC<{added: (data: number) => void;}>=({added})=>{
    const [add,setAdd]=useState(0)
    added(add)
  return (
    <>
        <div className="finish-dop">
            <div className="finish-dop__container">
                <h1 className='finish-dop__title'>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h1>
                <div className="finish-dop__part">
                    <h4>Страхование</h4>
                    <div className="finish-dop__part-items">
                        <div className="finish-dop__part-item">
                            <div className="finish-dop__part-item-container">
                                <input className='finish-dop__part-item-input' onChange={e=>e.target.checked==true?setAdd(c=>c+3800):setAdd(c=>c-3800)} type="checkbox"name='safe' />
                                <p className='finish-dop__part-item-text'>Медицина Полное покрытие плюс USD 30 Франшиза Euroins (50000 USD)</p>
                                <div className="finish-dop__part-item-price-outer">
                                    <p className='finish-dop__part-item-price'>3 800 ₽</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="finish-dop__part-item">
                            <div className="finish-dop__part-item-container">
                                <input className='finish-dop__part-item-input' onChange={e=>e.target.checked==true?setAdd(c=>c+4200):setAdd(c=>c-4200)} type="checkbox"name='safe' />
                                <p className='finish-dop__part-item-text'>Страховка от невыезда 1000 USD Euroins</p>
                                <div className="finish-dop__part-item-price-outer">
                                    <p className='finish-dop__part-item-price'>4 200 ₽</p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="finish-dop__part">
                    <h4>Страхование</h4>
                    <div className="finish-dop__part-items">
                        <div className="finish-dop__part-item">
                            <div className="finish-dop__part-item-container">
                                <input className='finish-dop__part-item-input' onChange={e=>e.target.checked==true?setAdd(c=>c+1000):setAdd(c=>c-1000)} type="checkbox"name='safe' />
                                <p className='finish-dop__part-item-text'>Групповой (аэропорт-отель)</p>
                                <div className="finish-dop__part-item-price-outer">
                                    <p className='finish-dop__part-item-price'>1 000 ₽</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="finish-dop__part-item">
                            <div className="finish-dop__part-item-container">
                                <input className='finish-dop__part-item-input' onChange={e=>e.target.checked==true?setAdd(c=>c+1000):setAdd(c=>c-1000)} type="checkbox"name='safe' />
                                <p className='finish-dop__part-item-text'>Групповой (отель-аэропорт)</p>
                                <div className="finish-dop__part-item-price-outer">
                                    <p className='finish-dop__part-item-price'>1 000 ₽</p>
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
export default FinishDop