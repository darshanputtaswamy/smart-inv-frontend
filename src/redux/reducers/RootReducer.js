import { combineReducers } from 'redux'
import Lob from './LobReducer'
import Inventory  from './InventoryReducer'

const RootReducer = combineReducers({
    lob:Lob,
    inventory:Inventory
})

export default RootReducer
