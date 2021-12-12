import {
    GET_LOB_LIST,
    GET_LOB_DETAILS,
    GET_PLAN_LIST,
} from '../actions/LobActions';


const initialState = {
    lobList: [],
    planList:[],
    lobDetails:{},
}


const LobReducer = function (state = initialState, action) {
    switch (action.type) {
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
