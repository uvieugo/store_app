import React from 'react'

const Shop = (props) => {
  console.log(props.username)
  return(
    <h1>Hello {props.username}</h1>
  )
}

export default Shop