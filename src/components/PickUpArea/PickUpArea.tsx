import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import "./PickUpArea.css"
import leftArrow from "../../assets/icons/leftArrow.svg"
import rightArrow from "../../assets/icons/rightArrow.svg"
import { useAppDispatch, useAppSelector } from '../../hook'
import {swapeChoosenCountries,boolPopUpCounties,boolPopUpTourists, swapeChoosenDates,boolPopUpCalendar} from "../../store/travelSlice"
import {swapeChoosenDays,boolPopUpDays,swapeErrorDays} from '../../store/travelSlice'
import { Link } from 'react-router-dom'
export default function PickUpArea() {
  const datesCalendar=useAppSelector(state=>state.travel.choosenDates)
  const dis=useAppDispatch()
    const movedTo=document.querySelector('.pick-up-area__sub-country')
    const calend=document.querySelector('.pick-up-area__sub-calendar')
    const nights=document.querySelector('.pick-up-area__sub-how-days')
    const howPeople=document.querySelector('.pick-up-area__sub-people')
    let kCountry=0;
    let kCalend=0;
    let kNights=0;
    let kHowPeople=0;
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


   
    /* const clearSelections = () => {
        setSelectedCountries([]);
    }; */
    

    
   /*  ---------------------календарь функции---------------------- */
   function convertToDate(input: string): string {
    // Объект для сопоставления месяцев
    const monthMap: { [key: string]: string } = {
        "Январь": "01",
        "Февраль": "02",
        "Март": "03",
        "Апрель": "04",
        "Май": "05",
        "Июнь": "06",
        "Июль": "07",
        "Август": "08",
        "Сентябрь": "09",
        "Октябрь": "10",
        "Ноябрь": "11",
        "Декабрь": "12"
    };
  
    // Проверка, что входная строка не пустая
    if (!input) {
        return "Неверный формат даты";
    }
  
    // Извлечение числа и месяца из строки
    const numberPartMatch = input.match(/^\d+/);
    const monthPartMatch = input.match(/[а-яА-Я]+/i);
  
    if (!numberPartMatch || !monthPartMatch) {
        return "Неверный формат даты";
    }
  
    const numberPart = numberPartMatch[0]; // Получаем цифровую часть
    const monthPart = monthPartMatch[0]; // Получаем текстовую часть (месяц)
  
    // Добавление ведущего нуля к дню, если число меньше 10
    const day = numberPart.padStart(2, '0');
  
    // Получение номера месяца из monthMap
    const month = monthMap[monthPart];
  
    // Проверка, что месяц существует
    if (!month) {
        return "Неверный формат даты";
    }
  
    // Получаем текущий год
    const currentYear = new Date().getFullYear().toString().slice(-2);
  
    // Возвращаем результат в формате "DD.MM.YYYY"
    return `${day}.${month}.${currentYear}`;
}
   const [swapeDateFly,setSwapeDateFly]=useState(<>
    <div className="pick-up-area__item-container">
                    <p className='pick-up-area__item-no-choice'>ВЫЛЕТ</p>
                </div>
</>)
    useEffect(()=>{

      
      if(datesCalendar.length==1){
        localStorage.setItem('date',`${convertToDate(datesCalendar[0])}`)
        setSwapeDateFly(<>
        <div className="pick-up-area__item-container">
              
              <p className='pick-up-area__item-choice-title'>ВЫЛЕТ</p>
              <p className='pick-up-area__item-choice-value'>{convertToDate(datesCalendar[0])}</p>
            </div>
              </>)
      }
      if(datesCalendar.length==2){
        localStorage.setItem('date',`${convertToDate(datesCalendar[0])},${convertToDate(datesCalendar[1])}`)
        setSwapeDateFly(<>
            <div className="pick-up-area__item-container">
              
              <p className='pick-up-area__item-choice-title'>ВЫЛЕТ</p>
              <p className='pick-up-area__item-choice-value'>{convertToDate(datesCalendar[0])+" - "+convertToDate(datesCalendar[1])}</p>
            </div>
          </>)
          
      }
      
      if(datesCalendar.length==0){
        localStorage.setItem('date',``)
        setSwapeDateFly(<>
        <div className="pick-up-area__item-container">
              
              <p className='pick-up-area__item-no-choice'>ВЫЛЕТ</p>
            </div>
              </>)
      }
    },[datesCalendar])
 

 



  
  
  
 

const [errorNum,setErrorNum]=useState('')
const numNights=useAppSelector(state=>state.travel.choosenDays)

useEffect(()=>{
  dis(swapeErrorDays(errorNum))
},[errorNum])

useEffect(()=>{
  chooseNumNights()
},[numNights])
const [swapeNumNights,setSwapeNumNights]=useState(<>
  <div className="pick-up-area__item-container">
        
        <p className='pick-up-area__item-no-choice'>НА СКОЛЬКО</p>
      </div>
        </>)
  
function chooseNumNights(){
 
     
                        if((numNights[0]!="" && numNights[1]=="" || numNights[0]=="" && numNights[1]!="") ){
                          if((parseInt(numNights[0])>0 || parseInt(numNights[1])>0)&& (parseInt(numNights[0])<90 || numNights[0]=="") && (parseInt(numNights[1])<90 || numNights[1]=="")){
                          setErrorNum("")
                          setSwapeNumNights(<>
                          <div className="pick-up-area__item-container">
                                
                                <p className='pick-up-area__item-choice-title'>НА СКОЛЬКО</p>
                                <p className='pick-up-area__item-choice-value'>{`${numNights[0]?numNights[0]:numNights[1]} ночей`}</p>
                              </div>
                                </>)
                              }
                          if((parseInt(numNights[0])<0 || parseInt(numNights[1])<0)){
                            setErrorNum("Неккоректно введены параметры,количество ночей не может быть отрицательно")
                          }
                          if((parseInt(numNights[0])>90 || parseInt(numNights[1])>90)){
                            setErrorNum("Неккоректно введены параметры,количество ночей не может превышать 90")
                          }
                        }
                        if(numNights[0]!="" && numNights[1]!=""){
                        
                          if(parseInt(numNights[0])>0 && parseInt(numNights[1])>0 && parseInt(numNights[1])<90  && parseInt(numNights[0]) < parseInt(numNights[1])){
                            setErrorNum("")
                            setSwapeNumNights(<>
                              <div className="pick-up-area__item-container">
                                
                                <p className='pick-up-area__item-choice-title'>ВЫЛЕТ</p>
                                <p className='pick-up-area__item-choice-value'>{`${numNights[0]} - ${numNights[1]} ночей`}</p>
                              </div>
                            </>)
                          }
                          if(parseInt(numNights[0])<0 || parseInt(numNights[1])<0){
                            setErrorNum("Неккоректно введены параметры,количество ночей не может быть отрицательно")
                          }
                          if(parseInt(numNights[0])>90 || parseInt(numNights[1])>90){
                            setErrorNum("Неккоректно введены параметры,количество ночей не может превышать 90")
                          }
                          if((parseInt(numNights[0])<0 || parseInt(numNights[1])<0)&&(parseInt(numNights[0])>90 || parseInt(numNights[1])>90)){
                            setErrorNum("Неккоректно введены параметры")
                          }
                          
                         
                        
                          
                            
                        }
                     
                      
                      
                        if(numNights[0]=="" && numNights[1]==""){
                          setErrorNum("")
                          setSwapeNumNights(<>
                          <div className="pick-up-area__item-container">
                                
                                <p className='pick-up-area__item-no-choice'>НА СКОЛЬКО</p>
                              </div>
                                </>)
                        }
                  
                        
                    }
  /*--------------------Туристов------------------ */
const children=useAppSelector(state=>state.travel.choosenTouristsChild)
const adult=useAppSelector(state=>state.travel.choosenTouristsAdult)


  const [swapeCounterPeople,setSwapeCounterPeople]=useState(<>
    <div className="pick-up-area__item-container">
          
          <p className='pick-up-area__item-no-choice'>ТУРИСТЫ</p>
        </div>
          </>)
useEffect(()=>{
  setSwapeCounterPeople(<>
          
    <div className="pick-up-area__item-container">
          
          <p className='pick-up-area__item-choice-title'>ТУРИСТЫ</p>
          <p className='pick-up-area__item-choice-value'>{`${children}+${adult}`}</p>
        </div>
    </>)
},[children,adult])

 
 
 function openCalend(){
  if(kCalend%2==0){
    movedTo?.classList.remove('pick-up-area__sub-country--open')
    calend?.classList.add('pick-up-area__sub-calendar--open')
    nights?.classList.remove('pick-up-area__sub-how-days--open')
    howPeople?.classList.remove('pick-up-area__sub-people--open')
  
  }
 if(kCalend%2==1){
    calend?.classList.remove('pick-up-area__sub-calendar--open')
    
    
 }
 kCountry=0
 kCalend++
 kHowPeople=0
 kNights=0
 }

 function openNights(){
  if(kNights%2==0){
    movedTo?.classList.remove('pick-up-area__sub-country--open')
    calend?.classList.remove('pick-up-area__sub-calendar--open')
    nights?.classList.add('pick-up-area__sub-how-days--open')
    howPeople?.classList.remove('pick-up-area__sub-people--open')
  
  }
 if(kNights%2==1){
    nights?.classList.remove('pick-up-area__sub-how-days--open')
    
    
 }
 kCountry=0
 kCalend=0
 kHowPeople=0
 kNights++
 }


 function openPeople(){
  if(kHowPeople%2==0){
    movedTo?.classList.remove('pick-up-area__sub-country--open')
    calend?.classList.remove('pick-up-area__sub-calendar--open')
    nights?.classList.remove('pick-up-area__sub-how-days--open')
    howPeople?.classList.add('pick-up-area__sub-people--open')
  
  }
 if(kHowPeople%2==1){
   howPeople?.classList.remove('pick-up-area__sub-people--open')
    
    
 }
 kCountry=0
 kCalend=0
 kHowPeople++
 kNights=0
 }
 
 const selectedCountries:string[] | null=useAppSelector(state=>state.travel.choosenCountries)

  const [countryTo,setCountryTo]=useState(<>
  <div className="pick-up-area__item-container">
       
       <p className='pick-up-area__item-no-choice'>КУДА</p>
     </div>
</>)
useEffect(()=>{
  if(selectedCountries!=null){
    if(selectedCountries.length==1){
      setCountryTo(<>
    <div className="pick-up-area__item-container">
          
          <p className='pick-up-area__item-choice-title'>КУДА</p>
          <p className='pick-up-area__item-choice-value'>{selectedCountries[0]}</p>
        </div>
          </>)
  }
  if(selectedCountries.length>1){
      setCountryTo(<>
        <div className="pick-up-area__item-container">
          
          <p className='pick-up-area__item-choice-title'>КУДА</p>
          <p className='pick-up-area__item-choice-value'>{selectedCountries[0]+"..."}</p>
        </div>
      </>)
      
  }
  
  if(selectedCountries.length==0){
      setCountryTo(<>
    <div className="pick-up-area__item-container">
          
          <p className='pick-up-area__item-no-choice'>КУДА</p>
        </div>
          </>)
  }
  }  
  
},[selectedCountries])


 
function swapePopUpItem(type:string){
  if(type=="to"){
    dis(boolPopUpCounties(true))
    dis(boolPopUpCalendar(false))
    dis(boolPopUpDays(false))
    dis(boolPopUpTourists(false))
  }
  if(type=="calendar"){
    dis(boolPopUpCounties(false))
    dis(boolPopUpCalendar(true))
    dis(boolPopUpDays(false))
    dis(boolPopUpTourists(false))
  }
  if(type=="days"){
    dis(boolPopUpCounties(false))
    dis(boolPopUpCalendar(false))
    dis(boolPopUpDays(true))
    dis(boolPopUpTourists(false))
  }
  if(type=="people"){
    dis(boolPopUpCounties(false))
    dis(boolPopUpCalendar(false))
    dis(boolPopUpDays(false))
    dis(boolPopUpTourists(true))
  }
}

function setToLocalStorage(){
  localStorage.setItem('countries',`${selectedCountries}`)
  localStorage.setItem('nights',`${numNights}`)

  dis(boolPopUpCounties(false))
  dis(boolPopUpTourists(false))
  dis(swapeChoosenDates(false))
  dis(boolPopUpCalendar(false))

}
  

  /* const countryChecked = document.querySelector<HTMLInputElement>('#country');

  if (countryChecked) {
      countryChecked.checked = false; // Снимаем отметку
  } */
  

      return (
      <>
      <div className="pick-up-area">

          <div className="pick-up-area__container">
             {/*  <input type="checkbox" id="country" hidden></input>
              <input type="checkbox" id="calendar" hidden></input>
              <input type="checkbox" id="howDays" hidden></input>
              <input type="checkbox" id="nights" hidden></input>
              <input type="checkbox" id="people" hidden></input> */}
              <div className="pick-up-area__item pick-up-area__from">
                <div className="pick-up-area__item-container">
                  <p className='pick-up-area__item-no-choice'>ОТКУДА</p>
                </div>
              </div>
              <label
            
                  htmlFor="country"
                  className="pick-up-area__item pick-up-area__to"
                  onClick={()=>swapePopUpItem("to")}
                >
                
                  {/* <Button type="" text="ОСТАВИТЬ ЗАЯВКУ" color="white"></Button> */}
                
              {countryTo}
              </label>
              <label
            
                 
                  className="pick-up-area__item pick-up-calendar"
                  onClick={()=>swapePopUpItem('calendar')}
                >
                
                  {/* <Button type="" text="ОСТАВИТЬ ЗАЯВКУ" color="white"></Button> */}
                
              {swapeDateFly}
              </label>
             
              <div className="pick-up-area__hotel">

                <label
              
                  htmlFor="nights"
                  className="pick-up-area__item pick-up-area__time"
                  onClick={()=>swapePopUpItem('days')}
                  >
          
                {swapeNumNights}
                </label>

                
                  
                <label
            
            htmlFor="people"
            className="pick-up-area__item pick-up-area__number"
            
            onClick={()=>swapePopUpItem('people')}
          >
                    {swapeCounterPeople}
                  </label>
              </div>
              <div className="pick-up-area__item pick-up-area__send">
              
              <div className="pick-up-area__item-container ">
                <Link onClick={setToLocalStorage} to='/tours'><Button type='' text="ПОДОБРАТЬ" color="red"></Button></Link>
                  
              </div>
              </div>

             
           

          </div>
      </div>

      </>
      )
                              }
