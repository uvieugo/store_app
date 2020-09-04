import React from 'react'

const Header = (props) => {
  return(
    <div id="header" className="header">
        <h1>{props.text}</h1>
    </div>
  )
}

export default Header