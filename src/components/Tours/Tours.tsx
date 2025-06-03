import React, { useEffect, useState } from 'react'
import PickUpArea from '../PickUpArea/PickUpArea'
import "./Tours.css"
import backIntro from "../../assets/images/helpBanner1.png"
import sort from "../../assets/icons/sort.svg"
import filters from "../../assets/icons/filters.svg"
import db from "../../../db.json"
import TourItem from '../TourItem/TourItem'
import { useAppDispatch, useAppSelector } from '../../hook'
import { boolFilters } from '../../store/travelSlice'
export default function Tours() {
    interface AvailableRoom {
        nameRoom: string;
        plusesRoom: string[];
        addPrice: number;
      }
      
      interface GeoPosition {
        near: string[];
        communication: string[];
        distanceToAirPort: string[];
      }
      
      interface About {
        inGeneral: string[];
        sportAndEntertaiment: string[];
        swimmingPool: string[];
        spa: string[];
        services: string[];
        contacts: string[];
      }
      
      interface FoodCategory {
        pluses: string[];
      }
      
      interface FoodAllInclusive extends FoodCategory {
        addPrice: number;
      }
      
      interface Food {
        places: string[];
        baseFoodCategory: FoodCategory;
        foodAllInClusive: FoodAllInclusive;
      }
      
      interface Resort {
        name: string;
        country: string;
        id:number;
        image: string;
        flyOut: string;
        rating: number;
        basePrice: number;
        time: string;
        timeNumber: string;
        startTime: number;
        days: number;
        reasonWhy: string;
        fastPluses: string[];
        availableRooms: AvailableRoom[];
        geoPosition: GeoPosition;
        beaches: string[];
        about: About;
        forKids: string[];
        food: Food;
      }


     
      function choiceCountry(countr:string){
        const countries=localStorage.getItem('countries')?.split(',')
        
        
        
        if(localStorage.getItem('countries')==''){
            
            return true
        }
        if(countries?.find(c=>c==countr)!=undefined){
            
            return true
        }
        else{
            return false
        }
      }

      // Функция преобразования строки "DD.MM.YY" в Unix-время (секунды)
function dateStringToUnixTimestamp(dateStr: string): number {
    if (!dateStr || dateStr.trim() === "") return NaN; // Проверка на пустую строку

    const [day, month, shortYear] = dateStr.split('.').map(Number);
    const fullYear = 2000 + shortYear; // Преобразуем "25" в 2025
    const date = new Date(fullYear, month - 1, day);
    return Math.floor(date.getTime() / 1000);
}

function choiceDate(date: number): boolean {
    const dates = localStorage.getItem('date')?.split(',');

    console.log(dates);
    
    if (!dates || dates.length === 0) {
        return false;
    }

    if (dates[0] === '') {
        return true;
    }

    try {
        const start = dateStringToUnixTimestamp(dates[0]);
        
        // Если есть вторая дата (диапазон)
        if (dates.length > 1 && dates[1].length > 0) {
            const end = dateStringToUnixTimestamp(dates[1]);
            return date >= start && date <= end;
        } 
        // Если только одна дата
        else {
            return date === start;
        }
    } catch (error) {
        console.error('Error parsing dates:', error);
        return false;
    }
}

// Вспомогательная функция для преобразования "DD.MM.YY" в Unix-время

// Функция проверки даты


    function choiceNightss(nights:number){
        const nightss = localStorage.getItem('nights')?.split(',').map(Number);

        console.log(nightss)

        if(nightss!=undefined && nightss[0]==0){
            return true
        }

        if(nightss!=undefined){
            const start=nightss[0];
            if(nightss.length==2){
                const end=nightss[1]
                if(nights>=start && nights<=end){
                    return true
                }
                else{
                    return false
                }
            }
            else{
                if(nights==start){
                    return true
                }
                else{
                    return false
                }
            }
        }
    }

      function choosenParam(){
        const choice:Resort[]=[]
        const all=db.hotels.flatMap(hotel => hotel.tours);
        all.forEach(i=>{
            if(choiceCountry(i.country)==true && choiceDate(i.startTime)==true && choiceNightss(i.days)==true ){
                choice.push(i)
            }
        })
        return choice
      }
    const [chooseSort,setChooseSort]=useState("")
    const allTours = choosenParam();
    const allToursFiltered:Resort[]=[];
    const [sortedArr,setSortedArr]=useState(allTours)
    const dis=useAppDispatch()
    const filtersSeason=useAppSelector(state=>state.travel.filtersSeason)
    const filtersPluses=useAppSelector(state=>state.travel.filtersPluses)
    const filtersTime=useAppSelector(state=>state.travel.filtersTime)
    const filtersFood=useAppSelector(state=>state.travel.filtersFood)

    const idTour=useAppSelector(state=>state.travel.idTour)

    const [empty,setEmpty]=useState(0)
    useEffect(()=>{

    },[idTour])

    let month:string[]=[]
   
    filtersSeason.forEach(season=>{
        if(season=='Весна'){
            for (let i=3;i<6;i++){
                month.push(`0${i}`)
            }
        }
        if(season=='Зима'){
            for (let i=1;i<3;i++){
                month.push(`0${i}`)
            }
            month.push('12')
        }
        if(season=='Лето'){
            for (let i=6;i<9;i++){
                month.push(`0${i}`)
            }
        }
        if(season=='Осень'){
            for (let i=9;i<12;i++){
                month.push(`0${i}`)
            }
        }
        
        
})

function plusesFilter(i: string[]) {
    
    if (filtersPluses.length == 0) {
        return true;
    }
    
    // Используем some вместо forEach, чтобы вернуть true при первом совпадении
    return filtersPluses.every(i2 => i.includes(i2));
}

function seasonFilter(s:string){
   
    if(month.length==0){
        return true
    }
    else{
        if(month.includes(s)){
            return true
        }
        else{
            return false
        }
    }
   
}

function timeFilter(i:number){
    
    if(i>=filtersTime[0] && i<=filtersTime[1]){
  
        return true
    }
    else{
        return false
    }
}
function foodFilter(base:string[],inclusive:string[]){
    if (filtersFood.length == 0) {
        return true;
    }
    const allFood:string[]=[]
    base.forEach(i=>{
        allFood.push(i)
    })
    inclusive.forEach(i=>{
        allFood.push(i)
    })

    console.log(allFood)
    console.log(filtersFood)
    return filtersFood.every(i2 => allFood.includes(i2));
    
}


allTours.forEach(i=>{
        if(filtersSeason.length==0 && filtersPluses.length==0 && filtersTime.length==0){
            allToursFiltered.push(i);
        }
        else{
        let seas=i.timeNumber[3]+i.timeNumber[4];

        /* console.log(`${seasonFilter(seas)}`+` ${plusesFilter(i.fastPluses)}`+` ${timeFilter(i.days)}`) */
        
        if(seasonFilter(seas)==true && plusesFilter(i.fastPluses)==true && timeFilter(i.days)==true && foodFilter(i.food.baseFoodCategory.pluses,i.food.foodAllInClusive.pluses)==true ){
                allToursFiltered.push(i);
        }
        }  

       


        
       
})
   

    
   
   
    function sordByPriceDownUp(){
        
        const allTours = allToursFiltered;
    
        
        const sortedTours = [...allTours].sort((a, b) => a.basePrice - b.basePrice);
        
        return sortedTours;
    }
    function sordByRatingUpDown(){
        const allTours = allToursFiltered;
    
       
        const sortedTours = [...allTours].sort((a, b) => b.rating - a.rating);
        
        return sortedTours;
    }
    function sordByDateUpDown(){
        const allTours = allToursFiltered;
        const sortedTours = [...allTours].sort((a, b) => a.startTime-b.startTime);
        
        return sortedTours;
    }


    
    function choosenTypeOfSort(type:string){
        setChooseSort(type);

        let clearMenu=document.getElementById("sort") as HTMLInputElement

        clearMenu.checked=false;
    }


    

    useEffect(() => {
        
        if (chooseSort === "низшая цена") {
            setSortedArr(sordByPriceDownUp());
        }
        if (chooseSort === "высший рейтинг") {
            setSortedArr(sordByRatingUpDown());
        } 
        if (chooseSort === "самая ранняя дата") {
            setSortedArr(sordByDateUpDown());
        }
        if (chooseSort === "ничего не выбрано") {
            setSortedArr(allToursFiltered);
        }
    }, [chooseSort]); 

    const [pages,setPages]=useState([0,8])

    const [massPages,setMassPage]=useState(
    <>
               <p onClick={()=>{setPages([0,8])}}>1</p>
                <p onClick={()=>{setPages([9,17])}}>2</p>
                <p onClick={()=>{setPages([18,26])}}>3</p> 
                <p onClick={()=>{setPages([27,36])}}>4</p> 
    </>)

    
  
    useEffect(()=>{
        if(sortedArr.length<37){
            setMassPage(<>
                <p onClick={()=>{setPages([0,8])}}>1</p>
                <p onClick={()=>{setPages([9,17])}}>2</p>
                <p onClick={()=>{setPages([18,26])}}>3</p> 
                <p onClick={()=>{setPages([27,36])}}>4</p> 
                </>)
        }
        if(sortedArr.length<27){
            setMassPage(<>
                <p onClick={()=>{setPages([0,8])}}>1</p>
                <p onClick={()=>{setPages([9,17])}}>2</p>
                <p onClick={()=>{setPages([18,26])}}>3</p> 
                    
                    </>)
        }
        if(sortedArr.length<18){
            setMassPage(<>
                <p onClick={()=>{setPages([0,8])}}>1</p>
                <p onClick={()=>{setPages([9,17])}}>2</p>
                    
                    
                    </>)
        }
        if(sortedArr.length<9){
            setMassPage(<>
                <p onClick={()=>{setPages([0,8])}}>1</p>
                
                    
                    
                    </>)
        }
    },[sortedArr])
        
        
    

  return (
    <>
    <div className="tours">
        <div className="tours-intro" style={{background:`url(${backIntro})`}}>
            <div className="tours-intro__container">
            <PickUpArea></PickUpArea>
            </div>
            
        </div>
        <div className="tours-main">
           
            
            <div className="tours-main__container">
                <input type="checkbox" id="sort" hidden></input>
                <div className="tours-main__sort-variants">
                    <div className="tours-main__sort-variant">
                        <p className='tours-main__sort-variant-text' onClick={()=>{choosenTypeOfSort("ничего не выбрано")}}>ничего не выбрано</p>
                    </div>
                    <div className="tours-main__sort-variant">
                        <p className='tours-main__sort-variant-text' onClick={()=>{choosenTypeOfSort("высший рейтинг")}}>высший рейтинг</p>
                    </div>
                    <div className="tours-main__sort-variant">
                        <p className='tours-main__sort-variant-text' onClick={()=>{choosenTypeOfSort("низшая цена")}}>низшая цена</p>
                    </div>
                    <div className="tours-main__sort-variant tours-main__sort-variant--no-border">
                        <p className='tours-main__sort-variant-text' onClick={()=>{choosenTypeOfSort("самая ранняя дата")}}>самая ранняя дата</p>
                    </div>
                    </div>

                <div className="tours-main__nav">
                    <p className='tours-main__nav-text tours-main__nav-text--grey'>Главная /</p>
                    <p className='tours-main__nav-text'>Подбор тура</p>
                </div>
                <div className="tours-main__title">
                    <h1 className='tours-main__title-text'>НАЙДЕННЫЕ ВАРИНАТЫ</h1>
                    <p className='tours-main__title-number'>(2999 предложений)</p>
                </div>
                <div className="tours-main__options">
                    
                    <div className="tours-main__sorted">
                        <img className='tours-main__sorted-img' src={sort} alt="" />
                        <label className='tours-main__sorted-text' htmlFor="sort">Сортировать:</label>
                        <p className='tours-main__sorted-text'>{chooseSort}</p>
                    </div>
                    <div onClick={()=>dis(boolFilters(true))} className="tours-main__filters">
                        <button className='tours-main__filters-button'>
                            <img src={filters} alt="" />
                            <p>Фильтры</p>
                        </button>
                    </div>
                </div>
                <div className="tours-main__cards" >

                   {sortedArr.slice(pages[0],pages[1]).map(hotel=>(
                        
                        <TourItem idTour={hotel.id} imageHotel={hotel.image} coutry={hotel.country} nameHotel={hotel.name} rating={hotel.rating} date={hotel.time} add={hotel.fastPluses} price={hotel.basePrice}></TourItem>
                        
                    )
                    
                   )}
                   <div className="tours-pagination">
                    <div className="tours-pagination__container">
                        {massPages}
                    </div>
                        
                   </div>
                </div>
            </div>
        </div>
    </div>
        
        
    </>
  )
}
