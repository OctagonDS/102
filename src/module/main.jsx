import girls from '../assets/img/girls.png'

const MainModul = (props) => {
  const { courseRef, scrollToContact, ...rest } = props

  return (
    <div className="main" ref={courseRef} {...rest}>
      <div className="main-mission">
        <div className="main-mission-block">
          <img src={girls} alt="girls" />
          <div className="main-mission-block-dialog-left">
            <div className="main-mission-block-dialog-left-title">
              <div className="main-mission-block-dialog-left-title-name">
                <span>Светлана</span>
                <span>Русских-Смолокурова</span>
              </div>
              <span className="main-mission-block-dialog-left-title-sub">
                наставник-мотиватор в профессиональной реализации
              </span>
            </div>
            <div className="main-mission-block-dialog-left-box">
              <span className="main-mission-block-dialog-left-box-help">
                Помогаю:
              </span>
              <ul>
                <li>открыть свои таланты;</li>
                <li>осознать свою уникальность и жизненные ценности;</li>
                <li>понять истинную мотивацию и повысить самооценку;</li>
                <li>реализовать себя в любимом деле;</li>
                <li>обрести внутреннюю гармонию и уверенность в себе.</li>
              </ul>
              <span>
                Использую различные методы и инструменты Арт-терапии, телесных
                практик, работаю с метафорическими ассоциативными картами.
              </span>
            </div>
          </div>
          <div className="main-mission-block-dialog-right">
            <div className="main-mission-block-dialog-right-title">
              <div className="main-mission-block-dialog-right-title-name">
                <span>Оксана Зорина</span>
              </div>
              <span className="main-mission-block-dialog-right-title-sub">
                эксперт по профессиональной самореализации
              </span>
            </div>
            <div className="main-mission-block-dialog-right-box">
              <span className="main-mission-block-dialog-right-box-help">
                Помогаю:
              </span>
              <ul>
                <li>мягко выйти из найма в свое дело;</li>
                <li>осознать свои ценности, уникальность;</li>
                <li>раскрыть призвание и монетизировать таланты;</li>
                <li>создать свой проект с учётом своих целей и ценностей;</li>
                <li>формировать вдохновляющую стратегию жизни и дела.</li>
              </ul>
              <span>
                Для этого использую лучшие инструменты и практики из психологии,
                менеджмента, аксиологии и современной профориентации.
              </span>
            </div>
          </div>
          <div className="main-mission-block-desc">
            <h3>Наша миссия</h3>
            <span>
              <p>
                Мы верим, что в каждом человеке есть потенциал и красота
                дорогого величественного бриллианта, заложенного в него Богом, и
                мы помогаем грань за гранью отшлифовать этот бриллиант.
              </p>
              <p>
                Мы помогаем каждому осознать свою уникальность, наполнить жизнь
                смыслами и реализовать себя в любимом деле.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="main-course">
        <div className="main-course-block">
          <div className="main-course-block-title">
            Курс «<span>вКЛЮЧИсь!</span>»
          </div>
          <p>
            Ты научишься добавлять смыслы в свою жизнь и обретёшь смелость и
            силу быть собой!
          </p>
          <div className="main-course-block-res">Результаты курса:</div>
          <div className="main-course-block-step">
            <div className="main-course-block-step-pos">
              <div className="main-course-block-step-pos-line" />
              <div className="main-course-block-step-pos-circle-one">1</div>
              <div className="main-course-block-step-pos-circle-two">2</div>
              <div className="main-course-block-step-pos-circle-three">3</div>
            </div>
          </div>
          <div className="main-course-block-desc">
            <div className="main-course-block-desc-flex">
              <div>
                Ты создашь образ своего уникального «Я» и, наконец, разберешься:
              </div>
              <ul>
                <li>в чем твои таланты и уникальность;</li>
                <li>какова твоя профессиональная роль;</li>
                <li>в чем твоя внутренняя опора и мотивация;</li>
                <li>что ты даешь себе и этому миру.</li>
              </ul>
            </div>
            <div className="main-course-block-desc-flex">
              <div>
                Ты создашь образ своего уникального «Я» и, наконец, разберешься:
              </div>
              <ul>
                <li>смоделируешь свое рабочее место;</li>
                <li>составишь финансовый план и план реализации проекта;</li>
                <li>
                  пропишешь задачи и действия для достижения поставленных целей;
                </li>
                <li>начнешь осуществлять первые шаги.</li>
              </ul>
            </div>
            <div className="main-course-block-desc-flex">
              <div>Ты встанешь на СВОЙ путь:</div>
              <ul>
                <li>обретешь глубинную мотивацию и внутреннюю опору;</li>
                <li>почувствуешь свою нужность и вкус к жизни;</li>
                <li>поймешь, как реализовать себя;</li>
                <li>осознаешь свои истинные желания и смыслы.</li>
              </ul>
            </div>
          </div>
          <div
            className="main-course-block-btn"
            onClick={() => scrollToContact()}
          >
            Записаться
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainModul
