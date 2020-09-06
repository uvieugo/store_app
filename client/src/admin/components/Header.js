import React from 'react'

const Header = (props) =>{

  const logOut = (e) => {
    e.preventDefault()
    props.setIsloggedIn(false)
    localStorage.removeItem('auth_token')
  }
  return(
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
      </li>
    </ul>

    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
      <button className="btn btn-secondary" onClick={logOut}>Log out</button>
      </li>
    </ul>
</nav>
  )
}

export default Header