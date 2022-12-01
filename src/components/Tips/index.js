import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import html from '../../assets/images/logo1.png'
import css from '../../assets/images/tips/css.png'
import js from '../../assets/images/tips/javascript.png'
import angular from '../../assets/images/tips/angular.png'
import rxjs from '../../assets/images/tips/rxjs.png'
import c from '../../assets/images/tips/C.jpeg'
import java from '../../assets/images/tips/java.png'
import php from '../../assets/images/tips/php.png'
import react from '../../assets/images/react-js.png'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['F', 'r', 'o', 'n', 't', 'e', 'n', 'd']}
              idx={15}
            />
            <span> &nbsp;</span>
             <AnimatedLetters
              letterClass={letterClass}
              strArray={['T', 'i', 'p', 's']}
              idx={15}
            />
          </h1>
          <p class="tips-logo-cont">
            <a rel="tips-logo" href="#"><img rel="tips-logo" class="tips-tech-logo" src={java} alt="javascript" /></a>
            <a rel="tips-logo" href="#"><img rel="tips-logo" class="tips-tech-logo" src={html} alt="typescript" /></a>
            <a rel="tips-logo" href="#"><img rel="tips-logo" class="tips-tech-logo" src={css} alt="angular" /></a>
            <a rel="tips-logo" href="#"><img rel="tips-logo" class="tips-tech-logo img-2" src={c} alt="react" /></a>
            <a rel="tips-logo" href="#"><img rel="tips-logo" class="tips-tech-logo img-3" src={php} alt="css" /></a>
            <a rel="tips-logo" href="#"><img rel="tips-logo" class="tips-tech-logo img-4" src={react} alt="css" /></a>
          </p>     
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faAngular} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
