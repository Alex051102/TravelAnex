import React, { useEffect, useState } from 'react'
import './FinishPersonal.css'
import { useAppDispatch, useAppSelector } from '../../hook';
import { swapeBoolValid,swapePersonalBool} from '../../store/travelSlice';
const FinishPersonal: React.FC<{  number: number }> = ({number }) => {
    interface Tourist {
        id: string;
        firstName: string;
        lastName: string;
        appeal: string;
        gender: string;
        country: string;
        citizenship: string;
        dayBirth: string;
        monthBirth: string;
        yearBirth: string;
        passportSeria: string;
        numberPassport: string;
        phone: string;
        email: string;
    }

    // Инициализируем массив туристов нужной длины сразу
    const [tourists, setTourists] = useState<Tourist[]>(() => {
        return Array.from({ length: number }, (_, i) => ({
            id: (i + 1).toString(),
            firstName: '',
            lastName: '',
            appeal: 'Мистер',
            gender: 'Мужской',
            country: 'Россия',
            citizenship: 'российское',
            dayBirth: '1',
            monthBirth: 'Января',
            yearBirth: '2000',
            passportSeria: '',
            numberPassport: '',
            phone: '',
            email: ''
        }));
    });

    // Добавление нового туриста
    

    const handleTouristChange = (id: string, field: keyof Tourist, value: string) => {
        setTourists(prev => prev.map(tourist =>
            tourist.id === id ? { ...tourist, [field]: value } : tourist
        ));
    };

    // Обновляем количество туристов при изменении пропса number
    useEffect(() => {
        setTourists(prev => {
            if (prev.length < number) {
                // Добавляем недостающих туристов
                return [
                    ...prev,
                    ...Array.from({ length: number - prev.length }, (_, i) => ({
                        id: (prev.length + i + 1).toString(),
                        firstName: '',
                        lastName: '',
                        appeal: '',
                        gender: '',
                        country: '',
                        citizenship: '',
                        dayBirth: '',
                        monthBirth: '',
                        yearBirth: '',
                        passportSeria: '',
                        numberPassport: '',
                        phone: '',
                        email: ''
                    }))
                ];
            } else if (prev.length > number) {
                // Удаляем лишних туристов
                return prev.slice(0, number);
            }
            return prev;
        });
    }, [number]);

    const top100Countries = [
        
        "Албания",
        "Алжир",
        
        "Аргентина",
        "Армения",
        "Австралия",
        "Австрия",
        
        "Беларусь",
        "Бельгия",
        
        "Ботсвана",
        "Бразилия",
        "Бруней",
        
        "Камерун",
        "Канада",
        
        "Чили",
        "Китай",
        "Колумбия",
        
        "Хорватия",
        "Куба",
        "Кипр",
        "Чехия",
        "Дания",
       
        "Египет",
        
        "Финляндия",
        "Франция",
        
        "Грузия",
        "Германия",
        "Гана",
        "Греция",
       
        "Исландия",
        "Индия",
        "Индонезия",
        "Иран",
        "Ирак",
        "Ирландия",
        "Израиль",
        "Италия",
        
        "Япония",
        
        "Казахстан",
       
       
        
       
        
        "Мексика",
        "Микронезия",
        
        "Нидерланды",
        "Новая Зеландия",
        "Никарагуа",
        
        
        
        "Парагвай",
        "Перу",
        "Филиппины",
        "Польша",
        "Португалия",
        "Катар",
        "Румыния",
        "Россия",
        
        "Сербия",
        "Сейшелы",
        "Сьерра-Леоне",
        "Сингапур",
        "Словакия",
        "Словения",
        "Соломоновы Острова",
        "Сомали",
       
        "Испания",
       
        "Швеция",
        "Швейцария",
        "Сирия",
       
        "Таджикистан",
        "Танзания",
        "Таиланд",
        
        "Турция",
        
        "Украина",
        "ОАЭ",
        "Великобритания",
        "США",
        "Уругвай",
        
      ];
      const citizenships = [
        "албанское",
        "алжирское",
        "аргентинское",
        "армянское",
        "австралийское",
        "австрийское",
        "белорусское",
        "бельгийское",
        "ботсванское",
        "бразильское",
        "брунейское",
        "камерунское",
        "канадское",
        "чилийское",
        "китайское",
        "колумбийское",
        "хорватское",
        "кубинское",
        "кипрское",
        "чешское",
        "датское",
        "египетское",
        "финское",
        "французское",
        "грузинское",
        "немецкое",
        "ганское",
        "греческое",
        "исландское",
        "индийское",
        "индонезийское",
        "иранское",
        "иракское",
        "ирландское",
        "израильское",
        "итальянское",
        "японское",
        "казахстанское",
        "мексиканское",
        "микронезийское",
        "нидерландское",
        "новозеландское",
        "никарагуанское",
        "парагвайское",
        "перуанское",
        "филиппинское",
        "польское",
        "португальское",
        "катарское",
        "румынское",
        "российское",
        "сербское",
        "сейшельское",
        "сьерра-леонское",
        "сингапурское",
        "словацкое",
        "словенское",
        "соломоново",
        "сомалийское",
        "испанское",
        "шведское",
        "швейцарское",
        "сирийское",
        "таджикское",
        "танзанийское",
        "тайское",
        "турецкое",
        "украинское",
        "эмиратское",
        "британское",
        "американское",
        "уругвайское"
      ];
      const daysOfMonth = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31
      ];
      const monthsGenitive = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
      ];
      const years = [
        1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975,
        1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983,
        1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991,
        1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
        2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
        2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
        2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
        2024
      ];
    const [kGender,setKGender]=useState(0);
    const [kAppeal,setKAppeal]=useState(0);
    const [currentElemGender,setCurrentElemGender]=useState('0')
    const [currentElemAppeal,setCurrentElemAppeal]=useState('0')

    const [kCountry,setKCountry]=useState(0);
    const [currentElemCountry,setCurrentElemCountry]=useState('0')

    const [enterCountry,setEnterCountry]=useState('')

    const [kCitizen,setKCitizen]=useState(0);
    const [currentElemCitizen,setCurrentElemCitizen]=useState('0')

    const [kDay,setKDay]=useState(0);
    const [currentElemDay,setCurrentElemDay]=useState('0')

    const [kMonth,setKMonth]=useState(0);
    const [currentElemMonth,setCurrentElemMonth]=useState('0')

    const [kYear,setKYear]=useState(0);
    const [currentElemYear,setCurrentElemYear]=useState('0')

    const [enterCitizen,setEnterCitizen]=useState('')
    function genderMenu(id:string){
        if(currentElemGender==id){
            if(kGender%2==0){
                
                return <div className="finish-tourist__general-item-choices">
                    <div className="finish-tourist__general-item-choices-container">
                        <div className="finish-tourist__general-item-choice" onClick={() => {handleTouristChange(id, 'gender', 'Мужской');setKGender(c=>c+1)}}><p className='finish-tourist__general-item-choice-text'>Мужской</p></div>
                        <div className="finish-tourist__general-item-choice" onClick={() => {handleTouristChange(id, 'gender', 'Женский');setKGender(c=>c+1)}}><p className='finish-tourist__general-item-choice-text'>Женский</p></div>
                    </div>
            
                </div>
            }
        }
        
        
        
        
    }
    function appealMenu(id:string){
        if(currentElemAppeal==id){
            if(kAppeal%2==0){
                
                return <div className="finish-tourist__general-item-choices">
                    <div className="finish-tourist__general-item-choices-container">
                        <div className="finish-tourist__general-item-choice" onClick={() => {handleTouristChange(id, 'appeal', 'Мистер');setKAppeal(c=>c+1)}}><p className='finish-tourist__general-item-choice-text'>Мистер</p></div>
                        <div className="finish-tourist__general-item-choice" onClick={() => {handleTouristChange(id, 'appeal', 'Миссис');setKAppeal(c=>c+1)}}><p className='finish-tourist__general-item-choice-text'>Миссис</p></div>
                        <div className="finish-tourist__general-item-choice" onClick={() => {handleTouristChange(id, 'appeal', 'Ребёнок');setKAppeal(c=>c+1)}}><p className='finish-tourist__general-item-choice-text'>Ребёнок</p></div>
                    </div>
            
                </div>
            }
        }
        
        
    }
    function countryMenu(id:string){
        if(currentElemCountry==id){
            if(kCountry%2==0){
                
                return <div className="finish-tourist__general-item-choices">
                    <div className="finish-tourist__general-item-choices-container">
                        <input className='finish-tourist__general-item-choices-input' placeholder='Введите название страны' value={enterCountry} onChange={(e)=>{setEnterCountry(e.target.value)}} type="text" name="" id="" />
                        {top100Countries.map(country=>(
                            country.toLocaleLowerCase().includes(enterCountry)?<div className="finish-tourist__general-item-choice" onClick={() => {handleTouristChange(id, 'country', country);setKCountry(c=>c+1)}}><p className='finish-tourist__general-item-choice-text'>{country}</p></div>:""
                            
                        ))}
                        
                    </div>
            
                </div>
            }
        }
    }

    
    function citizenMenu(id:string){
        if(currentElemCitizen==id){
            if(kCitizen%2==0){
                
                return <div className="finish-tourist__general-item-choices">
                    <div className="finish-tourist__general-item-choices-container">
                        <input className='finish-tourist__general-item-choices-input' placeholder='Введите гражданство' value={enterCitizen} onChange={(e)=>{setEnterCitizen(e.target.value)}} type="text" name="" id="" />
                        {citizenships.map(country=>(
                            country.toLocaleLowerCase().includes(enterCitizen)?<div className="finish-tourist__general-item-choice" onClick={() => {handleTouristChange(id, 'citizenship', country);setKCitizen(c=>c+1)}}><p className='finish-tourist__general-item-choice-text'>{country}</p></div>:""
                            
                        ))}
                        
                    </div>
            
                </div>
            }
        }
    }
   
    function dayMenu(id:string){
        if(currentElemDay==id){
            if(kDay%2==0){
                
                return <div className="finish-tourist__general-item-choices">
                    <div className="finish-tourist__general-item-choices-container">
                        {daysOfMonth.map((d)=>(
                                    <div className="finish-tourist__general-item-choice" onClick={() => {handleTouristChange(id, 'dayBirth', d.toString());setKDay(c=>c+1)}}><p className='finish-tourist__general-item-choice-text'>{d}</p></div>
                        ))}
                        
                        
                    </div>
            
                </div>
            }
        }
        
        
    }
    function monthMenu(id:string){
        if(currentElemMonth==id){
            if(kMonth%2==0){
                
                return <div className="finish-tourist__general-item-choices">
                    <div className="finish-tourist__general-item-choices-container">
                        {monthsGenitive.map((m)=>(
                                    <div className="finish-tourist__general-item-choice" onClick={() => {handleTouristChange(id, 'monthBirth', m);setKMonth(c=>c+1)}}><p className='finish-tourist__general-item-choice-text'>{m}</p></div>
                        ))}
                        
                        
                    </div>
            
                </div>
            }
        }
        
        
    }
    function yearMenu(id:string){
        if(currentElemYear==id){
            if(kYear%2==0){
                
                return <div className="finish-tourist__general-item-choices">
                    <div className="finish-tourist__general-item-choices-container">
                        {years.map((y)=>(
                                    <div className="finish-tourist__general-item-choice" onClick={() => {handleTouristChange(id, 'yearBirth', y.toString());setKYear(c=>c+1)}}><p className='finish-tourist__general-item-choice-text'>{y}</p></div>
                        ))}
                        
                        
                    </div>
            
                </div>
            }
        }
        
        
    }
    
 
