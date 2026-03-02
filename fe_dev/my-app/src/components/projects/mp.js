import React from 'react'
import styles from './mp.modules.css'
import TitleMenu from '../share/Mtl'
import Contact from '../share/Contact'

function myViewport () {
  //For Seperated Elements
  const section = document.querySelector('.mp-bps-arrow')
  //For Group of Elements
  const elements = document.querySelectorAll('.pj-img')
  const myViewport = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting)
      {
        if(entry.target.classList.contains('pj-img')) {
          entry.target.classList.add('pj-img-show');
        } else if (entry.target.classList.contains('mp-bps-arrow')) {
          entry.target.classList.add('mp-bps-arrow-show');
        }
      } else {
        if (entry.target.classList.contains('pj-img')) {
          entry.target.classList.remove('pj-img-show');
        } else if (entry.target.classList.contains('mp-bps-arrow')) {
          entry.target.classList.remove('mp-bps-arrow-show');
        }
      }
    })
  })
  elements.forEach(element => {
    myViewport.observe(element);
  })
  myViewport.observe(section);
}

function MP (props) {
  const [contact, setContact] = React.useState(false);
  React.useEffect(() => {
    myViewport();
  }, [])
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