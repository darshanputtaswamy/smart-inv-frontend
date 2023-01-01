import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import RootReducer from './reducers/RootReducer'
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {}
const middleware = [thunk];
 
const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
    }
     return applyMiddleware(...middleware);
};

const makeStore = () => {
    const persistConfig = {
      key: "root",
      storage: storage,
      whitelist:[ 
        'GET_LOB_LIST',
        'GET_LOB_DETAILS',
         'GET_STATEMENTS_REGISTRY_FOR_LIST_LOB',
        'GET_PLAN_LIST',
        'GET_LOB_USER',
        'GET_LOB_INVENTORY',
        'GET_STATEMENT_REGISTRY_RECORDS',
        'GET_STATEMENT_REGISTRY_RECORD_BY_ID',
        'GET_STATEMENT',
        'GET_USER_PROFILE',
        'lob',
        'user',
        'inventory'
      ]
    };
    const persistedReducer = persistReducer(persistConfig, RootReducer);
    const store = createStore(persistedReducer,initialState, bindMiddleware(middleware));
    store.__persisitor = persistStore(store); // This creates a persistor object & push that     persisted object to .__persistor, so that we can avail the persistability feature
    return store;
};
    // export an assembled wrapper
    export const wrapper = createWrapper(makeStore);
/*
if (
    process.env.NODE_ENV !== 'production' &&
    process.browser &&
    window.__REDUX_DEVTOOLS_EXTENSION__
) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

const Store = () => createStore(
    RootReducer,
    initialState,
    compose(applyMiddleware(...middlewares), devtools)
)

export const wrapper = createWrapper(Store, {debug:true})


/*

mport "../assets/css/style.scss";
import "owl.carousel/dist/assets/owl.carousel.css";  
import "owl.carousel/dist/assets/owl.theme.default.css";
import Layout from "../component/Layout/Layout";
import { wrapper } from "../redux/store";
import { useEffect } from "react";
import { useStore } from "react-redux";
function MyApp({ Component, pageProps }) {
const store = useStore((store) => store);
useEffect(() => {
{
  typeof document !== undefined
    ? require("bootstrap/dist/js/bootstrap.bundle")
    : null;
}
}, []);
return (
<Layout>
  <Component {...pageProps} />;
</Layout>
);
}

export default wrapper.withRedux(MyApp);

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import storage from "redux-persist/lib/storage";
import rootReducer from "./index";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
const middleware = [thunk];
let initialState={}

// BINDING MIDDLEWARE
const bindMiddleware = (middleware) => {
if (process.env.NODE_ENV !== "production") {
return composeWithDevTools(applyMiddleware(...middleware));
}
 return applyMiddleware(...middleware);
};


const makeStore = ({ isServer }) => {
if (isServer) {
//If it's on server side, create a store
return createStore(rootReducer,initialState, bindMiddleware(middleware));
} else {
//If it's on client side, create a store which will persis
const persistConfig = {
  key: "root",
  storage: storage,
  whiteList: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer,initialState, bindMiddleware(middleware));
store.__persisitor = persistStore(store); // This creates a persistor object & push that 
persisted object to .__persistor, so that we can avail the persistability feature
return store;
}
};
// export an assembled wrapper
export const wrapper = createWrapper(makeStore);

*/