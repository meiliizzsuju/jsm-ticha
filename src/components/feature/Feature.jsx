import React from 'react'
import './feature.css'

const gpt3__feature = 'gpt3__features';

const Feature = ({title,text}) => {
  return (
    <div className={gpt3__feature+'-container__feature'}>
      <div className={gpt3__feature+'-container__feature-title'}>
        <h2>{title}</h2>
      </div>
      <div className={gpt3__feature+'-container__feature-text'}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature