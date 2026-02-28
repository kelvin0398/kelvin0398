import React from 'react'
import myPortfolio from '../assets/self/portrait_1.png'
import styles from './Abm.modules.css'
import TitleMenu from '../share/Mtl';
import Contact from '../share/Contact'
import MyFooter from '../share/MyFooter';
import ProgressBar from '../features/ProgressBar';

function scrollHandler () {
  //Include 2 classes
  const sections = [
    document.querySelector('.abm-text'),
    document.querySelector('.abm-ele'),
  ];
  const sk_elements = document.querySelectorAll('.abm-skill');
  const sk_imgs = document.querySelectorAll('.abms-img');
  const sk_bar = document.querySelectorAll('.progress-value');

  const scroll_ = new IntersectionObserver((entries)=>{
    entries.forEach((entry, index) => {
     if(entry.isIntersecting) {
      if(entry.target.classList.contains('abm-ele')) {
        entry.target.classList.add('abm-ele-show');
      } else if (entry.target.classList.contains('abm-text')) {
        entry.target.classList.add('abm-text-show');
      } else if (entry.target.classList.contains('abm-skill')) {
        entry.target.classList.add('abm-skill-show');
      } else if (entry.target.classList.contains('abms-img')) {
        entry.target.classList.add('abms-img-show');
      } else if (entry.target.classList.contains('progress-value')) {
        entry.target.classList.add('progress-value-show');
      }
     } else {
         if (entry.target.classList.contains('abm-text')) {
          entry.target.classList.remove('abm-text-show');
        } else if (entry.target.classList.contains('abm-ele')) {
          entry.target.classList.remove('abm-ele-show') 
        } else if (entry.target.classList.contains('abm-skill')) {
          entry.target.classList.remove('abm-skill-show') 
        } else if (entry.target.classList.contains('abms-img')) {
        entry.target.classList.remove('abms-img-show');
      } else if (entry.target.classList.contains('progress-value')) {
        entry.target.classList.remove('progress-value-show');
      }
     }
    })
  })

  sections.forEach((section, index) => {
    scroll_.observe(section);
  })
  sk_elements.forEach(element => {
    scroll_.observe(element);
  })
  sk_imgs.forEach(img => {
    scroll_.observe(img);
  })
  sk_bar.forEach(bar => {
    scroll_.observe(bar);
  })
}

function Abm (props) {
 
  React.useEffect(()=>{
    scrollHandler();
  }, [])

  const [contact, setContact] = React.useState(false);

  return(
    <div className="app-main">
      <div>
        <TitleMenu contact={contact} setContact={setContact}/>
      </div>
      {
        contact && <Contact contact={contact} setContact={setContact}/>
      }
      <div className="app-Aboutmoi">
        <div className="abm-section-1">
          <div className="abm-jt-ptr">
            <div className="my-JT">
              <p className="job-Title">
              Fullstack Developer
              </p>
              <p className="job-Me">
                Hi, My name is Khoa!
              </p>
              <p className="job-Me">
                People always call me Kelvin Vuong.
              </p>
            </div>
            <div className="my-Portrait">
              <img className="myP-Img" src={myPortfolio} />
            </div>
          </div>
        <div className="abm-text-001">
          <p>
            Drifting from Banking and Hospitality, I eventually found what I believe it would perfectly fit me. This career path offers an infinitive creativity where 
            I have to intuitively update new techs and knowledge with a never-top-learning mindset. 
          </p>
        </div>
      </div>
        <div className="abm-section-2">
          <div className="abm-text">
            <p>
              My interesting sectors vary from Web Application Engineering to DevOps. Still, there are still numerous sections need to be improved.
            </p>
            <p>
              My Objective never stops at just Coding and Debugging, I would love to master System Design and Architecture. My destination should be at Engineer Level within 5 years or so.
            </p>
        </div>
        <div className="abm-ele">
            img
        </div>
        </div>
        <div className="abm-section-3">
          <div className="abms001">
            <div className="abm-skill">
              <h3>Python</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.7}/>
            </div>
          </div>
          <div className="abms002">
            <div className="abm-skill">
              <h3>JavaScript</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.8}/>
            </div>
          </div>
          <div className="abms003">
            <div className="abm-skill">
              <h3>HTML</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.6}/>
            </div>
          </div>
          <div className="abms004">
            <div className="abm-skill">
              <h3>CSS</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.6}/>
            </div>
          </div>
          <div className="abms005">
            <div className="abm-skill">
              <h3>PostgresSQL</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.5}/>
            </div>
          </div>
          <div className="abms006">
            <div className="abm-skill">
              <h3>Docker</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.5}/>
            </div>
          </div>
          <div className="abms007">
            <div className="abm-skill">
              <h3>Java</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.45}/>
            </div>
          </div>
          <div className="abms008">
            <div className="abm-skill">
              <h3>C++</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.4}/>
            </div>
          </div>
          <div className="abms009">
            <div className="abm-skill">
              <h3>Algorithms</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.2}/>
            </div>
          </div>
          <div className="abms010">
            <div className="abm-skill">
              <h3>System Design</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.4}/>
            </div>
          </div>
          <div className="abms011">
            <div className="abm-skill">
              <h3>Problem Solving</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.55}/>
            </div>
          </div>
        </div>
        <div className="pg-footer">
          <MyFooter/>
      </div>
      </div>
    </div>
  )
}

export default Abm;