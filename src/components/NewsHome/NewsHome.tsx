
import './NewsHome.css'
import news from "../../assets/icons/News.svg"
import arr from "../../assets/icons/strangeArrow.svg"
import img1 from '../../assets/images/news-img1.png'
import img2 from '../../assets/images/news-img2.png'
import img3 from '../../assets/images/news-img3.png'
import img4 from '../../assets/images/news-img4.png'
import img5 from '../../assets/images/news-img5.png'
import img6 from '../../assets/images/news-img6.png'
import img7 from '../../assets/images/news-img7.png'
import Button from '../Button/Button'
export default function NewsHome() {
  return (
    <>
      <div className="news-home">
        <div className="news-home__container">
            <div className="news-home__up">
                <h2 className='news-home__up-title'>НОВОСТИ</h2>
                <p className='news-home__up-subtitle'>СОБЫТИЯ В МИРЕ ТУРИЗМА</p>
                <img src={news} className='news-home__cursive' alt="" />
            </div>
            <div className="news-home__main">
              <div style={{background:`linear-gradient( rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5) ),url(${img2})`}} className="news-home__big-card card-1">
                <div className="news-home__big-card-container news-home__big-card-container--column-1">
                <h2 className='news-home__card-title'>ОТДЫХ С ДЕТЬМИ:О ЧЕМ НУЖНО ПОМНИТЬ В ПУТЕШЕСТВИИ</h2>
                <div className="news-home__read">
                  <p className='news-home__read-text'>читать</p>
                  <img src={arr} alt="" />
                </div>
                </div>
              </div>
              <div style={{background:`url(${img1})`}} className="news-home__small-card card-2">
                <div className="news-home__small-card-container">
                <h4 className='news-home__card-title'>ТОП 10 УНИКАЛЬНЫХ И ЗАВОРАЖИВАЮЩИХ МЕСТ В ОАЭ</h4>
                <div className="news-home__read">
                  <p className='news-home__read-text'>читать</p>
                  <img src={arr} alt="" />
                </div>
                </div>
                

              </div>
              <div style={{background:`url(${img3})`}}className="news-home__small-card card-3">
                <div className="news-home__small-card-container">
                <h4 className='news-home__card-title'>ОТДЫХ,БЛИЗКИЙ К ПРИРОДЕ И ЭКОЛОГИИ</h4>
                <div className="news-home__read">
                  <p className='news-home__read-text'>читать</p>
                  <img src={arr} alt="" />
                </div>
                </div>
                

              </div>
              <div style={{background:`linear-gradient( rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5) ),url(${img4})`}} className="news-home__small-card card-4">
                <div className="news-home__small-card-container">
                <h4 className='news-home__card-title'>БОГАТСТВО КУЛЬТУРНЫХ И ИСТОРИЧЕСКИХ СОКРОВИЩ РАЗНЫХ СТРАН</h4>
                <div className="news-home__read">
                  <p className='news-home__read-text'>читать</p>
                  <img src={arr} alt="" />
                </div>
                </div>
                

              </div>
              <div style={{background:`url(${img5})`}} className="news-home__big-card card-5">
                <div className="news-home__big-card-container news-home__big-card-container--column-2">
                <h2 className='news-home__card-title'>КАК СДЕЛАТЬ ПУТЕШЕСТВИЕ НЕЗАБЫВАЕМЫМ ДЛЯ ВСЕХ</h2>
                <div className="news-home__read">
                  <p className='news-home__read-text'>читать</p>
                  <img src={arr} alt="" />
                </div>
                </div>
              </div>
              <div style={{background:`linear-gradient( rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5) ),url(${img6})`}} className="news-home__small-card card-6">
                <div className="news-home__small-card-container">
                <h4 className='news-home__card-title'>ПУТЕШЕСТВИЯ,КОТОРЫЕ ПРИВЕДУТ ВАС В МИР ВЫСОТ, ГЛУБИН И СКОРОСТИ</h4>
                <div className="news-home__read">
                  <p className='news-home__read-text'>читать</p>
                  <img src={arr} alt="" />
                </div>
                </div>
                

              </div>
              <div style={{background:`linear-gradient( rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5) ),url(${img7})`}} className="news-home__small-card card-7">
                <div className="news-home__small-card-container">
                <h4 className='news-home__card-title'>ТОП 10 УНИКАЛЬНЫХ И ЗАВОРАЖИВАЮЩИХ МЕСТ В ОАЭ</h4>
                <div className="news-home__read">
                  <p className='news-home__read-text'>читать</p>
                  <img src={arr} alt="" />
                </div>
                </div>
                

              </div>
              <div className="news-home__button">
              <Button color='white' type='' text='Больше отелей'></Button>
              </div>
              
            </div>
        </div>
      </div>
    </>
  )
}
