import { 
    GET_STATEMENT_REGISTORY_RECORDS,
    CREATE_STATEMENT_REGISTORY_RECORD,
    UPDATE_STATEMENT_REGISTORY_RECORD,
    DELETE_STATEMENT_REGISTORY_RECORD,
    GET_STATEMENT,
    UPDATE_STATEMENT_RECORD
} from '../actions/StatementActions';

const initialState = { 
    registory:[],
    statement:[],
}

const StatementReducer = function (state = initialState, action) {
    switch (action.type) {  
        case GET_STATEMENT:{
            return {
                ...state,
                statement: [...action.payload],
            }
        }
        case UPDATE_STATEMENT_RECORD:{
            const index = state.statement.findIndex(item => item.id ===  action.payload.id); //finding index of the item
            const newArray = [...state.statement]; //making a new array
            newArray[index] = action.payload //changing value in the new array
            return {
                ...state,
                statement: newArray,
            }
        }
        case GET_STATEMENT_REGISTORY_RECORDS:{
            return {
                ...state,
                registory: [...action.payload],
            }
        }
 
        case DELETE_STATEMENT_REGISTORY_RECORD:{
            return {
                ...state,
                registory: state.registory.filter(item => item.sid !== action.payload.sid) ,
            }
        }
        case CREATE_STATEMENT_REGISTORY_RECORD:{
            const newRegistory = [action.payload,...state.registory]; //making a new array
            return {
                ...state,
                registory:newRegistory,
            }
        }
        case UPDATE_STATEMENT_REGISTORY_RECORD:{
            const index = state.registory.findIndex(item => item.sid ===  action.payload.sid); //finding index of the item
            const newArray = [...state.registory]; //making a new array
            newArray[index] = action.payload //changing value in the new array

            return {
                ...state,
                registory: newArray ,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}



export default StatementReducer;
