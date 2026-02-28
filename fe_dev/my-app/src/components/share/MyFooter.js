import React from 'react'
import styles from './MyFooter.modules.css'

class MyFooter extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div className="my-footer">
        <div>
          <h3>ReactX</h3>
          <p>Personal Portfolio</p>
          <p>(c) Kelvin Vuong</p>
        </div>
      </div>
    )
  }
}

export default MyFooter;