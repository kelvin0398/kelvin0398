import React from 'react'
import List from './list'
import MyFooter from '../share/MyFooter';
import Arrow1 from '../assets/icons/lftarrow_1.png'

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
     <div style={{
          display : 'flex',
          flex: 1,
          marginTop : '30px',
          padding: '10px 20px',
          justifyContent: 'flex-start',
          alignItems : 'center',
          backgroundColor : 'gray',
        }}>
          <div className="mp-btn-PageSwitcher"
          onClick = {() => {
            window.open('/', '_self');
          }}
          >
            <img src={Arrow1} className="mp-bps-arrow"></img>
            About me
          </div>
        </div>
     <div className="pg-footer">
        <MyFooter/>
      </div>
  </div>)
}

export default ProjectList;