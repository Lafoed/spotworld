import { combineReducers } from 'redux'
import request from './request'
import ui from './ui'
import view from './view'
import map from './map'

export default combineReducers({
    request, ui, view, map
})