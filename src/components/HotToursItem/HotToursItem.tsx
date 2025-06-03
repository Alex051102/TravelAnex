
import arr from "../../assets/icons/strangeArrow.svg"
import "./HotToursItem.css"
const HotToursItem:React.FC<{days:number,basePrice:number,country:string,time:string,image:string}>=({days,basePrice,country,time,image})=>{
  return (
    <>
    <div className="hot-tours__item" style={{background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="hot-tours__item-container">
            <div className="hot-tours__item-up">
                <div className="hot-tours__item-up-container">
                    <div className="hot-tours__item-days"><p className='hot-tours__text hot-tours__text--padding'>{days} дней</p></div>
                    <div className="hot-tours__item-price"><p className='hot-tours__text hot-tours__text--padding'>от {basePrice} ₽</p></div>
                </div>
            </div>
            <div className="hot-tours__item-down">
                <p className='hot-tours__text hot-tours__text--bald'>{country}</p>
                <p className='hot-tours__text hot-tours__text--bald'>{time}</p>
                <div className="hot-tours__show-more">
                    <p className='hot-tours__text'>узнать подробнее</p>
                    <img src={arr} alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HotToursItem
