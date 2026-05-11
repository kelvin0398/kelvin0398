import React from 'react'
import projects from './project_data'


function List1 (props) {
  return (
    <React.Fragment>
      {projects.map((project, index) => <tr key={"prj"+index}>
        <td className="tb-img">
          <img src={project.img} className="pj-img" alt="My Project"/>
        </td>
        <td>
          {project.name}
        </td>
        <td>
          {project.description}
        </td>
        <td>
          {project.techs.map((tech, index) => 
            <p className="mp-tech-list" key={index+tech} 
            >{tech}</p>
          )}
        </td>
        <td>
          <a className="project-url" href={project.link} target='_blank' rel="noreferrer">Source Code</a>
        </td>
      </tr>)}
    </React.Fragment>
  )
}

export default List1;