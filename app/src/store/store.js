import { createStore } from 'redux'
import inputReducer from '../reducers/inputReducer'

const store = createStore(inputReducer)

export default store
