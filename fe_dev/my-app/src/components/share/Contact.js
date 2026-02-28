import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Contact.modules.css'

function Contact (props) {
  const {contact, setContact} = props;
  return (ReactDOM.createPortal((
  <div className="pf-ct">
    <div className="pf-contact">
      <h1>Contact Me</h1>
      <button className="pf-ct-shutdown"
      onClick={() => {
        setContact(false);
      }}
      >
        X
      </button>
    </div>
  </div>
  ), document.getElementById('portal-root')))
}

export default Contact;