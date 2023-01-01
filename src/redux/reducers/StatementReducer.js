import {
  GET_STATEMENTS_REGISTRY_FOR_LIST_LOB,
    GET_STATEMENT_REGISTRY_RECORDS,
    GET_STATEMENT_REGISTRY_RECORD_BY_ID,
    CREATE_STATEMENT_REGISTRY_RECORD,
    UPDATE_STATEMENT_REGISTRY_RECORD,
    DELETE_STATEMENT_REGISTRY_RECORD,
    GET_STATEMENT,
    UPDATE_STATEMENT_RECORD
} from '../actions/StatementActions';

const initialState = {
    registory: [],
    statement: [],
    statementActualTotal: 0,
    statementAutoTotal: 0,
    selectedStatement: {},
    statementRegistryForListLobs:[]
}

const StatementReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_STATEMENTS_REGISTRY_FOR_LIST_LOB: {
            return {
                ...state,
                statementRegistryForListLobs : action.payload,
            }
        }

        
        case GET_STATEMENT: {
          let payload = action.payload.map(function(e){
              return {...e,receivedc:getBottleToCases(e.mou,e.quantity,e.received)}
          })
          let actualtotal = payload.reduce(function (acc, obj) { return acc + parseFloat(obj.actual_total); }, 0);
          let autototal = payload.reduce(function (acc, obj) { return acc + parseFloat(obj.auto_total); }, 0);
          return {
              ...state,
              statement: [...payload],
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
            newArray[index].sales = action.payload.newData.sales
            newArray[index].actual_total = action.payload.newData.actual_total
            newArray[index].auto_total = action.payload.newData.auto_total

            return {
                ...state,
                statement: newArray,
                statementActualTotal: state.statementActualTotal + parseFloat(action.payload.newData.actual_total) - parseFloat(action.payload.oldData.actual_total),
                statementAutoTotal: state.statementAutoTotal + parseFloat(action.payload.newData.auto_total) - parseFloat(action.payload.oldData.auto_total)
            }
        }

        case GET_STATEMENT_REGISTRY_RECORD_BY_ID: {
            return {
                ...state,
                selectedStatement: action.payload,
            }
        }
        case GET_STATEMENT_REGISTRY_RECORDS: {
            return {
                ...state,
                registory: [...action.payload],
            }
        }

        case DELETE_STATEMENT_REGISTRY_RECORD: {
            return {
                ...state,
                registory: state.registory.filter(item => item.sid !== action.payload.sid),
            }
        }
        case CREATE_STATEMENT_REGISTRY_RECORD: {
            const newRegistry = [action.payload, ...state.registory]; //making a new array
            return {
                ...state,
                registory: newRegistry,
            }
        }
        case UPDATE_STATEMENT_REGISTRY_RECORD: {
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


function getCasesToBottle(mou,quantity,cases){
    if (cases ==0){
      return 0
    } else if (quantity>0 & cases >0){
        if(mou == 'ltr' ){
            if (quantity == 1){
              return parseFloat(cases*9).toFixed(2)
            }
        }
        if (mou == 'ml'){
          switch (parseInt(quantity)) {
            case 750:
              return parseFloat(cases*12).toFixed(2)
            case 375:
              return parseFloat(cases*24).toFixed(2)
            case 180:
              return parseFloat(cases*48).toFixed(2)
            case 90:
              return parseFloat(cases*96).toFixed(2)
            case 60:
              return parseFloat(cases*150).toFixed(2)
            case 650:
              return parseFloat(cases*12).toFixed(2)
            case 500:
              return parseFloat(cases*24).toFixed(2)
            case 330:
              return parseFloat(cases*24).toFixed(2)
            case 275:
              return parseFloat(cases*24).toFixed(2)
            default:
              return -1
          }
        }
    } else{
      return 0
    }
  }

function getBottleToCases(mou,quantity,bottle){
  if (bottle ==0){
    return 0
  } else if (quantity>0 & bottle >0){
      if(mou == 'ltr' ){
          if (quantity == 1){
            return parseFloat(bottle/9).toFixed(2)
          }
      }
      if (mou == 'ml'){
        console.log(quantity)
        switch (parseInt(quantity)) {
          case 750:
            return parseFloat(bottle/12).toFixed(2)
          case 375:
            return parseFloat(bottle/24).toFixed(2)
          case 180:
            return parseFloat(bottle/48).toFixed(2)
          case 90:
            return parseFloat(bottle/96).toFixed(2)
          case 60:
            return parseFloat(bottle/150).toFixed(2)
          case 650:
            return parseFloat(bottle/12).toFixed(2)
          case 500:
            return parseFloat(bottle/24).toFixed(2)
          case 330:
            return parseFloat(bottle/24).toFixed(2)
          case 275:
            return parseFloat(bottle/24).toFixed(2)
          default:
            return -1
        }
      }
  } else{
    return 0
  }
}

export default StatementReducer;
