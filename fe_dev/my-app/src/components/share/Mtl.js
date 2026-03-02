import React from 'react'
import styles from './Mtl.modules.css'

function TitleMenu (props) {
  const {contact, setContact} = props;
  return (
  <div>
       <div className="app-Title">
        <section>
          <h1 className="my-Title">MY PORTFOLIO</h1>
        </section>
      </div>
      <div className="app-Menu">
      <div>
        <button className="app-MenuBtn"
        onClick={() => {
          window.open('/', '_self');
        }}
        >About Me</button>
      </div>
      <div>
        <button className="app-MenuBtn"
        onClick={() => {
          window.open('/projects', '_self');
        }}
        >My Projects</button>
      </div>
      <div>
        <button className="app-MenuBtn"
        onClick={() => {
          setContact(true);
        }}
        >Contact</button>
      </div>
    </div>
  </div>
  )
}

export default TitleMenu;