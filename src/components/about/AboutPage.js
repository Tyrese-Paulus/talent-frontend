import React from 'react'

import './AboutPage.css'

function AboutPage() {
  return (
    <section className="about">
      <h3>ABOUT</h3>
      <div>
        <div className="about__left">
          <img src="pexels-yuliya-shabliy-388634.jpg" alt="" />
        </div>
        <div className="about__right">
          <p>
          As there was a need for this group in the creative business, Simone Louvré, the founder of DEMO Management, created it in 1999.
          <br />
          The most recent talent is available thanks to SYNC Model Management's authenticity and mission.
          <br />
          With offices in Asia, Europe, and the United States, we manage national and international models, artists, and creative professionals.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage