
import "./Home.css"
import homeback from "../../assets/images/homeBack.png"
import PickUpArea from '../PickUpArea/PickUpArea'
import HotTours from '../HotTours/HotTours'
import PopularHotels from '../PopularHotels/PopularHotels'
import HelpBanner from '../HelpBanner/HelpBanner'
import Reviews from '../Reviews/Reviews'
import NewsHome from '../NewsHome/NewsHome'
import AboutUs from '../AboutUs/AboutUs'
export default function Home() {
  return (

    <>
    <div className="home">
      <div className="home__container">
        <section className="home__intro" style={{background:`url(${homeback})`,backgroundSize:"cover"}}>
          <div className="home__intro-container">
          <div className="home__intro-text">
            <div className="home__intro-text-container">
              <h1 className='home__intro-text-title'>ПУТЕШЕСТВИЯ МЕЧТЫ</h1>
              <p className='home__intro-text-subtitle'>ВЫБЕРИ СВОЮ</p>
            </div>
          
            
          </div>
          <PickUpArea></PickUpArea>
          
          </div>
          
          
        </section>
        <div className="home__delet-to-adaptive">
        <HotTours></HotTours>
        <PopularHotels></PopularHotels>
        <HelpBanner bg="/src/assets/images/helpBanner1.png" type='bottom' text='НЕ ОПРЕДЕЛИЛИСЬ С ВЫБОРОМ?'></HelpBanner>
        <Reviews></Reviews>
        <NewsHome></NewsHome>
        <AboutUs></AboutUs>
        <HelpBanner bg="/src/assets/images/helpbanner2.png" type='' text='МЫ МОЖЕМ СОЗДАТЬ ВАШЕ ПУТЕШЕСТВИЕ'></HelpBanner>
        </div>
       
      </div>
    </div>
    </>
  )
}
