import React from 'react'

export default props => (
  <button style={props.style}
    onClick={props.onClick}>
    <i className={'fa fa-' + props.icon} />
    {props.label}
  </button>
)
