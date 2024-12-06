import { useRef } from 'react'
import './assets/style/App.scss'

import HeaderModul from './module/header'
import MainModul from './module/main'
import FooterModul from './module/footer'

function App() {
  const aboutRef = useRef()
  const courseRef = useRef()

  const scrollToAbout = () => {
    window.scrollTo(0, aboutRef.current.scrollHeight)
  }

  const scrollToCourse = () => {
    window.scrollTo(0, courseRef.current.scrollHeight)
  }

  const scrollToContact = () => {
    window.scrollTo(0, document.body.scrollHeight)
  }

  return (
    <div className="App">
      <HeaderModul
        aboutRef={aboutRef}
        scrollToAbout={scrollToAbout}
        scrollToCourse={scrollToCourse}
        scrollToContact={scrollToContact}
      />
      <MainModul courseRef={courseRef} scrollToContact={scrollToContact} />
      <FooterModul />
    </div>
  )
}

export default App
