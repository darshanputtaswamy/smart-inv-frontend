import { combineReducers } from 'redux'
import Lob from './LobReducer'
import Inventory  from './InventoryReducer'
import Statement  from './StatementReducer'
import UserProfile from './UserProfileReducer'


const RootReducer = combineReducers({
    lob:Lob,
    inventory:Inventory,
    store:Statement,
    user: UserProfile
})

export default RootReducer
