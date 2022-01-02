import api from '/api.js'

export const GET_USER_PROFILE = 'GET_USER_PROFILE'
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE'
export const DETELE_USER_PROFILE = 'DETELE_USER_PROFILE'
export const UPDATE_USER_PASSWORD = 'UPDATE_USER_PASSWORD'

export const getUserProfile = () => (dispatch) => {
    api.get('/user/details').then((res) => {
        dispatch({
            type: GET_USER_PROFILE,
            payload: res.data,
        })
    })
}

export const updateUserProfile = (data) => async(dispatch) => {
    api.put('/user/details', data).then((res) => {
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: res.data,
        })
    })
}


export const updateUserPassword = (data) => async(dispatch) =>{
    return api.put('/user/passwordreset', data).then(
    (res) => {
        dispatch({
            type: UPDATE_USER_PASSWORD,
            payload: res.data,
        })
    }).catch((e)=>{   
        console.log(e)
        return Promise.reject(e)
    })

}