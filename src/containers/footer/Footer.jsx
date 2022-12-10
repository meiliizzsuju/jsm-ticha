import React from 'react'
import FooterCTA from '../../components/footerCta/FooterCTA'
import ListwithHeading from '../../components/listwithheading/ListwithHeading';
import './footer.css'

import footer_logo from '../../assets/logo.svg';

import {links1,links2,links3} from "./footerLinksDate.js"


const Footer = () => {
  return (
    <footer className='gpt3__footer'>
      <FooterCTA/>
      <div  className='gpt3__footer-container section__margin'>
        <div className='gpt3__footer--logo'>
          <img src={footer_logo} alt="Footer logo" />
          <p>Crechterwoord K12 182 DK <br/>Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer--links'>
          <ListwithHeading heading='Links' links={links1}/>
          <ListwithHeading heading='Company' links={links2}/>
          <ListwithHeading heading='Get in touch' links={links3}/>
        </div>
      </div>
      <div className='gpt3__footer-trademark'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer