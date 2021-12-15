 import { 
    GET_LOB_INVENTORY,
    CREATE_LOB_ONE_INVENTORY_ITEM,
    UPDATE_LOB_ONE_INVENTORY_ITEM,
    DELETE_LOB_ONE_INVENTORY_ITEM,
    CREATE_LOB_INVENTORY_FROM_TEMPLATE
} from '../actions/InventoryActions';

const initialState = { 
    inventory:[],
}


const InventoryReducer = function (state = initialState, action) {
    switch (action.type) {  
        case GET_LOB_INVENTORY:{
            return {
                ...state,
                inventory: [...action.payload],
            }
        }

        case CREATE_LOB_INVENTORY_FROM_TEMPLATE:{
            return {
                ...state,
                inventory: [...action.payload],
            }
        }
        case DELETE_LOB_ONE_INVENTORY_ITEM:{
            return {
                ...state,
                inventory: state.inventory.filter(item => item.iid !== action.payload.iid) ,
            }
        }
        case CREATE_LOB_ONE_INVENTORY_ITEM:{
            const newInventory = [action.payload,...state.inventory]; //making a new array
            return {
                ...state,
                inventory:newInventory,
            }
        }
        case UPDATE_LOB_ONE_INVENTORY_ITEM:{
            const index = state.inventory.findIndex(item => item.iid ===  action.payload.iid); //finding index of the item
            const newArray = [...state.inventory]; //making a new array
            newArray[index] = action.payload //changing value in the new array

            return {
                ...state,
                inventory: newArray ,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}



export default InventoryReducer;
