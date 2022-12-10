import React from 'react';
import { Feature } from '../../components';
import "./features.css"
const gpt3__feature = 'gpt3__feature';

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
  }
  
]

const Features = () => {
  return (
    <section className={gpt3__feature+''} id="features">
      <div className={gpt3__feature+'-container section__margin'}>
        <div className={gpt3__feature+'__title'}>
          <h2 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
          <p><a href="#">Request Early Access to Get Started</a></p>
        </div>
        <div className={gpt3__feature+'__features'}>
          {featuresData.map((item,index)=>(
            <Feature title={item.title} text={item.text} key={item+index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features