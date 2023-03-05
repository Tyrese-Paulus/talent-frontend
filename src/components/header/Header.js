import React from 'react'
import './Header.css'

function header() {
  return (
    <header className="navbar">
      <div className="nav__logo">
        <img src="https://www.syncmodels.com/assets/images/205/205-logo.svg" alt="" />
      </div>
      <div className="navigation">
        <ul>
          <li><a href="">JOHANNESBURG</a></li>
          <li><a href="">CAPE TOWN</a></li>
          <li><a href="">SYNC PRIME</a></li>
          <li><a href="">INTERNATIONAL</a></li>
          <li><a href="">SEARCH</a></li>
          <li><a href="">SYNCED FAVORITES</a></li>
          <li><a href="">APPLY</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>
      </div>
    </header>
  )
}

export default header