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
export const GET_PLAN_LIST = 'GET_PLAN_LIST'


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

export const getPlanList  = ()=> (dispatch) => {
    api.get('/management/plan_template' ).then((res) => {
        dispatch({
            type: GET_PLAN_LIST,
            payload: res.data,
        })
    })
}
