import './index.scss'
import React from 'react'

const Animatedletters = ({letterClass,strArray,idx}) => {
  return (
    <span>
        {
            strArray.map((char,i)=>{
               return <span key={i} className={`${letterClass} _${i+idx}`}>{char}</span>
            })
        }
    </span>
  )
}

export default Animatedletters