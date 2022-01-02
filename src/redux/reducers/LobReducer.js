import {
    GET_LOB_LIST,
    GET_LOB_DETAILS,
    GET_PLAN_LIST,
    UPDATE_LOB_DETAILS,
    GET_LOB_USER,
    CREATE_LOB_USER,
    UPDATE_LOB_USER,
    DELETE_LOB_USER
 } from '../actions/LobActions';
 
const initialState = {
    lobList: [],
    planList:[],
    lobDetails:{},
    lobUserList:[]
 }


const LobReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_LOB_USER: {
            return {
                ...state,
                lobUserList: [...action.payload],
            }
        }
        case CREATE_LOB_USER: {
            const newUserList= [action.payload, ...state.lobUserList]; //making a new array
            return {
                ...state,
                lobUserList: newUserList,
            } 
        }
        case DELETE_LOB_USER: {
            return {
                ...state,
                lobUserList: state.lobUserList.filter(item => item.id !== action.payload.id),
            }
        }
        case UPDATE_LOB_USER: {
            const index = state.lobUserList.findIndex(item => item.id === action.payload.id); //finding index of the item
            const newArray = [...state.lobUserList]; //making a new array
            newArray[index] = action.payload //changing value in the new array

            return {
                ...state,
                lobUserList: newArray,
            }
        }

        case GET_LOB_LIST: {
            return {
                ...state,
                lobList: [...action.payload],
            }
        }
        case GET_LOB_DETAILS: {
            return {
                ...state,
                lobDetails: {...action.payload},
            }
        }
        case UPDATE_LOB_DETAILS:{
            return {
                ...state,
                lobDetails: {...action.payload},
            }
        }
        case GET_PLAN_LIST: {
            return {
                ...state,
                planList: [...action.payload],
            }
        }

     
       
        default: {
            return {
                ...state,
            }
        }
    }
}



export default LobReducer;
