import React, { Component } from 'react'
import Spiner from "./Spiner.gif"


export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Spiner} alt="" />
      </div>
    )
  }
}