function validateName(name:string) {
    if(name.length==0){
        return false
    }
    else
    return /^[a-zA-Zа-яА-ЯёЁ'-]{2,30}$/.test(name);
  }
  
  
   
  function validateSurname(surname:string) {
    if(surname.length==0){
        return false
    }
    else
    return /^[a-zA-Zа-яА-ЯёЁ'-]{2,50}$/.test(surname);
  }
  
 
  function validatePhone(phone:string) {
    if(phone.length==0){
        return false
    }
    else
    return /^\+?[0-9\s\-\(\)]{10,20}$/.test(phone);
  }
  
 
  function validateEmail(email:string) {
    if(email.length==0){
        return false
    }
    else
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function validatePassportSeries(series:string) {
    if(series.length==0){
        return false
    }
    else
    return /^[0-9]{4}$/.test(series);
  }
  
 
  function validatePassportNumber(number:string) {
    if(number.length==0){
        return false
    }
    else
    return /^[0-9]{6}$/.test(number);
  }
  let errorEmailMass:string[]=[]
  let errorFirstNameMass:string[]=[]
  let errorSurNameMass:string[]=[]
  let errorPassportSeriesMass:string[]=[]
  let errorPassportNumberMass:string[]=[]
  let errorPhoneMass:string[]=[]
  
  const [errorEmail,setErrorEmail]=useState(errorEmailMass)
  const [errorFirstName,setErrorFirstName]=useState(errorFirstNameMass)
  const [errorSurName,setErrorSurName]=useState(errorSurNameMass)
  const [errorPassportSeries,setErrorPassportSeries]=useState(errorPassportSeriesMass)
  const [errorPassportNumber,setErrorPassportNumber]=useState(errorPassportNumberMass)
  const [errorPhone,setErrorPhone]=useState(errorPhoneMass)

  const val=useAppSelector(state=>state.travel.boolValid)
  const dis=useAppDispatch()
  useEffect(()=>{

    if(val==true){
        setErrorFirstName([])
        setErrorSurName([])
        setErrorEmail([])
        setErrorPassportNumber([])
        setErrorPassportSeries([])
        setErrorPhone([])
        tourists.forEach((u,i)=>{

            validateEmail(u.email)==false?
                setErrorEmail(c=>[...c,'Неккоректно введен email']):setErrorEmail(c=>[...c,' '])
            
            validateName(u.firstName)==false?
                setErrorFirstName(c=>[...c,'Неккоректно введено имя']):setErrorFirstName(c=>[...c,' '])
            validateSurname(u.lastName)==false?
                setErrorSurName(c=>[...c,'Неккоректно введена фамилия']):setErrorSurName(c=>[...c,' '])
            validatePassportSeries(u.passportSeria)==false?
                setErrorPassportSeries(c=>[...c,'Неккоректно введена серия документа']):setErrorPassportSeries(c=>[...c,' '])
            
            validatePassportNumber(u.numberPassport)==false?
                setErrorPassportNumber(c=>[...c,'Неккоректно введен номер пасспорта']):setErrorPassportNumber(c=>[...c,' '])
            
            validatePhone(u.phone)==false?
                setErrorPhone(c=>[...c,'Неккоректно введен номер телефона']):setErrorPhone(c=>[...c,' '])
            

            dis(swapeBoolValid(false))
        })
        
    }
  },[val])

  useEffect(()=>{

    let boolEmail=false
    let boolFirstName=false
    let boolSurName=false
    let boolPhone=false
    let boolSeria=false
    let boolNumber=false


    for(let i=0;i<errorEmail.length;i++){
        if(errorEmail[i]!=' ' || errorEmail.length==0){
            boolEmail=false
            break
        }
        else{
            boolEmail=true
        }
    }
    for(let i=0;i<errorFirstName.length;i++){
        if(errorFirstName[i]!=' ' || errorFirstName.length==0){
            boolFirstName=false
            break
        }
        else{
            boolFirstName=true
        }
    }
    for(let i=0;i<errorSurName.length;i++){
        if(errorSurName[i]!=' ' || errorSurName.length==0){
            boolSurName=false
            break
        }
        else{
            boolSurName=true
        }
    }
    for(let i=0;i<errorPhone.length;i++){
        if(errorPhone[i]!=' ' || errorPhone.length==0){
            boolPhone=false
            break
        }
        else{
            boolPhone=true
        }
    }
    for(let i=0;i<errorPassportNumber.length;i++){
        if(errorPassportNumber[i]!=' ' || errorPassportNumber.length==0){
            boolNumber=false
            break
        }
        else{
            boolNumber=true
        }
    }
    for(let i=0;i<errorPassportSeries.length;i++){
        if(errorPassportSeries[i]!=' ' || errorPassportSeries.length==0){
            boolSeria=false
            break
        }
        else{
            boolSeria=true
        }
    }

    
    if(boolEmail && boolFirstName && boolSurName && boolPhone && boolSeria && boolNumber==true){
        dis(swapePersonalBool(true))
    }
    else dis(swapePersonalBool(false))
   
  },[errorEmail,errorFirstName,errorSurName,errorPassportNumber,errorPassportSeries,errorPhone])
  
    return (
        <>
        <div className="finish-personal">
        <div className="finish-tourists">
        <div className="finish-tourists__intro">
            <h1 className='finish-tourists__intro-title'>ЗАПОЛНИТЕ ИНФОРМАЦИЮ О ТУРИСТАХ</h1>
            <p className='finish-tourists__intro-add'>*обязательное поле для заполнения</p>
        </div>
            
           
        {tourists.map((t,i) => (
                <div className="finish-tourist">
                    <h2 className='finish-tourist__title'>ТУРИСТ {t.id}</h2>
                    <div className="finish-tourist__general">
                        <h3>Основные данные</h3>
                        <div className="finish-tourist__general-items">
                            <div className="finish-tourist__general-item">
                                <p>Имя (латиницей)*</p>
                                <input placeholder='Алексей' className='finish-tourist-input' value={t.firstName} onChange={(e) => handleTouristChange(t.id, 'firstName', e.target.value)} type="text" />
                                <p className='error-mess'>{errorFirstName[i]}</p>
                            </div>
                            <div className="finish-tourist__general-item">
                                <p>Фамилия (латиницей)*</p>
                                <input placeholder='Плескунин' className='finish-tourist-input' value={t.lastName} onChange={(e) => handleTouristChange(t.id, 'lastName', e.target.value)} type="text" />
                                <p className='error-mess'>{errorSurName[i]}</p>
                            </div>
                            <div className="finish-tourist__general-item">
                                <p>Обращение*</p>
                                {/* <input className='finish-tourist-input' value={t.appeal} onChange={(e) => handleTouristChange(t.id, 'appeal', e.target.value)} type="text" /> */}
                                <div className="finish-tourist__general-item-chosen" onClick={()=>{setKAppeal(t.id==currentElemAppeal?c=>c+1:c=>c=c);setCurrentElemAppeal(t.id)}}>
                                    <p className='finish-tourist__general-item-chosen-text'>{t.appeal}</p>
                                </div>
                                {appealMenu(t.id)}
                                
                            </div>
                            <div className="finish-tourist__general-item">
                                <p>Пол*</p>
                                {/* <input className='finish-tourist-input' value={t.gender} onChange={(e) => handleTouristChange(t.id, 'gender', e.target.value)} type="text" /> */}
                                <div className="finish-tourist__general-item-chosen" onClick={()=>{setKGender(t.id==currentElemGender?c=>c+1:c=>c=c);setCurrentElemGender(t.id)}}>
                                    <p className='finish-tourist__general-item-chosen-text'>{t.gender}</p>
                                </div>
                                {genderMenu(t.id)}
                            </div>

                            <div className="finish-tourist__general-item">
                                <p>Страна рождения*</p>
                                {/* <input className='finish-tourist-input' value={t.country} onChange={(e) => handleTouristChange(t.id, 'country', e.target.value)} type="text" /> */}
                                <div className="finish-tourist__general-item-chosen" onClick={()=>{setKCountry(t.id==currentElemCountry?c=>c+1:c=>c=c);setCurrentElemCountry(t.id)}}>
                                    <p className='finish-tourist__general-item-chosen-text'>{t.country}</p>
                                </div>
                                {countryMenu(t.id)}
                            </div>
                            <div className="finish-tourist__general-item">
                                <p>Гражданство*</p>
                                {/* <input className='finish-tourist-input' value={t.citizenship} onChange={(e) => handleTouristChange(t.id, 'citizenship', e.target.value)} type="text" /> */}
                                <div className="finish-tourist__general-item-chosen" onClick={()=>{setKCitizen(t.id==currentElemCitizen?c=>c+1:c=>c=c);setCurrentElemCitizen(t.id)}}>
                                    <p className='finish-tourist__general-item-chosen-text'>{t.citizenship}</p>
                                </div>
                                {citizenMenu(t.id)}
                            </div>
                        </div>
                        <div className="finish-tourist__general-birth">
                                <p>Дата рождения*</p>
                               
                                <div className="finish-tourist__general-birth-inputs">
                                <div className="finish-tourist__general-birth-item">
                                <div className="finish-tourist__general-item-chosen" onClick={()=>{setKDay(t.id==currentElemDay?c=>c+1:c=>c=c);setCurrentElemDay(t.id)}}>
                                        <p className='finish-tourist__general-item-chosen-text'>{t.dayBirth}</p>
                                    </div>
                                    {dayMenu(t.id)}
                                </div>
                                <div className="finish-tourist__general-birth-item">
                                    <div className="finish-tourist__general-item-chosen" onClick={()=>{setKMonth(t.id==currentElemMonth?c=>c+1:c=>c=c);setCurrentElemMonth(t.id)}}>
                                        <p className='finish-tourist__general-item-chosen-text'>{t.monthBirth}</p>
                                    </div>
                                    {monthMenu(t.id)}</div>
                                    <div className="finish-tourist__general-birth-item">
                                    <div className="finish-tourist__general-item-chosen" onClick={()=>{setKYear(t.id==currentElemYear?c=>c+1:c=>c=c);setCurrentElemYear(t.id)}}>
                                        <p className='finish-tourist__general-item-chosen-text'>{t.yearBirth}</p>
                                    </div>
                                    {yearMenu(t.id)}
                                    </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className="finish-tourist__passport">
                            <h3>Паспортные данные</h3>
                            <div className="finish-tourist__passport-items">
                                <div className="finish-tourist__passport-item">
                                    <p>Серия документа*</p>
                                    <input placeholder='Серия' className='finish-tourist-input' value={t.passportSeria} onChange={(e) => handleTouristChange(t.id, 'passportSeria', e.target.value)} type="text" />
                                    <p className='error-mess'>{errorPassportSeries[i]}</p>
                                </div>
                                <div className="finish-tourist__passport-item">
                                    <p>Номер паспорта*</p>
                                    <input placeholder='Номер' className='finish-tourist-input' value={t.numberPassport} onChange={(e) => handleTouristChange(t.id, 'numberPassport', e.target.value)} type="text" />
                                    <p className='error-mess'>{errorPassportNumber[i]}</p>
                                </div>
                            </div>
                            
                    </div>

                    <div className="finish-tourist__contact">
                        <h3>Контактные данные</h3>
                        <div className="finish-tourist__contact-items">
                        <div className="finish-tourist__contact-item">
                                <p>Мобильный телефон*</p>
                                <input placeholder='+7 993 072 15 86' className='finish-tourist-input' value={t.phone} onChange={(e) => handleTouristChange(t.id, 'phone', e.target.value)} type="tel" />
                                <p className='error-mess'>{errorPhone[i]}</p>
                            </div>
                            <div className="finish-tourist__contact-item">
                                <p>E-mail*</p>
                                <input placeholder='pleskalexxx0511@gmail.com' className='finish-tourist-input' value={t.email} onChange={(e) => handleTouristChange(t.id, 'email', e.target.value)} type="email" />
                                <p className='error-mess'>{errorEmail[i]}</p>
                            </div>
                        </div>
                            
                    </div>
                </div>
            ))}
        </div>
        </div>
       
            
        </>
    );
};

export default FinishPersonal;