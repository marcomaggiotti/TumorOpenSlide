import React from 'react'
import { useSelector } from 'react-redux'
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import SlideItem from './SlideItem'

const slidesQuery =  {
  path: 'slides',
  queryParams: ['limitToLast=10']
}

function Slides() {
  // Attach todos listener
  useFirebaseConnect(() => [
    slidesQuery
  ])

  // Get todos from redux state
  const actualSlide = useSelector(state => state.slideReducer.slide[0].id)
  const slides = useSelector(state => state.firebase.ordered.slides)

  // Show a message while todos are loading
  if (!isLoaded(slides)) {
    return 'Loading'
  }

  // Show a message if there are no todos
  if (isEmpty(slides)) {
    return 'Slide list is empty'
  }

  return slides.reverse().map(({ value: slide, key }, ind) => (

    <SlideItem
      key={`${key}-${ind}`}
      id={key}
      {...slide}
    />
  ))
}

export default Slides
