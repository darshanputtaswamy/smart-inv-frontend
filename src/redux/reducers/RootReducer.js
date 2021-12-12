import { combineReducers } from 'redux'
import Lob from './LobReducer'

const RootReducer = combineReducers({
    lob:Lob,
})

export default RootReducer
