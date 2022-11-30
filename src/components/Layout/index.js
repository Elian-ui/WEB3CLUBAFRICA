import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar'
import './index.scss'

const Layout = () => {
  return (
    <div className='App'>
      <SideBar />
      <div className='page'>
      <span className='tags top-tags'></span>

      <Outlet />
      <span className='tags bottom-tags'>
        bottom
        <br />
        <span className='bottom-tag-html' >bottom tag html</span>
      </span>
      </div>
    </div>
  )
}

export default Layout