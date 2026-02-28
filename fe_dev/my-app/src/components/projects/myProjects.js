import React from 'react'
import MP from './mp';
import ProjectList from './project_list';

function MyProjects (props) {
  return (<div>
    <MP/>
    <h1 className="mp-Title">
      MY PROJECTS
    </h1>
    <div>
      <ProjectList/>
    </div>
  </div>)
}

export default MyProjects;