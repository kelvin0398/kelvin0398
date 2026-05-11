import React from 'react'
import'./ProgressBar.modules.css'

function ProgressBar (props) {
  const {value} = props;
  return (
    <div className="progress-env">
      <div className="my-skill-progress">
        <div className="progress-value" style={{
          '--my-width' : value*100+'%' //Paste in my defined width to CSS
        }}></div>
      </div>
    </div>
  )
}

export default ProgressBar;