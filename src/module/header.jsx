import logo from '../assets/img/logo.png'
import topBack from '../assets/img/top-back.png'

const HeaderModul = (props) => {
  const { aboutRef, scrollToAbout, scrollToCourse, scrollToContact, ...rest } =
    props
  return (
    <div className="header" ref={aboutRef} {...rest}>
      <div className="header-top">
        <div className="header-top-logo">
          <img src={logo} alt="logo" />
          <div>
            <span>онлайн-школа</span>
            <span>самореализации</span>
          </div>
        </div>
        <div className="header-top-menu">
          <span onClick={() => scrollToAbout()}>О нас</span>
          <span onClick={() => scrollToCourse()}>Курсы</span>
          <span onClick={() => scrollToContact()}>Контакты</span>
        </div>
      </div>
      <div className="header-top-prev">
        <div className="header-top-prev-action">
          <div className="header-top-prev-action-text">
            <span>Поможем</span>
            <span>обрести силу</span>
            <span>
              <span className="header-top-prev-action-text-color">
                быть собой
              </span>
              !
            </span>
          </div>
          <div
            className="header-top-prev-action-btn"
            onClick={() => scrollToContact()}
          >
            Связаться
          </div>
        </div>
        <img src={topBack} alt="back" />
        <div className="header-top-prev-line" />
      </div>
    </div>
  )
}

export default HeaderModul
