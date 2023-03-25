import React from 'react'
import './Header.css'
import { AiFillInstagram } from "react-icons/ai"
import { AiFillTwitterSquare } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import { Link } from "react-router-dom"

function header() {
  return (
    <Link to={`/`}>
    <header className="navbar">
        <div className="nav__logo">
          <img src="https://www.syncmodels.com/assets/images/205/205-logo.svg" alt="" />
        </div>

        <ul className="nested-dropdowns">    
            <li>
              <div className="nested-dropdowns__item">
                  JOHANNESBURG
              </div>
                <ul>
                  <li>
                    <div className="nested-dropdowns__item">
                      MEN
                    </div>
                    <ul>
                      <li><Link to={`talents`}>MAINBOARD</Link></li>
                      <li><a href="">NEW FACES</a></li>
                      <li><a href="">COMMERCIAL</a></li>
                    </ul>
                  </li>

                  <li>
                    <div className="nested-dropdowns__item">
                      WOMAN
                    </div>
                    <ul>
                      <li><a href="">MAINBOARD</a></li>
                      <li><a href="">NEW FACES</a></li>
                      <li><a href="">COMMERCIAL</a></li>
                    </ul>
                  </li>

                  <li>
                    <div className="nested-dropdowns__item">
                      INFLUENCERS
                    </div>
                    <ul>
                      <li><a href="">MAINBOARD</a></li>
                      <li><a href="">NEW FACES</a></li>
                      <li><a href="">COMMERCIAL</a></li>
                    </ul>
                  </li>
                </ul>
            </li>

            <li>
              <div className="nested-dropdowns__item">
                  CAPE TOWN
              </div>
                <ul>
                  <li>
                    <div className="nested-dropdowns__item">
                      MEN
                    </div>
                    <ul>
                      <li><a href="">MAINBOARD</a></li>
                      <li><a href="">NEW FACES</a></li>
                      <li><a href="">COMMERCIAL</a></li>
                    </ul>
                  </li>

                  <li>
                    <div className="nested-dropdowns__item">
                      WOMAN
                    </div>
                    <ul>
                      <li><a href="">MAINBOARD</a></li>
                      <li><a href="">NEW FACES</a></li>
                      <li><a href="">COMMERCIAL</a></li>
                    </ul>
                  </li>

                  <li>
                    <div className="nested-dropdowns__item">
                      INFLUENCERS
                    </div>
                    <ul>
                      <li><a href="">MAINBOARD</a></li>
                      <li><a href="">NEW FACES</a></li>
                      <li><a href="">COMMERCIAL</a></li>
                    </ul>
                  </li>
                </ul>
            </li>

            <li className="dropdowns">SYNCED PRIME</li>

            <li>
              <div className="nested-dropdowns__item">
                  INTERNATIONAL
              </div>
                <ul>
                  <li>
                    <div className="nested-dropdowns__item">
                      MEN
                    </div>
                    <ul>
                      <li><a href="">MAINBOARD</a></li>
                      <li><a href="">NEW FACES</a></li>
                      <li><a href="">COMMERCIAL</a></li>
                    </ul>
                  </li>

                  <li>
                    <div className="nested-dropdowns__item">
                      WOMAN
                    </div>
                    <ul>
                      <li><a href="">MAINBOARD</a></li>
                      <li><a href="">NEW FACES</a></li>
                      <li><a href="">COMMERCIAL</a></li>
                    </ul>
                  </li>

                  <li>
                    <div className="nested-dropdowns__item">
                      INFLUENCERS
                    </div>
                    <ul>
                      <li><a href="">MAINBOARD</a></li>
                      <li><a href="">NEW FACES</a></li>
                      <li><a href="">COMMERCIAL</a></li>
                    </ul>
                  </li>
                </ul>
            </li>

            <li className="dropdowns">SEARCH</li>
            <li className="dropdowns">SYNCED FAVORITES</li>
            <li className="dropdowns">APPLY</li>
            <li className="dropdowns">ABOUT</li>
            <li className="dropdowns">CONTACT</li>
            <AiFillInstagram className="navbar__socials" size={35}/>
            <AiFillTwitterSquare className="navbar__socials" size={35}/>
            <AiFillFacebook className="navbar__socials" size={35}/>
        </ul>

    </header>
    </Link>
  )
}

export default header