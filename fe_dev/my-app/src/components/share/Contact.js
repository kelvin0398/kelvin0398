import React from 'react'
import ReactDOM from 'react-dom'
import './Contact.modules.css'
import myGit from '../assets/icons/git.png'
import myEmail from '../assets/icons/email.png'
import myPhone from '../assets/icons/phone.png'

function Contact (props) {
  const {setContact} = props;
  return (ReactDOM.createPortal((
  <div className="pf-ct">
    <div className="pf-contact">
      <h1>Contact For Work</h1>
      <button className="pf-ct-shutdown"
      onClick={() => {
        setContact(false);
      }}
      >
        X
      </button>
      <div className="contact-info">
        
          <div className="info001e" >
            <div id="info001e001">
              <img className="info-ico-email" src={myEmail} alt="Candidate's Email"/>
            </div>
            <div id="info001e002">
              <a className="info-text" href="https://mail.google.com/" target="_blank" rel="noreferrer">kelvinvuongsgu@gmail.com</a>
            </div>
          </div>
        
        <div className="info001">
          <div id="info001x001">
            <img className="info-ico" src={myPhone} alt="Candidate's Phone Number"/>
          </div>
          <div id="info001e002">
            <a className="info-text" href="https://zalo.me/vi/" target="_blank" rel="noreferrer">+84 0899 466 398</a>
          </div>
        </div>
        <div className="info001">
          <div id="info001x001">
            <img className="info-ico" src={myGit} alt="Candidate's Github"/>
          </div>
          <div id="info001x002">
            <a className="info-text" href="https://github.com/kelvin0398" target="_blank" rel="noreferrer">Github Profile</a>
        </div>
          </div>
          <div className="info002">
            <div id="info002x001">
              <button className="btn-CanvasView" onClick={() => {
                window.open('https://kvpersonalprojects.my.canva.site/portfolio-web', '_blank');
              }}>My Canvas</button>
            </div>
        </div>
      </div>
    </div>
  </div>
  ), document.getElementById('portal-root')))
}

export default Contact;