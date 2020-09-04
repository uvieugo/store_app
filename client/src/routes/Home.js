import React from 'react'
import { useHistory } from 'react-router-dom';

const Home = (props) => {
  const history = useHistory()
  return(
    <form className="" action="/store" >
      <input type="text" name="username" value={props.username} placeholder="Enter Your Name" onChange={props.setUserName} />
      <input type="text" name="username" value={props.phone} placeholder="Enter Your Phone Number" onChange={props.setPhone} />
      <button>Submit</button>
    </form>
  )
}

export default Home