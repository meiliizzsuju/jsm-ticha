import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => {
  return (
    <>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#wgpt3">What is GPT3?</a></li>
      <li><a href="#possibility">Open AI</a></li>
      <li><a href="#features">Case Studies</a></li>
      <li><a href="#blog">Library</a></li>
    </ul>
    </>
  )
}

const SignCTA = () =>{
  return (
    <>
      <p>Sign in</p>
      <button type='button'>Sign up</button>
    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <header className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>

        <nav className='gpt3__navbar-links_container'>
          <Menu />
        </nav>
      </div>
      <div className='gpt3__navbar-sign'>
        <SignCTA />
      </div>
      <div className='gpt3__navbar-menu'>
        { toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => {setToggleMenu(false)}}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => {setToggleMenu(true)}}/>
        }
        { toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <SignCTA />
              </div>
            </div>
          </div>
         )}
      </div>
    </header>
  )
}

export default Navbar