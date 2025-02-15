import { useState } from 'react';
import styles from './App.module.css';
import {Navbar} from './components/Navbar/Navbar.jsx';
import {Hero} from './components/Hero/Hero.jsx';
import { About } from './components/About/About.jsx';
import {Experience} from './components/Experience/Experience.jsx';
import {Projects} from './components/Project/Projects.jsx';
import {Contact} from './components/Contact/Contact.jsx';
                                                              
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>

      </div>





























      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
