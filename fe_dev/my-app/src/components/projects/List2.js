import React from 'react'
import projects from './project_data'

function List2 (props) {
  return (
    <React.Fragment>
      {projects.map((project, index) => <React.Fragment key={"prj_img"+index}>
      <tr>
        <td className="tb-img" colSpan="5">
          <img src={project.img} className="pj-img"/>
        </td>
      </tr>
        <tr>
        <td>
          {project.name}
        </td>
        <td>
          {project.description}
        </td>
        <td>
          {project.techs.map((tech, index) => 
            <p className="mp-tech-list" key={index+tech}>{tech}</p>
          )}
        </td>
        <td>
          <a className="project-url" href={project.link} target='_blank'>Source Code</a>
        </td>
      </tr>
       </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default List2;