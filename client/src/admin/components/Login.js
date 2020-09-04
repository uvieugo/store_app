import React, {useState} from 'react'
import {createSession, handleError, setToken} from '../../data/connection'

const Login = (props) => {
  const [formData, setformData] = useState({email: "", password: ""})
  const [formError, setFormError] = useState("")
  const handleChange = (e) => {
    let { name, value} = e.target
    setformData( prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleClick = async (e) => {
    e.preventDefault()
    return createSession(formData).then(response =>{
      setToken(response.data.auth_token)
      props.setIsloggedIn(true)
    }).catch(error => setFormError(handleError(error)))
  }

  return(
    <div className="container h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-5">
        <div className="card">
          <div className="card-body">
          <div id="login" className="login p-4">
            <div style={formError === "" ? {display: "none"}: {}} class="alert alert-warning" role="alert">
              {formError} 
            </div>
            {/* <p style={formError === "" ? {display: "none"}: {}}>{formError}</p> */}
            <form>
            <div className="form-group">
              <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="Email Address"
                onChange={handleChange}
              />

            </div>
            <div className="form-group">
              <input 
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
              />

            </div>
              <button 
                type="submit" 
                className="btn btn-secondary"
                onClick={handleClick}
                >Login</button>
            </form>
          </div>
          </div>
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default Login