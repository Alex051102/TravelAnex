import React, { useEffect, useState } from 'react'
import './Filters.css'
import exit from "../../assets/icons/exit.svg"
import star from "../../assets/icons/star-filter.svg"
import Button from '../Button/Button';
import { useAppDispatch } from '../../hook';
import { boolFilters,filtersSeasonChoosen,filtersPlusesChoosen ,filtersTimeChoosen,filtersFoodChoosen} from '../../store/travelSlice';
export default function Filters() {
    const [values, setValues] = useState([0, 100]);
    console.log(values);
    const filterSeason:string[]=[]
    const filterPluses:string[]=[]
    const filterFood:string[]=[]
   
   
    const dis=useAppDispatch()

    function appendChecked(e: React.ChangeEvent<HTMLInputElement>,name:string,category:string){
        if(category=='season'){
            if(e.target.checked==true){
                filterSeason.push(name)
                console.log(filterSeason)
            }
            else{
               filterSeason.forEach((item,i)=>{
                if(name==item){
                    filterSeason.splice(i,1)
                    console.log(filterSeason)
                }
               })
            }
        }
        if(category=='pluses'){
            if(e.target.checked==true){
                filterPluses.push(name)
                console.log(filterPluses)
            }
            else{
                filterPluses.forEach((item,i)=>{
                if(name==item){
                    filterPluses.splice(i,1)
                    console.log(filterPluses)
                }
               })
            }
        }
        if(category=='food'){
            if(e.target.checked==true){
                filterFood.push(name)
                
            }
            else{
                filterFood.forEach((item,i)=>{
                if(name==item){
                    filterFood.splice(i,1)
                    
                }
               })
            }
        }
        
    }
    
    function choosenFilters(){
        dis(filtersSeasonChoosen(filterSeason))
        dis(filtersPlusesChoosen(filterPluses))
        dis(filtersTimeChoosen(values))
        dis(filtersFoodChoosen(filterFood))
        dis(boolFilters(false))
        
    }
    
   
   
 
  return (
   <>
   <div className="modal-filters">
   <div className="filters">
            <div className="filters__container">
                <div className="filters__up">
                    <h2>Фильтры</h2>
                    <img onClick={()=>dis(boolFilters(false))} src={exit} alt="" />
                </div>
                <div className="filters__offers">
                    <h3>ПРЕДЛОЖЕНИЯ</h3>
                    <form className='filters__list'>
                        <div className="filters__list-item">
                            <input onChange={(e)=>{appendChecked(e,'Горящие туры','season')}} type="checkbox" id='hot'/>
                            <label htmlFor="hot">Горящие туры</label>
                        </div>
                        
                        <div className="filters__list-item">
                            <input onChange={(e)=>{appendChecked(e,'Зима','season')}} type="checkbox" id='winter'/>
                            <label htmlFor="winter">Зима</label>
                        </div>
                        <div className="filters__list-item">
                            <input onChange={(e)=>{appendChecked(e,'Весна','season')}} type="checkbox" id='spring'/>
                            <label htmlFor="spring">Весна</label>
                        </div>

                        <div className="filters__list-item">
                            <input onChange={(e)=>{appendChecked(e,'Лето','season')}} type="checkbox" id='summer'/>
                            <label htmlFor="summer">Лето</label>
                        </div>
                        <div className="filters__list-item">
                            <input onChange={(e)=>{appendChecked(e,'Осень','season')}} type="checkbox" id='autumn'/>
                            <label htmlFor="autumn">Осень</label>
                        </div>
                    </form>
                </div>
                <div className="filters__offers">
                    <h3>ВЫБРАНО ДЛЯ ВАС</h3>
                    <form className='filters__list'>
                        <div className="filters__list-item">
                            <input onChange={(e)=>{appendChecked(e,'все включено','pluses')}}  type="checkbox" id='all'/>
                            <label htmlFor="all">Все включено</label>
                        </div>
                        <div className="filters__list-item">
                            <input onChange={(e)=>{appendChecked(e,'бесплатный трансфер','pluses')}} type="checkbox" id='free-transfer'/>
                            <label htmlFor="free-transfer">Бесплатный трансфер</label>
                        </div>
                        <div className="filters__list-item">
                            <input onChange={(e)=>{appendChecked(e,'спа-центр','pluses')}} type="checkbox" id='spa'/>
                            <label htmlFor="spa">СПА</label>
                        </div>
                    </form>
                </div>
                <div className="filters__offers">
                    <h3>ПРОДОЛЖИТЕЛЬНОСТЬ ПРЕБЫВАНИЯ</h3>
                    <div className="invisible-track-container">
                    <div 
        className="active-track"
        style={{
          left: `${values[0]}%`,
          width: `${values[1] - values[0]}%`
        }}
      ></div>
      <input
        type="range"
        min="0"
        max="100"
        value={values[0]}
        onChange={(e) => setValues([Math.min(+e.target.value, values[1] - 1), values[1]])}
        className="invisible-track-thumb"
      />
      <input
        type="range"
        min="0"
        max="100"
        value={values[1]}
        onChange={(e) => setValues([values[0], Math.max(+e.target.value, values[0] + 1)])}
        className="invisible-track-thumb"
      />
                    </div>
                   
                   <div className="filters-time">
                    
                    <p>Oт {values[0]} до {values[1]} дней</p>
                    
                   </div>
                </div>
                <div className="filters__offers">
                    <h3>ЕДА</h3>
                    <form className='filters__list'>
                        <div className="filters__list-item">
                            <input onChange={(e)=>{appendChecked(e,'2-х разовое питание','food')}} type="checkbox" id='food-2'/>
                            <label htmlFor="food-2">2-х разовое питание</label>
                        </div>

                        <div className="filters__list-item">
                            <input onChange={(e)=>{appendChecked(e,'3-x разовое питание','food')}} type="checkbox" id='food-3'/>
                            <label htmlFor="food-3">3-х разовое питание</label>
                        </div>
                        <div className="filters__list-item">
                            <input onChange={(e)=>{appendChecked(e,'все включено','food')}} type="checkbox" id='food-all'/>
                            <label htmlFor="food-all">Все включено</label>
                        </div>

                        <div className="filters__list-item">
                            <input onChange={(e)=>{appendChecked(e,'обед','food')}} type="checkbox" id='food-lunch'/>
                            <label htmlFor="food-lunch">Обеды</label>
                        </div>
                        <div className="filters__list-item">
                            <input onChange={(e)=>{appendChecked(e,'завтраки','food')}} type="checkbox" id='food-breakfast'/>
                            <label htmlFor="food-breakfast">Завтраки</label>
                        </div>
                    </form>
                </div>

                <div className="filters__offers">
                    <h3>РЕЙТИНГ ОТЕЛЯ</h3>
                    <form className='filters__list'>
                        <div className="filters__list-item">
                            <input name='stars' type="radio" id='stars-5'/>
                            <label htmlFor="stars-5">от 5 <img src={star} alt="" /></label>
                        </div>
                        <div className="filters__list-item">
                            <input name='stars' type="radio" id='stars-4'/>
                            <label htmlFor="stars-4">от 4 <img src={star} alt="" /></label>
                        </div>
                        <div className="filters__list-item">
                            <input name='stars' type="radio" id='stars-3'/>
                            <label htmlFor="stars-3">от 3 <img src={star} alt="" /></label>
                        </div>
                        <div className="filters__list-item">
                            <input name='stars' type="radio" id='stars-any'/>
                            <label htmlFor="stars-any">Любой</label>
                        </div>
                    </form>
                </div>
                <div className="filters__actions">
                    <div className="filters__reset">
                        <p>Очистить</p>
                    </div>
                    <div onClick={choosenFilters} className="filters__choose">
                        <Button text='Применить' type='' color='black'></Button>
                    </div>
                </div>
            </div>
        </div>
   </div>
        
   </>
  )
}
