import React from 'react'
import myPortfolio from '../assets/self/portrait_1.png'
import './Abm.modules.css'
import TitleMenu from '../share/Mtl';
import Contact from '../share/Contact'
import MyFooter from '../share/MyFooter';
import ProgressBar from '../features/ProgressBar';
import MyWelcome from '../assets/self/welcome-msg.png'
import Arrow1 from '../assets/icons/rtarrow_1.png'

function scrollHandler () {

  //For Seperated Individual Classes
  
  const sections = [
    document.querySelector('.abm-text'),
    document.querySelector('.abm-ele'),
    document.querySelector('.bps-arrow'),
  ];

  //For Group of Classes
  
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
      } else if (entry.target.classList.contains('bps-arrow')) {
        entry.target.classList.add('bps-arrow-show');
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
          } else if (entry.target.classList.contains('bps-arrow')) {
            entry.target.classList.remove('bps-arrow-show');
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
              <p className="job-Me-1">
                Hi, My name is Khoa!
              </p>
              <p className="job-Me-2">
                People always call me Kelvin Vuong.
              </p>
            </div>
            <div className="my-Portrait">
              <img className="myP-Img" src={myPortfolio} alt="Personal Portrait"/>
            </div>
          </div>
        <div className="abm-text-001">
          <p>
            Drifting from Banking and Hospitality, I eventually found what I believe it would perfectly fit me in long term. As this career path offers an infinitive creativity
            I have to intuitively update new tech skills and knowledge with a never-top-learning mindset. 
          </p>
        </div>
      </div>
        <div className="abm-section-2">
          <div className="abm-text">
            <p>
              My interesting sectors vary from Web Application Engineering to DevOps. 
              Still, I am currently concentrating onto becoming a Middle Junior to Senior Full Stack Web Developer.
            </p>
            <p>
              My Objective never stops at just Coding and Debugging, 
              I would love to master System Design and Architecture. 
              My destination should be at Engineer Level within 5 years or so.
            </p>
        </div>
        <div className="abm-ele">
            <img src={MyWelcome} className="abm-ele-img" alt="A Quick Welcome"/>
        </div>
        </div>
        <div className="abm-section-3">
          <h1 className="abms-tl">My Technical Skills</h1>
          <div className="abms001">
            <div className="abm-skill">
              <h3>JavaScript</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.8}/>
            </div>
          </div>
          <div className="abms002">
            <div className="abm-skill">
              <h3>HTML</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.8}/>
            </div>
          </div>
          <div className="abms003">
            <div className="abm-skill">
              <h3>CSS</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.8}/>
            </div>
          </div>
          <div className="abms004">
            <div className="abm-skill">
              <h3>Python</h3>
            </div>
            <div className="abms-img">
              <ProgressBar value={0.65}/>
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
        <div className="pageSwitcher">
          <div className="btn-PageSwitcher"
          onClick = {() => {
            window.open('/projects', '_self');
          }}
          >
            My Projects
            <img src={Arrow1} className="bps-arrow" alt="SwipeIcon"></img>
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