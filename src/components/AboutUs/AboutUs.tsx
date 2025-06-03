
import './AboutUs.css'
import img1 from "../../assets/images/aboutUsImg1.png"
import img2 from "../../assets/images/aboutUsImg2.png"
import we from "../../assets/icons/We.svg"
import social1 from "../../assets/icons/facebook.svg"
import social2 from "../../assets/icons/instagram.svg"
import social3 from "../../assets/icons/ok.svg"
import social4 from "../../assets/icons/whatsapp.svg"
import social5 from "../../assets/icons/telegram.svg"
import social6 from "../../assets/icons/vk.svg"
export default function AboutUs() {
  return (
   <>
     <div className="about-us">
        <div className="about-us__container">
            <div className="about-us__up">
                <img className='about-us__cursive' src={we} alt="" />
                <h2 className='about-us__title'>О НАС</h2>
                <p className='about-us__subtitle'>ВДОХНОВЛЯЕМ МИР НА ПУТЕШЕСТВИЯ</p>
            </div>
            <div className="about-us__main">
                <div className="about-us__main-block-1">
                <div className="about-us__text-outer text-1">
                <h1 className='about-us__we'>МЫ</h1>
                <p className='about-us__text'> — команда профессионалов, влюбленных в                                      искусство путешествий. Наша история началась                                      с мечты о том, чтобы сделать каждое путешествие незабываемым, каждое приключение уникальным.<br></br>
Наша миссия — сделать путешествия доступными и незабываемыми. Мы предлагаем вам не просто туры, а волшебные истории, которые будут жить в вашем сердце навсегда. Независимо от того, ищете ли вы релакс на пляже, культурные изыски или экстремальные приключения, мы создадим для вас оптимальное путешествие, подстроенное под ваши уникальные желания.</p>
               </div>
               <img className='about-us__img img-1' src={img1} alt="" />
                </div>
               
                <div className="about-us__main-block-2">
                <img className='about-us__img img-2' src={img2} alt="" />
               <div className="about-us__text-outer text-2">
                <p className='about-us__text'>Мы гордимся нашей командой опытных специалистов, каждый из которых разделяет страсть к туризму и стремление сделать ваше путешествие незабываемым. Мы внимательно следим за последними тенденциями в индустрии, чтобы предложить вам только лучшие и самые актуальные варианты.</p>
               </div>
               <div className="about-us__text-outer text-3">
                <p className='about-us__text'>Присоединяйтесь к нам в этом захватывающем путешествии! Мы готовы подарить вам моменты радости, вдохновения и удивления в каждом уголке нашего удивительного мира.</p>
               </div>
                </div>
               
            </div>
            <div className="about-us__contacts">
                <div className="about-us__contacts-container">
                    <div className="about-us__social">
                        <div className="about-us__social-container">
                        <h2 className='about-us__contacts-title'>СВЯЗАТЬСЯ С НАМИ</h2>
                        <div className="about-us__social-images">
                            <img className='about-us__social-image' src={social1} alt="" />
                            <img className='about-us__social-image' src={social2} alt="" />
                            <img className='about-us__social-image' src={social3} alt="" />
                            <img className='about-us__social-image' src={social4} alt="" />
                            <img className='about-us__social-image' src={social5} alt="" />
                            <img className='about-us__social-image' src={social6} alt="" />
                        </div>
                        </div>
                        
                    </div>
                    <div className="about-us__call">
                        <div className="about-us__call-container">
                            <h2 className="about-us__contacts-title">КОНТАКТЫ</h2>
                            <div className="about-us__contacts-phones">
                                <p className='about-us__contacts-text'>+ 8 (495) 626-26-96</p>
                                <p className='about-us__contacts-text'>+ 8 (925) 826-26-96</p>
                            </div>
                            <p className="about-us__contacts-text about-us__contacts-text--underline">ANEXTOURCHERTAOVO@GMAIL.COM</p>
                        </div>
                    </div>
                    <div className="about-us__adress">
                        <div className="about-us__adress-container">
                        <h2 className="about-us__contacts-title">АДРЕС</h2>
                        <p className='about-us__contacts-text'>Москва, Россошанский проезд,<br></br> дом 3, (1‑й этаж)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
   </>
  )
}
