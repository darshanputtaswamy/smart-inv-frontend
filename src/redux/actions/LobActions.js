import { ConnectingAirportsOutlined } from '@mui/icons-material'
import api from '/api.js'
/*
[2021-09-12T07:26:11.164] [INFO] app -  /api/v1.0/lob/all
[2021-09-12T07:26:11.164] [INFO] app -          - GET
[2021-09-12T07:26:11.165] [INFO] app -  /api/v1.0/lob
[2021-09-12T07:26:11.165] [INFO] app -          - GET | POST
[2021-09-12T07:26:11.165] [INFO] app -  /api/v1.0/lob/:bid
[2021-09-12T07:26:11.165] [INFO] app -          - GET | PUT | DELETE
[2021-09-12T07:26:11.166] [INFO] app -  /api/v1.0/lob/:bid/renewal
[2021-09-12T07:26:11.166] [INFO] app -          - POST
[2021-09-12T07:26:11.166] [INFO] app -  /api/v1.0/lob/:bid/payment-verify
[2021-09-12T07:26:11.166] [INFO] app -          - POST
[2021-09-12T07:26:11.167] [INFO] app -  /api/v1.0/lob/:bid/inventory
[2021-09-12T07:26:11.167] [INFO] app -          - GET | POST
[2021-09-12T07:26:11.167] [INFO] app -  /api/v1.0/lob/:bid/inventory/custom
[2021-09-12T07:26:11.167] [INFO] app -          - POST
[2021-09-12T07:26:11.168] [INFO] app -  /api/v1.0/lob/:bid/inventory/:iid
[2021-09-12T07:26:11.168] [INFO] app -          - GET | PUT | DELETE
*/
export const GET_LOB_LIST = 'GET_LOB_LIST'
export const GET_LOB_DETAILS = 'GET_LOB_DETAILS'
export const DELETE_LOB_LIST = 'DELETE_LOB_LIST'
export const GET_PLAN_LIST = 'GET_PLAN_LIST'
export const UPDATE_LOB_DETAILS = 'UPDATE_LOB_DETAILS'
export const GET_LOB_USER = 'GET_LOB_USER'
export const CREATE_LOB_USER = 'CREATE_LOB_USER'
export const UPDATE_LOB_USER = 'UPDATE_LOB_USER'
export const DELETE_LOB_USER = 'DELETE_LOB_USER'


export const getLobUserList = () => async(dispatch) => {
    return api.get('/lob/users').then((res) => {
        dispatch({
            type: GET_LOB_USER,
            payload: res.data,
        })
    })
}
export const createLobUser = (newData) => async(dispatch) => {
    return api.post('/lob/users', newData).then((res) => {
        console.log(res.dat)
        dispatch({
            type: CREATE_LOB_USER,
            payload: res.data,
        })
    })
}

export const updateLobUser = (newData, oldData) => async(dispatch) => {
    console.log(newData);
    console.log(oldData);
    return api.put(`/lob/users/${newData.id}`, {
        id:newData.id,
        bid:newData.bid,
        uid:newData.uid,
        role:newData.role
    }).then((res) => {
        console.log(res)
        dispatch({
            type: UPDATE_LOB_USER,
            payload: newData,
        })
    })
}

export const deleteLobUser = (oldData) => async(dispatch) => {
    console.log(oldData)
    return api.delete(`/lob/users/${oldData.id}`).then((res) => {
        dispatch({
            type: DELETE_LOB_USER,
            payload: res.data,
        })
    })
}



export const getLobList = () => (dispatch) => {
    api.get('/lob').then((res) => {
        dispatch({
            type: GET_LOB_LIST,
            payload: res.data,
        })
    })
}



export const getLobDetails = (bid) => (dispatch) => {
    if(bid){
        api.get('/lob/'+bid, ).then((res) => {
            dispatch({
                type: GET_LOB_DETAILS,
                payload: res.data,
            })
        })
    }else{
        dispatch({
            type: 'PENDING',
        })
    }
}


export const updateLobDetails = (bid,newData)=> (dispatch) => {
    if(bid){
        api.put('/lob/'+bid, newData ).then((res) => {
            console.log(res.data)
            dispatch({
                type: UPDATE_LOB_DETAILS,
                payload: res.data,
            })
        })
    }else{
        dispatch({
            type: 'PENDING',
        })
    }
}

export const deleteLob = (bid)=> async (dispatch) => {
    if(bid){
        await api.delete('/lob/'+bid).then((res) => {
            console.log(res);
            
            dispatch({
                type: DELETE_LOB_LIST,
                payload: res.data,
            })
        })
    }else{
        dispatch({
            type: 'PENDING',
        })
    }
}


export const getPlanList  = ()=> (dispatch) => {
    api.get('/management/plan_template' ).then((res) => {
        dispatch({
            type: GET_PLAN_LIST,
            payload: res.data,
        })
    })
}
