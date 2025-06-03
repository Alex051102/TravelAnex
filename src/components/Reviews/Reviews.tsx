
import "./Reviews.css"
import ScrollBar from '../ScrollBar/ScrollBar'
import reviews from "../../assets/icons/Reviews.svg"
export default function Reviews() {
  return (
    <>

      <div className="reviews">
        <div className="reviews__container">
          <div className="reviews__up">
            <div className="reviews__up-container">
            <img className='reviews__cursive' src={reviews} alt="" />
            <h2 className='reviews__title'>ОТЗЫВЫ</h2>
            <p className='reviews__subtitle'>ВПЕЧАТЛЕНИЯ НАШИХ ПУТЕШЕСТВЕНИКОВ</p>
            </div>
            
          </div>
          
      
          
        </div>
      </div>
      <ScrollBar type='reviews'></ScrollBar>
    </>
  )
}
