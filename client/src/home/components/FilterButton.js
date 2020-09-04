import React from 'react'

function FilterButton(props) {
  return (
    <button
    type="button"
    className="btn btn-outline-secondary btn-sm m-1"
    aria-pressed={props.isPressed}
    onClick={() => props.setFilter(props.name)}
  >
    {/* <span className="visually-hidden">Show </span> */}
    <span>{props.name}</span>
    {/* <span className="visually-hidden"> tasks</span> */}
  </button>
  )
}

export default FilterButton