import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope ,faSatellite,faGift,faZ} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
      <div>LOGO </div>
      <div>LOGO subtitle </div>
      </Link>
      <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4dde' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4d4dde' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4dde' />
        </NavLink>
        
      </nav>
      <ul>
        <li>
          <a target='_blank' href='google.com'>
            <FontAwesomeIcon icon={faSatellite} color='#4d4dde' />
          </a>
        </li>
        <li>
          <a target='_blank' href='google.com'>
            <FontAwesomeIcon icon={faGift} color='#4d4dde' />
          </a>
        </li>
        <li>
          <a target='_blank' href='google.com'>
            <FontAwesomeIcon icon={faZ} color='#4d4dde' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar