import './Clock.css'
import React, { Component } from 'react'
import Hend from './Hend/Hend'

class Clock extends Component {
  state = {
    seconds: {
      deg: 0,
      color: 'crimson',
    },
    minutes: {
      deg: 0,
    },
    hours: {
      deg: 0,
      width: 30,
      left: 20,
    },
  }

  componentDidMount() {
    this.setTime()
    this.timerID = setInterval(this.setTime, 1000)
  }

  setTime = () => {
    const date = new Date(),
      tiemZone = date.getTimezoneOffset() / 60

    this.setState(prevState => {
      return {
        seconds: {
          ...prevState.seconds,
          deg: (((date / 1000) % 60) / 60) * 360,
        },
        minutes: {
          ...prevState.minutes,
          deg: (((date / (1000 * 60)) % 60) / 60) * 360,
        },
        hours: {
          ...prevState.hours,
          deg: ((((date / (1000 * 60 * 60)) % 12) - tiemZone) / 12) * 360,
        },
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div className="clock">
        <div className="board">
          {Object.entries(this.state).map(([k, v]) => (
            <Hend
              key={k}
              deg={v.deg}
              width={v.width || 50}
              left={v.left || 0}
              color={v.color || 'black'}
            />
          ))}
          <div className="axis" />
        </div>
      </div>
    )
  }
}
export default Clock
