import { combineReducers } from 'redux'
import { reducer as firebase } from 'react-redux-firebase'
import {slideReducer} from './reducers/slideReducer'
// import { reducer as firestore } from 'react-redux-firebase'

const rootReducer = combineReducers({
  firebase,
  slideReducer
  // firestore // add this for firestore
})

export default rootReducer
