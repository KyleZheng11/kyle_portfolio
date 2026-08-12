// import LogoTitle from '../../assets/images/logo-s.png'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'K', 'y', 'l', 'e', ',']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              inx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              inx={22}
            />
          </h1>
          <h2>Full Stack / TypeScript / Java / Python</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
