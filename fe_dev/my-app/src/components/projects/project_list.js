import React from 'react'
import List from './list'
import MyFooter from '../share/MyFooter';

function ProjectList (props) {
  return (<div>
    
    <table className="pl-Table">
      <thead>
        <tr>
          <td>
            Project Image
          </td>
          <td>
            Project Name
          </td>
          <td>
            Project Description
          </td>
          <td>
            Applied Techs
          </td>
           <td>
            Link
          </td>
        </tr>
      </thead>
      <tbody>
          <List/>
      </tbody>
    </table>
     <div className="pg-footer">
        <MyFooter/>
      </div>
  </div>)
}

export default ProjectList;