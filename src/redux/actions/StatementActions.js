
import api from '/api.js'
/*
[2021-12-15T08:54:15.121] [INFO] app -  /api/v1.0/lob/:bid/statement/:sid
[2021-12-15T08:54:15.121] [INFO] app -          - GET
[2021-12-15T08:54:15.121] [INFO] app -  /api/v1.0/lob/:bid/statement/:sid/:id
[2021-12-15T08:54:15.122] [INFO] app -          - GET (x) | PUT
[2021-12-15T08:54:15.122] [INFO] app -  /api/v1.0/lob/:bid/statement_registery             GET_STATEMENT_REGISTRY_RECORDS & CREATE_STATEMENT_REGISTRY_RECORD
[2021-12-15T08:54:15.122] [INFO] app -          - GET | POST
[2021-12-15T08:54:15.122] [INFO] app -  /api/v1.0/lob/:bid/statement_registery/:id         UPDATE_STATEMENT_REGISTRY_RECORD & DELETE_STATEMENT_REGISTRY_RECORD
[2021-12-15T08:54:15.123] [INFO] app -          - GET (x) | PUT | DELETE
*/

export const GET_STATEMENTS_REGISTRY_FOR_LIST_LOB  = 'GET_STATEMENTS_REGISTRY_FOR_LIST_LOB'
export const GET_STATEMENT_REGISTRY_RECORDS = 'GET_STATEMENT_REGISTRY_RECORDS'
export const GET_STATEMENT_REGISTRY_RECORD_BY_ID = 'GET_STATEMENT_REGISTRY_RECORD_BY_ID'
export const CREATE_STATEMENT_REGISTRY_RECORD = 'CREATE_STATEMENT_REGISTRY_RECORD'
export const UPDATE_STATEMENT_REGISTRY_RECORD = 'UPDATE_STATEMENT_REGISTRY_RECORD'
export const DELETE_STATEMENT_REGISTRY_RECORD = 'DELETE_STATEMENT_REGISTRY_RECORD'
export const GET_STATEMENT = 'GET_STATEMENT'
export const UPDATE_STATEMENT_RECORD = 'GET_STATEMENT_RECORD'

export const getStatementRegistryForListLobs =  (lobs,fdate,tdate) =>  (dispatch) =>{

    let result=[];    
    let promiseList=[];
    const apicaller = (val) => {
        return new Promise((resolve, reject) => {
          api.get(`/lob/${val.bid}/statement_registery`).then((res)  => {
            resolve({
                store:val,
                fdate:fdate.toString(),
                tdate:tdate.toString(),
                payload: res.data.filter((e)=>{
                    let efdate = new Date(e.fdate);
                    let etdate = new Date(e.tdate);
                    return efdate>=fdate &&  etdate <=tdate
                    
                }),
            });
        })
        })
      }
         lobs.map((val)=>{
            promiseList.push(apicaller(val))
        }); 
       
    
    
    Promise.all(promiseList).then((res)=>{
        
        dispatch({
            type: GET_STATEMENTS_REGISTRY_FOR_LIST_LOB,
            payload: res,
        })
     });
}

export const getStatementRegistry = (bid) => (dispatch) => {
    api.get(`/lob/${bid}/statement_registery`).then((res) => {
        dispatch({
            type: GET_STATEMENT_REGISTRY_RECORDS,
            payload: res.data,
        })
    })
}

export const getStatementRegistryById = (bid, sid) => (dispatch) => {
    api.get(`/lob/${bid}/statement_registery/${sid}`).then((res) => {

        dispatch({
            type: GET_STATEMENT_REGISTRY_RECORD_BY_ID,
            payload: res.data[0],
        })
    })
    
}

export const addRowInStatementRegistry = (bid, data) => async (dispatch) => {
    api.post(`/lob/${bid}/statement_registery`, data).then((res) => {
        console.log(res.data)
        dispatch({
            type: CREATE_STATEMENT_REGISTRY_RECORD,
            payload: res.data,
        })
    })
}

export const updateRowInStatementRegistry = (bid, newData, oldDate) => async (dispatch) => {
    return api.put(`/lob/${bid}/statement_registery/${newData.sid}`, newData).then((res) => {
        dispatch({
            type: UPDATE_STATEMENT_REGISTRY_RECORD,
            payload: res.data,
        })
    })
}


export const deleteRowInStatementRegistry = (bid, sid) => async (dispatch) => {
    api.delete(`/lob/${bid}/statement_registery/${sid}`).then((res) => {
        dispatch({
            type: DELETE_STATEMENT_REGISTRY_RECORD,
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
