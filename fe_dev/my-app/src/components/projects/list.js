import React from 'react'
//import projects from './project_data'
//import styles from './mp.modules.css'
import List1 from './List1';
import List2 from './List2';

function List (props) {

  const {UIRender} = props;
  
  return (
   <React.Fragment>
    {
      UIRender
      ? <List1/>
      : <List2/>
    }
   </React.Fragment>
  )
}

export default List;