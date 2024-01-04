import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    return (
      <div>
            I gonna be the {this.props.name}
      </div>
    )
  }
}
