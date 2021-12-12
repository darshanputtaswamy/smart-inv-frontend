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
    api.get('/lob/'+bid, ).then((res) => {
        dispatch({
            type: GET_LOB_DETAILS,
            payload: res.data,
        })
    })
}

export const getPlanList  = ()=> (dispatch) => {
    api.get('/management/plan_template' ).then((res) => {
        dispatch({
            type: GET_PLAN_LIST,
            payload: res.data,
        })
    })
}


/*

export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST'
export const GET_CART_LIST = 'GET_CART_LIST'
export const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST'
export const GET_RATING_LIST = 'GET_RATING_LIST'
export const GET_BRAND_LIST = 'GET_BRAND_LIST'

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART'

export const UPDATE_CART_AMOUNT = 'UPDATE_CART_AMOUNT'

export const getProductList = () => (dispatch) => {
    axios.get('/api/ecommerce/get-product-list').then((res) => {
        dispatch({
            type: GET_PRODUCT_LIST,
            payload: res.data,
        })
    })
}

export const getCategoryList = () => (dispatch) => {
    axios.get('/api/ecommerce/get-category-list').then((res) => {
        dispatch({
            type: GET_CATEGORY_LIST,
            payload: res.data,
        })
    })
}

export const getRatingList = () => (dispatch) => {
    axios.get('/api/ecommerce/get-rating-list').then((res) => {
        dispatch({
            type: GET_RATING_LIST,
            payload: res.data,
        })
    })
}

export const getBrandList = () => (dispatch) => {
    axios.get('/api/ecommerce/get-brand-list').then((res) => {
        dispatch({
            type: GET_BRAND_LIST,
            payload: res.data,
        })
    })
}

export const getCartList = (uid) => (dispatch) => {
    axios.get('/api/ecommerce/get-cart-list', { data: uid }).then((res) => {
        dispatch({
            type: GET_CART_LIST,
            payload: res.data,
        })
    })
}

export const addProductToCart = (uid, productId) => (dispatch) => {
    axios.post('/api/ecommerce/add-to-cart', { uid, productId }).then((res) => {
        console.log(res.data)
        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: res.data,
        })
    })
}

export const deleteProductFromCart = (uid, productId) => (dispatch) => {
    axios
        .post('/api/ecommerce/delete-from-cart', { uid, productId })
        .then((res) => {
            dispatch({
                type: DELETE_PRODUCT_FROM_CART,
                payload: res.data,
            })
        })
}

export const updateCartAmount = (uid, productId, amount) => (dispatch) => {
    console.log(uid, productId, amount)
    axios
        .post('/api/ecommerce/update-cart-amount', { uid, productId, amount })
        .then((res) => {
            dispatch({
                type: UPDATE_CART_AMOUNT,
                payload: res.data,
            })
        })
}
*/