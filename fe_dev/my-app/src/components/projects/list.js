import React from 'react'
import projects from './project_data'
import styles from './mp.modules.css'

function List (props) {
  return (
    <React.Fragment>
      {projects.map((project, index) => <tr key={"prj"+index}>
        <td className="tb-img">
          <img src={project.img} className="pj-img"/>
        </td>
        <td>
          {project.name}
        </td>
        <td>
          {project.description}
        </td>
        <td>
          {project.techs.map((tech, index) => 
            <p key={index+tech}style={{
              fontSize : '22px',
              color : 'white'
            }}
            >{tech}</p>
          )}
        </td>
        <td>
          <a className="project-url" href={project.link} target='_blank'>Source Code</a>
        </td>
      </tr>)}
    </React.Fragment>
  )
}

export default List;