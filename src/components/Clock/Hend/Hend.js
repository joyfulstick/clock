import './Hend.css'
import React from 'react'

const Hend = props => (
  <div
    style={{
      transform: `rotate(${props.deg}deg)`,
      width: `${props.width}%`,
      left: `${props.left}%`,
      background: props.color,
      transition:
        props.deg > 354 || props.deg < 6
          ? 'transform 0s'
          : 'transform 0.05s cubic-bezier(0.1, 2.4, 0.6, 1)',
    }}
    className="hend"
  />
)

export default Hend
