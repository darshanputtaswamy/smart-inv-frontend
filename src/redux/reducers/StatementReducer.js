import {
    GET_STATEMENT_REGISTORY_RECORDS,
    GET_STATEMENT_REGISTORY_RECORD_BY_ID,
    CREATE_STATEMENT_REGISTORY_RECORD,
    UPDATE_STATEMENT_REGISTORY_RECORD,
    DELETE_STATEMENT_REGISTORY_RECORD,
    GET_STATEMENT,
    UPDATE_STATEMENT_RECORD
} from '../actions/StatementActions';

const initialState = {
    registory: [],
    statement: [],
    statementActualTotal: 0,
    statementAutoTotal: 0,
    selectedStatement: {}
}

const StatementReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_STATEMENT: {
            console.log(action.payload)
            let actualtotal = action.payload.reduce(function (acc, obj) { return acc + parseFloat(obj.actual_total); }, 0);
            let autototal = action.payload.reduce(function (acc, obj) { return acc + parseFloat(obj.auto_total); }, 0);
            return {
                ...state,
                statement: [...action.payload],
                statementActualTotal: actualtotal,
                statementAutoTotal: autototal,
            }
        }

        case UPDATE_STATEMENT_RECORD: {
            const index = state.statement.findIndex(item => item.id === action.payload.newData.id); //finding index of the item
            const newArray = [...state.statement]; //making a new array
            console.log(state)
            console.log(action.payload)
            newArray[index].open = action.payload.newData.open //changing value in the new array
            newArray[index].received = action.payload.newData.received
            newArray[index].closed = action.payload.newData.closed
            newArray[index].actual_total = action.payload.newData.actual_total
            newArray[index].auto_total = action.payload.newData.auto_total

            return {
                ...state,
                statement: newArray,
                statementActualTotal: state.statementActualTotal + parseFloat(action.payload.newData.actual_total) - parseFloat(action.payload.oldData.actual_total),
                statementAutoTotal: state.statementAutoTotal + parseFloat(action.payload.newData.auto_total) - parseFloat(action.payload.oldData.auto_total)
            }
        }

        case GET_STATEMENT_REGISTORY_RECORD_BY_ID: {
            return {
                ...state,
                selectedStatement: state.registory.filter(item => item.sid == action.payload.sid),
            }
        }
        case GET_STATEMENT_REGISTORY_RECORDS: {
            return {
                ...state,
                registory: [...action.payload],
            }
        }

        case DELETE_STATEMENT_REGISTORY_RECORD: {
            return {
                ...state,
                registory: state.registory.filter(item => item.sid !== action.payload.sid),
            }
        }
        case CREATE_STATEMENT_REGISTORY_RECORD: {
            const newRegistory = [action.payload, ...state.registory]; //making a new array
            return {
                ...state,
                registory: newRegistory,
            }
        }
        case UPDATE_STATEMENT_REGISTORY_RECORD: {
            const index = state.registory.findIndex(item => item.sid === action.payload.sid); //finding index of the item
            const newArray = [...state.registory]; //making a new array
            newArray[index] = action.payload //changing value in the new array
            return {
                ...state,
                registory: newArray,
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
