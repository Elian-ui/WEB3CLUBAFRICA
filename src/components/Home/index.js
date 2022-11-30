import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Animatedletters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
    const [letterClass, setletterClass] = useState('text-animate')
    const nameArray =['l','i','a','n']
    const jobArray =['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
     setTimeout(()=>{
        setletterClass('text-animate-hover')
     },4000)
    
      
    }, [])
    

  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi,<br /> Am <span className='letter-e'>E</span>
            <Animatedletters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <Animatedletters letterClass={letterClass} strArray={jobArray} idx={32} />
            </h1>
            <h2>FrontEnd Developer/Javasript Expert/ Trader</h2>
            <Link to='contact' className='flat-button'>Contact me</Link>
        </div>
    </div>
  )
}

export default Home