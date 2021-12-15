import { combineReducers } from 'redux'
import Lob from './LobReducer'
import Inventory  from './InventoryReducer'
import Statement  from './StatementReducer'
 
const RootReducer = combineReducers({
    lob:Lob,
    inventory:Inventory,
    store:Statement
})

export default RootReducer
