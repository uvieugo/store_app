import React from 'react'

const GetUserInfo = (props) =>{

  const handleClick = (e) => {
    e.preventDefault()
    // alert(props.username)
    if (props.username === ""){
      alert("Please enter your name")
    }else{
      props.isnameset(true)
    }
  }


  return(
    <div className="intro-form">
    <form className="">
      <input type="text" name="username" value={props.username} placeholder="Enter Your Name" onChange={props.setusername} />
      <input type="text" name="username" value={props.phone} placeholder="Enter Your Phone Number" onChange={props.setphone} />
      <button onClick={(e) => handleClick(e)}>Submit</button>
    </form>
    </div>
  )
}

export default GetUserInfo