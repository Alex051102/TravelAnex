import React, { useState } from 'react'
import Button from '../Button/Button'
import exit from "../../assets/icons/exit.svg"
import "./PopUpCountries.css"
import { useAppDispatch, useAppSelector } from '../../hook'
import {swapeChoosenCountries,boolPopUpCounties} from "../../store/travelSlice"
export default function PopUpCountries() {
    const dis=useAppDispatch();
    const countries=[
        'Австралия',
        'Австрия',
        'Афганистан',
        'Албания',
        'Алжир',
    
        'Андора',
        'Ангола',
       
        'Аргентина',
        'Армения',
        
        'Азербайджан',
        
        'Бахрейн',
        'Бангладеш',
        'Барбадос',
        'Белиз',
        'Белоруссия',
        'Бельгия',
        
        'Болгария',
        'Боливия',
        
        'Ботсвана',
        'Бразилия',
        'Бруней',
        
        'Бурунди',
        'Ватикан',
        'Венгрия',
        'Венесуэла',
       
        'Габон',
        'Гамбия',
        'Гана',
        'Германия',
        'Гибралтар',
        'Греция',
        'Грузия',
        'Гренада',
        'Гренландия',
        'Гуам',
        'Гватемала',
        'Гвинея',
        
        'Дания',
        'Джерси',
        'Джибути',
        'Доминика',
       
        'Египет',
      
        'Зимбабве',
        'Индия',
        'Индонезия',
        'Иран',
        'Ирак',
        'Ирландия',
        'Израиль',
        'Италия',
        'Исландия',
        'Кабо-Верде',
        
        'Казахстан',
        'Камбоджа',
        'Камерун',
        'Канада',
        'Катар',
        'Кения',
        'Киргизия',
        'Кирибати',
        
        'Коста-Рика',
        'Куба',
        'Кипр',
        'КНДР',
        
        'Кувейт',
        'Лаос',
        'Латвия',
        'Лесото',
        'Либерия',
        'Ливан',
        'Ливия',
        'Лихтенштейн',
        'Литва',
        'Люксембург',
        'Макао',
        'Мадагаскар',
        'Малави',
        'Малайзия',
        'Мальдивы',
        'Мали',
        'Мальта',
        'Марокко',
        'Мартиника',
        'Мексика',
        'Микронезия',
        'Молдавия',
        'Монако',
        'Монголия',
        'Монтсеррат',
        'Мьянма',
        'Намибия',
        'Науру',
        'Непал',
        'Нидерланды',
        'Нигер',
        'Нигерия',
        'Ниуэ',
        'Норвегия',
        'Новая Каледония',
        'Новая Зеландия',
        'Никарагуа',
        'ОАЭ',
        'Оман',
        'Остров Буве',
        'Острова Кука',
        'Острова Питкэрн',
        
        'Палау',
        'Пакистан',
        'Панама',
        'Парагвай',
        'Перу',
        'Польша',
        'Португалия',
        'Пуэрто-Рико',
        'Реюньон',
       
        'Россия',
        'Руанда',
        'Румыния',
        'Сальвадор',
        'Самоа',
        'Сан-Марино',
        
        'Саудовская Аравия',
        'Сен-Бартелеми',
        'Сенегал',
        'Сербия',
        
        'Сент-Люсия',
        
        'Сингапур',
        'Словакия',
        'Словения',
       
        'Сомали',
        'Судан',
        'Суринам',
       
        'Таджикистан',
        'Таиланд',
        'Танзания',
       
        'Того',
        'Токелау',
        'Тонга',
        
        'Тувалу',
        'Турция',
        'Туркмения',
        'Уганда',
        'Узбекистан',
        'Уругвай',
      
        'Фиджи',
        'Финляндия',
        
        'Франция',
       
        'Чад',
        'Чили',
        'Чехия',
        'Швеция',
        'Швейцария',
        'Шри-Ланка',
        
        'Эвритрея',
        'Эквадор',
       
        'Эфиопия',
        
        'Ямайка',
        'Япония',
    ];
    const popularCountries=["Турция","Египет","Мальдивы","ОАЭ","Германия","Испания","Италия"]

    const [checkboxes, setCheckboxes] = useState<boolean[]>(Array(countries.length).fill(false));
    const [checkboxesPopular, setCheckboxesPopular] = useState<boolean[]>(Array(popularCountries.length).fill(false));
    /* const calend=document.querySelector('.pick-up-area__sub-calendar')
    const nights=document.querySelector('.pick-up-area__sub-how-days')
    const howPeople=document.querySelector('.pick-up-area__sub-people')
    let kCountry=0;
    let kCalend=0;
    let kNights=0;
    let kHowPeople=0; */
   
    
   
   /*  const [swapeCountryTo,setCountryTo]=useState(<>
           <div className="pick-up-area__item-container">
                
                <p className='pick-up-area__item-no-choice'>КУДА</p>
              </div>
    </>) */

    
    function chooseCountryTo(){
        
        dis(swapeChoosenCountries(selectedCountries))
        dis(boolPopUpCounties(false))
        
    }
   

    let [selectedCountries,setSelectedCountries] = useState<string[]>([]);
    
    /* const clearSelections = () => {
        setSelectedCountries([]);
    }; */
    const handleLabelClick = (event:React.ChangeEvent<HTMLInputElement>) => {
        const country = event.target.id; 
        const isChecked=event.target.checked
      
        setSelectedCountries(prevCountries => {
            if (isChecked) {
              // Добавляем страну, если она выбрана
              console.log([...prevCountries, country])
              return [...prevCountries, country];
            } else {
              // Удаляем страну, если она не выбрана
      
              let indexToDelete = -1; // Инициализируем -1, чтобы знать, нашли ли мы индекс
              for (let i = 0; i < prevCountries.length; i++) {
                if (prevCountries[i] === country) {
                  indexToDelete = i;
                  break; // Выходим из цикла, как только нашли индекс
                }
              }
      
              if (indexToDelete !== -1) {
                const newCountries = [...prevCountries]; // Создаем копию массива
                newCountries.splice(indexToDelete, 1); // Удаляем элемент по индексу
                console.log(newCountries)
                return newCountries; // Возвращаем новый массив
              } else {
                console.log(prevCountries)
                return prevCountries; // Если элемент не найден, возвращаем исходный массив
              }
            }
          });
       
      };

     function clearNumNights(){
        setSelectedCountries([])
     }

    
   



  return (
    <>
    <div className="modal-countries">
        <div className="pick-up-area__sub-country">
                  <div className="pick-up-area__sub-country-container">
                      <div className="pick-up-area__sub-up">
                        <div className="pick-up-area__sub-up-container">
                            <div className="pick-up-area__sub-up-title">
                            <h1 className='pick-up-area__sub-up-title-text'>Куда</h1>
                            </div>
                            
                            <div className="pick-up-area__sub-up-exit">
                            <img className='pick-up-area__sub-up-exit-img' onClick={ ()=>dis(boolPopUpCounties(false))} src={exit} alt="" />
                            </div>
                           
                        </div>
                          
                      </div>
                      <div className="pick-up-area__sub-country-main">
                      <div className="pick-up-area__sub-country-popular">
                          <h3>Популярные</h3>
                      <form className='pick-up-area__sub-country-form'>
                          {popularCountries.map(item=>(
                              <div className="pick-up-area__sub-country-item">
                                <input onChange={handleLabelClick} /* checked={selectedCountries.includes(item)} */ type="checkbox" id={item} />
                                <label htmlFor={item}>{item}</label>
                              </div>
                          ))}
                          
                      </form>


                      </div>
                      <div className="pick-up-area__sub-country-all">
                      <h3>Все страны</h3>
                      <form className='pick-up-area__sub-country-form'>
                          {countries.map(item=>(
                              <div className="pick-up-area__sub-country-item">
                                  <input checked={selectedCountries.includes(item)} onChange={handleLabelClick} type="checkbox" id={item} />
                                  <label htmlFor={item}>{item}</label>
                              </div>
                          ))}
                          
                      </form>


                      </div>
                      </div>
                      <div className="pick-up-area__sub-country-actions">
                          <div className="pick-up-area__sub-country-actions-container">
                              <div onClick={clearNumNights} className="pick-up-area__sub-country-actions-item"><p>Очистить</p></div>
                              <div onClick={chooseCountryTo} className="pick-up-area__sub-country-actions-item"><Button type='sub-width' text='ВЫБРАТЬ' color='black'></Button></div>
                              
                          </div>
                          
                      </div>
                      
                  </div>
              </div>
    </div>
    </>
  )
}
