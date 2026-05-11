import React from 'react'
import List from './list'
import MyFooter from '../share/MyFooter';
import Arrow1 from '../assets/icons/lftarrow_1.png'

function ProjectList1 (props) {

  const {UIRender} = props;

  return (
  <div className="pl-Table-Container">
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
          <List UIRender={UIRender}/>
      </tbody>
    </table>
     <div className="mp-PageSwitcher">
          <div className="mp-btn-PageSwitcher"
          onClick = {() => {
            window.open('/', '_self');
          }}
          >
            <img src={Arrow1} className="mp-bps-arrow" alt="Arrow"></img>
            About me
          </div>
        </div>
     <div className="pg-footer">
        <MyFooter/>
      </div>
  </div>)
}

export default ProjectList1;