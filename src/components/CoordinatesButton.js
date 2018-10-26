import React from 'react'

export default CoordinatesButton extends React.component{

  handleclick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  
  render() {
    return(
      
    )
  }
}