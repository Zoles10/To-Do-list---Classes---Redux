import currentNotereducer from './currentNoteReducer'
import noteArrayReducer from './noteArrayReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    currentNote : currentNotereducer,
    noteArray : noteArrayReducer
})

export default rootReducer