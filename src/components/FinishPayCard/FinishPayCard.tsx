import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import './FinishPayCard.css'
import { Link } from 'react-router-dom'
export default function FinishPayCard() {

    const [toSuccess,setToSuccess]=useState(false)

    const [name,setName]=useState('')
    const [numberCard,setNumberCard]=useState('')
    const [month,setMonth]=useState('')
    const [year,setYear]=useState('')
    const [cvc,setCvc]=useState('')

    const [nameError,setNameError]=useState('')
    const [numberCardError,setNumberCardError]=useState('')
    const [expiryError,setExpiryError]=useState('')
    const [cvcError,setCvcError]=useState('')
    function validateCardName(name:string) {
        return /^[A-Za-zА-Яа-яЁё]{2,}(?:[ '-][A-Za-zА-Яа-яЁё]{2,})+$/.test(name) && 
               name.length <= 26;
      }
      function validateCardNumber(cardNumber: string): boolean {
        // Удаляем все пробелы и нечисловые символы
        const cleaned = cardNumber.replace(/\D/g, '');
        
        // Проверяем что строка состоит ровно из 16 цифр
        return /^\d{16}$/.test(cleaned);
      }

      function validateCVC(cvc:string, cardType = 'default') {
        // Удаляем все нецифровые символы
        const cleaned = cvc.replace(/\D/g, '');
      
        // Проверяем длину в зависимости от типа карты
        let expectedLength;
        switch (cardType.toLowerCase()) {
          case 'american express':
            expectedLength = 4; // Для AMEX
            break;
          default:
            expectedLength = 3; // Для Visa, Mastercard и др.
        }
      
        // Проверяем что это число нужной длины
        return new RegExp(`^\\d{${expectedLength}}$`).test(cleaned);
      }
      function validateCardExpiry(month:string, year:string) {
        // Преобразуем в числа
        const m = parseInt(month, 10);
        let y = parseInt(year, 10);
        
        // Добавляем 2000, если год введен коротко (например, 24 вместо 2024)
        if (y < 100) {
          y += 2000;
        }
      
        // Получаем текущую дату
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; // Месяцы 0-11
      
        // Проверяем валидность месяца
        if (m < 1 || m > 12) {
          return false;
        }
      
        // Проверяем не истекла ли дата
        if (y < currentYear || (y === currentYear && m < currentMonth)) {
          return false;
        }
      
        // Максимальный срок действия карт обычно 5 лет в будущее
        if (y > currentYear + 5) {
          return false;
        }
      
        return true;
      }
      
     // Валидация номера карты (добавлена проверка на пустую строку)

  
  // В функции validateAll добавьте проверку на пустые поля
  function validateAll() {
    let isValid = true;
  
    if (!name.trim() || !validateCardName(name)) {
      setNameError('Некорректное имя');
      isValid = false;
    } else {
      setNameError('');
    }
  
    if (!numberCard.trim() || !validateCardNumber(numberCard)) {
      setNumberCardError('Некорректный номер карты');
      isValid = false;
    } else {
      setNumberCardError('');
    }
  
    if (!cvc.trim() || !validateCVC(cvc)) {
      setCvcError('Некорректный CVC');
      isValid = false;
    } else {
      setCvcError('');
    }
  
    if (!month.trim() || !year.trim() || !validateCardExpiry(month, year)) {
      setExpiryError('Некорректный срок');
      isValid = false;
    } else {
      setExpiryError('');
    }
  
    setToSuccess(isValid)
    return isValid;
  }
     
      
  return (
   <>
        <h2>Введите данные карты</h2>
        <div className="finish-pay__cards">
                <div className="finish-pay__card">
                    <div className="finish-pay__card-container">
                    <div className="finish-pay__card-item">
                        <p className='finish-pay__card-title-left'>Номер карты:</p>
                        <input onChange={e=>setNumberCard(e.target.value)} className='finish-pay__card-input' placeholder='XXXX XXXX XXXX XXXX' type="text" />
                        <p className='error-mess'>{numberCardError}</p>
                    </div>
                    <div className="finish-pay__card-item finish-pay__card-item--justify-end">
                        <div className="finish-pay__card-item-middle">
                            <p className='finish-pay__card-title-text-align'>Действует до:</p>
                            <div className="finish-pay__card-item-inputs">
                                <input onChange={e=>setMonth(e.target.value)} className='finish-pay__card-input finish-pay__card-input--small' placeholder='XX' type="text" /> / <input onChange={e=>setYear(e.target.value)}  className='finish-pay__card-input finish-pay__card-input--small ' placeholder='XX' type="text" />
                                <p className='error-mess-card error-twice'>{expiryError}</p>
                            </div>
                        </div>
                        <div className="finish-pay__card-item-middle cvc-delete">
                            <p className='finish-pay__card-title-right'>CVC2</p>
                            <div className="finish-pay__card-item-inputs">
                                <input onChange={e=>setCvc(e.target.value)}  className='finish-pay__card-input finish-pay__card-input--small' placeholder='XXX' type="text" /> 
                                <p className='error-mess-card'>{cvcError}</p>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="finish-pay__card-item finish-pay__card-item--grid-row">
                        <p className='finish-pay__card-title-left'>Имя владельца карты:</p>
                        <input onChange={e=>setName(e.target.value)}  className='finish-pay__card-input' placeholder='АЛЕКСАНДР АЛЕКСАНДРОВ' type="text" />
                        <p className='error-mess'>{nameError}</p>
                    </div>
                    </div>
                    
                </div>
                <div className="finish-pay__card back-card">
                    <div className="finish-pay__card-back-black">

                    </div>
                    <div className="finish-pay__card-item-main">
                        <p className='finish-pay__card-title-right'>CVC</p>
                        <div className="finish-pay__card-item-inputs">
                            <input onChange={e=>setCvc(e.target.value)}  className='finish-pay__card-input finish-pay__card-input--small' placeholder='XXX' type="text" /> 
                            <p className='error-mess-card'>{cvcError}</p>
                        </div>
                       
                    </div>
                </div>
            </div>
            
                <div className="finish-pay__button" onClick={validateAll}>
                    <Link to={toSuccess==true?'/success':'/finish'}>
                        <Button text='ОПЛАТИТЬ' color='red' type=''></Button>
                    </Link>
                </div>
           
           
            
   </>
  )
}
