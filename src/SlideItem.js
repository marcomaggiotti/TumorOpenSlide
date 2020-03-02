import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import './Slide.css'

function SlideItem({ id }) {
  const slide = useSelector(state => state.firebase.data.slides[id])
  const firebase = useFirebase()

  function toggleDone() {
    firebase.update(`slides/${id}`, { done: !slide.done })
  }
  function deleteSlide() {
    return firebase.remove(`slides/${id}`)
  }

  return (
    <li className="Slide">
      <input
        className="Slide-Input"
        type="checkbox"
        checked={slide.done}
        onChange={toggleDone}
      />
      {slide.text || slide.name}
      <button className="Slide-Button" onClick={deleteSlide}>
        Delete
      </button>
    </li>
  )
}

SlideItem.propTypes = {
  id: PropTypes.string.isRequired
}

export default SlideItem
