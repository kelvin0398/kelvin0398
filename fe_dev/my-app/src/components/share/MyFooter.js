import React from 'react'
import './MyFooter.modules.css'

class MyFooter extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div className="my-footer">
        <div>
          <h3>FullstackX</h3>
          <p>Personal Portfolio</p>
          <p>(c) Copyright Kelvin Vuong 2025-2026</p>
        </div>
      </div>
    )
  }
}

export default MyFooter;