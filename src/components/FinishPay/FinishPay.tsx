import React, { useState } from 'react';
import './FinishPay.css';
import Button from '../Button/Button';
import FinishPayCard from '../FinishPayCard/FinishPayCard';

export default function FinishPay() {
  const [payMethod, setPayMethod] = useState<'card' | 'live'>('card');

  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

  function validatePhone(phone: string) {
    if (phone.length === 0) {
      return false;
    }
    return /^\+?[0-9\s\-\(\)]{10,20}$/.test(phone);
  }

  const handleValidate = () => {
    if (!validatePhone(phone)) {
      setErrorPhone('Некорректный номер телефона');
    } else {
      setErrorPhone('');
    }
  };

  return (
    <div className="finish-pay">
      <h1>СПОСОБ ОПЛАТЫ</h1>
      <div className="finish-pay__choose">
        <div className="finish-pay__choose-item">
          <input
            type="radio"
            name="payy"
            checked={payMethod === 'live'}
            onChange={() => setPayMethod('live')}
          />
          <p className="finish-pay__choose-item-text">Оплата лично (в офисе)</p>
        </div>

        <div className="finish-pay__choose-item">
          <input
            type="radio"
            name="payy"
            checked={payMethod === 'card'}
            onChange={() => setPayMethod('card')}
          />
          <p className="finish-pay__choose-item-text">Онлайн платеж на сайте</p>
        </div>
      </div>

      {/* Условный рендеринг */}
      {payMethod === 'live' && (
        <div className="finish-pay__live">
          <h3>Введите номер телефона для обратной связи</h3>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+79117221586"
            className="finish-pay__live-phone"
            type="text"
          />
          <div
        
            onClick={handleValidate}
            className="finish-pay__live-button"
          >
            <Button text="СВЯЗАТЬСЯ" color="red" type="" />
          </div>
          {errorPhone && (
            <p className='error-mess-live'>{errorPhone}</p>
          )}
        </div>
      )}

      {payMethod === 'card' && <FinishPayCard />}
    </div>
  );
}