import { useRef } from 'react'
import axios from 'axios'
import logo2 from '../assets/img/logo2.png'
import PhoneSvg from '../assets/img/icon/phone'
import WhatsappSvg from '../assets/img/icon/whatsapp'
import ViberSvg from '../assets/img/icon/viber'
import ArrowSvg from '../assets/img/icon/arrow'

const FooterModul = (props) => {
  const { ...rest } = props
  const refName = useRef(null)
  const refPhone = useRef(null)

  const sendForm = async () => {
    const data = {
      email: 'accountas@mail.ru',
      name: refName.current.value,
      phone: refPhone.current.value,
    }

    await axios
      .post(`http://127.0.0.1:8000/send`, data)
      .then(async (res) => {
        console.log(res)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const ScrollUp = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className="footer" {...rest}>
      <div className="footer-feedback">
        <div className="footer-feedback-call">
          <h3>Свяжитесь с нами:</h3>
          <div className="footer-feedback-call-social">
            <PhoneSvg />
            <WhatsappSvg />
            <ViberSvg />
          </div>
          <a href="tel:+79821280707">+7 (982) 128-07-07</a>
        </div>
        <div className="footer-feedback-form">
          <div className="footer-feedback-form-title">
            Или оставьте свои контакты и мы перезвоним
          </div>
          <div className="footer-feedback-form-box">
            <div className="footer-feedback-form-box-input">
              <label>Ваше имя *</label>
              <input ref={refName} placeholder="Например, Иван Петров" />
            </div>
          </div>
          <div className="footer-feedback-form-box margin-box">
            <div className="footer-feedback-form-box-input">
              <label>Телефон *</label>
              <input ref={refPhone} placeholder="+7 (___)-___-__-__" />
            </div>
          </div>
          <div className="footer-feedback-form-btn" onClick={() => sendForm()}>
            ОТПРАВИТЬ
          </div>
        </div>
      </div>
      <div className="footer-menu">
        <img src={logo2} alt="logo2" />
        <div className="footer-menu-up" onClick={() => ScrollUp()}>
          <ArrowSvg />
        </div>
      </div>
    </div>
  )
}

export default FooterModul
