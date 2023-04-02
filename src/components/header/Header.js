import React from 'react'

import './Header.css'

import { AiFillInstagram } from "react-icons/ai"
import { AiFillTwitterSquare } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"

import { Link } from "react-router-dom"


function header() {

  return (

    <header className="navbar">

        <Link to={"/"}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/D.E.M.O._Logo_2006.svg/800px-D.E.M.O._Logo_2006.svg.png?20221004001533" alt="" />
        </Link>

        <ul className="nested-dropdowns">    
            
            <li>

              <span>
                  JOHANNESBURG
              </span>

                <ul>

                  <li>
                    <span>
                      MEN
                    </span>
                    <ul>
                      <li><Link to={`talents/johannesburg/male/demo`} >DEMO</Link></li>
                      <li><Link to={`talents/johannesburg/male/commercial`} >COMMERCIAL</Link></li>
                    </ul>
                  </li>

                  <li>
                    <span>
                      WOMAN
                    </span>
                    <ul>
                      <li><Link to={`talents/johannesburg/female/demo`} >DEMO</Link></li>
                      <li><Link to={`talents/johannesburg/female/commercial`} >COMMERCIAL</Link></li>
                    </ul>
                  </li>

                </ul>

            </li>

            <li>

              <span>
                  CAPE TOWN
              </span>

                <ul>

                  <li>
                    <span>
                      MEN
                    </span>
                    <ul>
                      <li><Link to={`talents/cape-town/male/demo`} >DEMO</Link></li>
                      <li><Link to={`talents/cape-town/male/commercial`} >COMMERCIAL</Link></li>
                    </ul>
                    
                  </li>

                  <li>
                    <span>
                      WOMAN
                    </span>
                    <ul>
                      <li><Link to={`talents/cape-town/female/demo`} >DEMO</Link></li>
                      <li><Link to={`talents/cape-town/female/commercial`} >COMMERCIAL</Link></li>
                    </ul>
                  </li>

                </ul>
                
            </li>


            <li className="dropdowns"><Link to={"about"}>ABOUT</Link></li>
            <li className="dropdowns"><Link to={"contact"}>CONTACT</Link></li>

            <AiFillInstagram className="navbar__socials" size={35}/>
            <AiFillTwitterSquare className="navbar__socials" size={35}/>
            <AiFillFacebook className="navbar__socials" size={35}/>

        </ul>

    </header>
  )
}

export default header