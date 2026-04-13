import React from 'react'
import ProjectList1 from './ProjectList1';
import ProjectList2 from './ProjectList2';

let defaultWidth;
let defaultUIRender;
window.addEventListener('load', () => {
  defaultWidth = window.innerWidth;
  if (defaultWidth>1000) {
    defaultUIRender=true;
  }
})
 
function ProjectList (props) {
  
  const [currentWidth, setCurrentWidth] = React.useState(defaultWidth);
  const [UIRender, setUIRender] = React.useState(defaultUIRender);

  React.useEffect(()=>{
      window.addEventListener('resize', () => {
      setCurrentWidth(window.innerWidth);
    })
    if(currentWidth<1000)
    {
      setUIRender(false);
      document.querySelector('.pj-img').classList.add('.pg-img-show');
    } else {
      setUIRender(true);
      document.querySelector('.pj-img').classList.add('.pg-img-show');
    }
     //console.log(typeof currentWidth);
     //console.log(UIRender);
  },[currentWidth, UIRender])
  
  return (
    UIRender 
    ? <ProjectList1 UIRender={UIRender}/>
    : <ProjectList2 UIRender={UIRender}/>
  )
}

export default ProjectList;