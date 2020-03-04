import React from 'react'
import { useSelector } from 'react-redux'
import {isLoaded } from 'react-redux-firebase'
import SlideItem from './SlideItem'
import { useFirebase } from 'react-redux-firebase'
import { Button } from 'reactstrap';

function ActualSlide() {
  // Attach todos listener

  const firebase = useFirebase()
  const actualSlide = useSelector(state => state.slideReducer.slide[0].id)

  console.log("ActualSlide "+ actualSlide )
  // Show a message while todos are loading
  if (!isLoaded(actualSlide)) {
    return 'Loading'
  }

  return (

    <div>
      <h4> Actual Slide </h4>
      {actualSlide || actualSlide.name}
      <Button color="danger">Danger!</Button>

    </div>
  )
}

export default ActualSlide
