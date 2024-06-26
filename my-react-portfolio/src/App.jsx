import './App.css'
import { Introduction } from './Components/Introduction'
import { Projects } from './Components/Projects'
import { Technologies } from './Components/Technologies'
import { Skills } from './Components/Skills'
import { Contact } from './Components/Contact'
import { Ticker } from './Components/Ticker'

const App = () => {

  return (
    <>
      <section className='center-wrap'>
        <Introduction />
        <Technologies />
        <Projects />
        <Skills />
        <Contact />
        <Ticker />
      </section>
    </>
  )
}

export default App
