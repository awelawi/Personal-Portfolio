import {BrowserRouter} from 'react-router-dom'
import {About, Contact, Experience, Feedbacks,
      Hero, Navbar, Tech, Works, StarsCanvas} from './components/'
/**
 * TODO: Include documentation for what this file does
 * What is BorwserRouteer
 */
const App =() => {

  return (
    // Encapsulating all components within the BrowserRouter parent
    <BrowserRouter>
      <div className = "relative z-0 bg-primary">
        <div className = "bg-hero-pattern bg-cover">
          <Navbar/>
          <Hero />
        </div>
        <div className = "relative z-10">
          {/* REFERENCING EACH OF THE COMPONENT SECTIONS */}
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />

          {/* Will be utilized for displaying 3d objects */}
          <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
