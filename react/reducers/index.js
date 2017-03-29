import { combineReducers } from 'redux'
import api from './api'
import ui from './ui'
import map from './map'

export default combineReducers({
    api, ui, map
})