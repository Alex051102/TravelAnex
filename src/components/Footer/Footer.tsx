
import "./Footer.css"
import { Link } from 'react-router-dom'
import logo from "../../assets/images/footerLogo.png"
import email from "../../assets/icons/emailicon.svg"
import social1 from "../../assets/icons/okFooter.svg"
import social2 from "../../assets/icons/vkFooter.svg"
import social3 from "../../assets/icons/facebookFooter.svg"
import social4 from "../../assets/icons/telegramFooter.svg"
import social5 from "../../assets/icons/whatsappFooter.svg"
import social6 from "../../assets/icons/instagramFooter.svg"
export default function Footer() {
  return (
    <>
    <div className="footer">
        <div className="footer__container">
            <div className="footer__up">
                <div className="footer__up-container">
                <div className="footer__logo-outer"><img className='footer__logo' src={logo} alt="" /></div>
                <div className="footer__email-outer">
                    <p className="footer__email-text">УЗНАВАЙТЕ О ГОРЯЩИХ ТУРАХ ПЕРВЫМИ</p>
                    <div className="footer__email-input-outer">
                        <div className="footer__email-input-outer-container">
                            <img src={email} alt="" />
                            <input className='footer__email-input' placeholder='Введите почту' type="text" />
                        </div>
                       
                    </div>
                </div>
                </div>
               
            </div>
            <div className="footer__list-outer">
                
                <ul className='footer__list'>
                    <li className='footer__list-item '><Link className='footer__list-item-link' to="">ПОДБОР ТУРА</Link></li>
                    <li className='footer__list-item'><Link className='footer__list-item-link' to="">ГОРЯЩИЕ ТУРЫ</Link></li>
                    <li className='footer__list-item'><Link className='footer__list-item-link' to="">СТРАНЫ И ОТЕЛИ</Link></li>
                    <li className='footer__list-item'><Link className='footer__list-item-link' to="">PRIORITY</Link></li>
                    <li className='footer__list-item'><Link className='footer__list-item-link' to="">ОПЛАТА</Link></li>
                    <li className='footer__list-item'><Link className='footer__list-item-link' to="">ОТЗЫВЫ</Link></li>
                    <li className='footer__list-item'><Link className='footer__list-item-link' to="">О НАС</Link></li>
                    <li className='footer__list-item'><Link className='footer__list-item-link' to="">КОНТАКТЫ</Link></li>
                </ul>
            </div>
            <div className="footer__social">
                <div className="footer__social-container">
                    <img className='footer__social-image' src={social1} alt="" />
                    <img className='footer__social-image' src={social2} alt="" />
                    <img className='footer__social-image' src={social3} alt="" />
                    <img className='footer__social-image' src={social4} alt="" />
                    <img className='footer__social-image' src={social5} alt="" />
                    <img className='footer__social-image' src={social6} alt="" />
                </div>
                
            </div>
            <div className="footer__down">
                <div className="footer__down-container"><p className='footer__down-text'>2023 © Anex Tour - Туристическая компания</p></div>
                
            </div>
        </div>
    </div>
    </>
  )
}
