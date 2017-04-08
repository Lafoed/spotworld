import { combineReducers } from 'redux'
import request from './request'
import ui from './ui'

export default combineReducers({
    request, ui
})