import React from 'react'
import './ContactPage.css'

function ContactPage() {
  return (

    <div className="contact__page">

      <span className="contact__title">contact</span>

      <div className="contact__section1">
        <div className="contact__section1__left">
          Demo model management
          <br />
          110th 3rd Avenue,Randburg 
          <br />
          Johannesburg, 4212 
          <br />
          By Appointment only
        </div>
        <div className="contact__section1__right">
          Monday through Friday, 9 am to 5 pm, and on Saturday, 10 am to 3 pm.
          <br />
          For general inquiries, to book one of our models, or to join us, you can contact us by phone or email. 
          <br />
          Landline: +270 900 0000  |  Mobile and After hours: +2700 800 0000 
          <br />
          Join us as a Model or follow up on a submitted application, please email: scout@demo.com
          <br />
          To book a model please send all briefs or castings to: Info@demo.com
        </div>
      </div>

      <div className="contact__section2">

        <div className="contact__section2__left">
          DIRECTOR
          <br />
          Chris Bernard
          <br />
          Director@demo.com
          <br />
          <br />
          <br />
          For any account enquiries
          Accounts@demo.com
        </div>

        <div className="contact__section2__center">
          HEADBOOKER - Johannesburg
          <br />
          Thomas Nguanu
          <br />
          Johannesburg, 4212 
          <br />
          By Appointment only
        </div>
        <div className="contact__section2__right">
          Demo model management
          <br />
          110th 3rd Avenue,Randburg 
          <br />
          Johannesburg, 4212 
          <br />
          By Appointment only
        </div>
      </div>

    </div>
    
  )
}

export default ContactPage