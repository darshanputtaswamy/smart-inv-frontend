
import api from '/api.js'
/*
[2021-12-15T08:54:15.121] [INFO] app -  /api/v1.0/lob/:bid/statement/:sid
[2021-12-15T08:54:15.121] [INFO] app -          - GET
[2021-12-15T08:54:15.121] [INFO] app -  /api/v1.0/lob/:bid/statement/:sid/:id
[2021-12-15T08:54:15.122] [INFO] app -          - GET (x) | PUT
[2021-12-15T08:54:15.122] [INFO] app -  /api/v1.0/lob/:bid/statement_registery             GET_STATEMENT_REGISTORY_RECORDS & CREATE_STATEMENT_REGISTORY_RECORD
[2021-12-15T08:54:15.122] [INFO] app -          - GET | POST
[2021-12-15T08:54:15.122] [INFO] app -  /api/v1.0/lob/:bid/statement_registery/:id         UPDATE_STATEMENT_REGISTORY_RECORD & DELETE_STATEMENT_REGISTORY_RECORD
[2021-12-15T08:54:15.123] [INFO] app -          - GET (x) | PUT | DELETE
*/


export const GET_STATEMENT_REGISTORY_RECORDS = 'GET_STATEMENT_REGISTORY_RECORDS'
export const GET_STATEMENT_REGISTORY_RECORD_BY_ID = 'GET_STATEMENT_REGISTORY_RECORD_BY_ID'
export const CREATE_STATEMENT_REGISTORY_RECORD = 'CREATE_STATEMENT_REGISTORY_RECORD'
export const UPDATE_STATEMENT_REGISTORY_RECORD = 'UPDATE_STATEMENT_REGISTORY_RECORD'
export const DELETE_STATEMENT_REGISTORY_RECORD = 'DELETE_STATEMENT_REGISTORY_RECORD'
export const GET_STATEMENT = 'GET_STATEMENT'
export const UPDATE_STATEMENT_RECORD = 'GET_STATEMENT_RECORD'

export const getStatementRegistory = (bid) => (dispatch) => {
    api.get(`/lob/${bid}/statement_registery`).then((res) => {
        console.log(res.data)
        dispatch({
            type: GET_STATEMENT_REGISTORY_RECORDS,
            payload: res.data,
        })
    })
}

export const getStatementRegistoryById = (bid, sid) => (dispatch) => {
    dispatch({
        type: GET_STATEMENT_REGISTORY_RECORD_BY_ID,
        payload: { bid, sid },
    })
}

export const addRowInStatementRegistory = (bid, data) => async (dispatch) => {
    api.post(`/lob/${bid}/statement_registery`, data).then((res) => {
        console.log(res.data)
        dispatch({
            type: CREATE_STATEMENT_REGISTORY_RECORD,
            payload: res.data,
        })
    })
}

export const updateRowInStatementRegistory = (bid, newData, oldDate) => async (dispatch) => {
    return api.put(`/lob/${bid}/statement_registery/${newData.sid}`, newData).then((res) => {
        dispatch({
            type: UPDATE_STATEMENT_REGISTORY_RECORD,
            payload: res.data,
        })
    })
}


export const deleteRowInStatementRegistory = (bid, sid) => async (dispatch) => {
    api.delete(`/lob/${bid}/statement_registery/${sid}`).then((res) => {
        dispatch({
            type: DELETE_STATEMENT_REGISTORY_RECORD,
            payload: res.data,
        })
    })
}



export const getStatement = (bid, sid) => (dispatch) => {
    api.get(`/lob/${bid}/statement/${sid}`).then((res) => {
        console.log(res.data)
        dispatch({
            type: GET_STATEMENT,
            payload: res.data,
        })
    })
}

export const updateRowInStatement = (bid, newData, oldData) => (dispatch) => {
    let payload = {
        id: newData.id,
        open: newData.open,
        received: newData.received,
        closed: newData.closed,
        actual_total: newData.actual_total
    }

    api.put(`/lob/${bid}/statement/${newData.sid}/${newData.id}`, payload).then((res) => {
        console.log(res.data)
        dispatch({
            type: UPDATE_STATEMENT_RECORD,
            payload: {
                newData: res.data,
                oldData: oldData
            }
        })
    })
}
