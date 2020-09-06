import React from 'react'
import $ from 'jquery'
import toastr from 'toastr'
import '../../../css/toastr.min.css'

const InfoMessage = (props) => {
  console.log(props.message)
  return (
    toastr.info("props.messag")
  )
}

export default InfoMessage