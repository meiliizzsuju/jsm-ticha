import React from 'react';
import possibility_img from '../../assets/possibility.png';
import './possibility.css';

const gmt3_possibility = 'gmt3_possibility';

const Possibility = () => {
  return (
    <section className={gmt3_possibility+" section__margin"} id="possibility">
      <div className={gmt3_possibility+'__content'}>
        <span>Request Early Access to Get Started</span>
        <h2 className="gradient__text">The possibilities are <br className='large'/>beyond your imagination</h2>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p><a href="#">Request Early Access to Get Started</a></p>
      </div>
      <div className={gmt3_possibility+'__image'}>
        <img src={possibility_img} alt="possibility"></img>
      </div>
    </section>
  )
}

export default Possibility