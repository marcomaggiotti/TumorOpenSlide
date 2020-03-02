import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase'

function NewSlide() {
  const [inputVal, changeInput] = useState('')
  const firebase = useFirebase()

  function resetInput() {
    changeInput('')
  }

  function onInputChange(e) {
    return changeInput(e && e.target && e.target.value)
  }

  function addSlide() {
    return firebase.push('slides', { text: inputVal || 'sample', done: false })
  }

  return (
    <div style={{ marginBottom: '4rem' }}>
      <h4>New Slide</h4>
      <input value={inputVal} onChange={onInputChange} />
      <button onClick={addSlide}>Add</button>
      <button onClick={resetInput}>Cancel</button>
    </div>
  )
}

export default NewSlide
