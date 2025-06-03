import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

export default function PopUpSubHeader() {
    function resetParams(){
        localStorage.setItem('nights','')
        localStorage.setItem('countries','')
        localStorage.setItem('date','')
       }
  return (
    <>
    <div className="header__sub-menu-outer"></div>
        <div className="header__sub-menu">
          <div className="header__sub-menu-container">
            <div className="header__sub-menu-list-outer countries">
              <div className="header__sub-menu-list-container countries__container">
                <h3>ПОПУЛЯРНЫЕ СТРАНЫ</h3>
                <ul className="header__sub-menu-list">
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Египет
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      ОАЭ
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Куба
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Испания
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Италия
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__sub-menu-list-outer tourists">
              <div className="header__sub-menu-list-container tourists__container">
                <h3>ТУРИСТАМ</h3>
                <ul className="header__sub-menu-list">
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Страны
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/hotels">
                      Отели
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link onClick={()=>resetParams()} className="header__sub-menu-item-link" to="/tours">
                      Подбор тура
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link onClick={()=>resetParams()} className="header__sub-menu-item-link" to="/tours">
                      Горящие туры
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__sub-menu-list-outer companies">
              <div className="header__sub-menu-list-container companies__container">
                <h3>КОМПАНИЯМ</h3>
                <ul className="header__sub-menu-list">
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      О нас
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Отзывы
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Контакты
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Новости
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Priority
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Агентам
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__contact-outer header__contact-outer--display-sub">
              <div className="header__contact-outer">
              <label
            
                htmlFor="request"
                className="button-outer button-outer--display-sub"
              >
              
                <Button type="" text="ОСТАВИТЬ ЗАЯВКУ" color="white"></Button>
              </label>
                
              </div>
              
            </div>
          </div>
        </div>
    </>
  )
}
