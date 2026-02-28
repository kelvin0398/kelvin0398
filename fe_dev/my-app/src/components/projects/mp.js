import React from 'react'
import styles from './mp.modules.css'
import TitleMenu from '../share/Mtl'
import Contact from '../share/Contact'

function MP (props) {
  const [contact, setContact] = React.useState(false);
  return (
    <div>
      <TitleMenu contact={contact} setContact={setContact}/>
      {
        contact && <Contact contact={contact} setContact={setContact}/> 
      }
    </div>
  )
}

export default MP;