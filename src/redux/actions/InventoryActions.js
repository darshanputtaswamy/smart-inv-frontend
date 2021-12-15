
import api from '/api.js'

export const GET_LOB_INVENTORY = 'GET_LOB_INVENTORY'
export const CREATE_LOB_ONE_INVENTORY_ITEM = 'CREATE_LOB_ONE_INVENTORY_ITEM'
export const UPDATE_LOB_ONE_INVENTORY_ITEM = 'UPDATE_LOB_ONE_INVENTORY_ITEM'
export const DELETE_LOB_ONE_INVENTORY_ITEM = 'DELETE_LOB_ONE_INVENTORY_ITEM'
export const CREATE_LOB_INVENTORY_FROM_TEMPLATE = 'CREATE_LOB_INVENTORY_FROM_TEMPLATE'


export const getInventoryList  = (bid)=> (dispatch) => {
    api.get(`/lob/${bid}/inventory`).then((res) => {
        console.log(res.data)
        dispatch({
            type: GET_LOB_INVENTORY,
            payload: res.data,
        })
    })
}

export const addRowInInventory  = (bid,data)=> (dispatch) => {
    api.post(`/lob/${bid}/inventory`, data).then((res) => {
        console.log(res.data)

        dispatch({
            type: CREATE_LOB_ONE_INVENTORY_ITEM,
            payload: res.data,
        })
    })
}

export const updateRowInInventory  = (bid,newData,oldDate)=> (dispatch) => {
    api.put(`/lob/${bid}/inventory/${newData.iid}`, newData).then((res) => {
        console.log(res.data)
        dispatch({
            type: UPDATE_LOB_ONE_INVENTORY_ITEM,
            payload: res.data,
        })
    })
}


export const deleteRowInInventory  = (bid,oldDate)=> (dispatch) => {
    api.delete(`/lob/${bid}/inventory/${oldDate.iid}`).then((res) => {
        dispatch({
            type: DELETE_LOB_ONE_INVENTORY_ITEM,
            payload: res.data,
        })
    })
}

export const createInventoryFromTemplate  = (bid,data)=> (dispatch) => {
    api.post(`/lob/${bid}/inventory/custom`,data).then((res) => {
        dispatch({
            type: CREATE_LOB_INVENTORY_FROM_TEMPLATE,
            payload: res.data,
        })
    })
}
