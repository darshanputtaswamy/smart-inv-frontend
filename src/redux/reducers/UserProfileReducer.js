import {
    GET_USER_PROFILE,
    UPDATE_USER_PROFILE,
 } from '../actions/UserProfileActions';
 

const initialState = {
    profile:{
        id:'',
        name:'',
        email:'',
        phone:'',
        role:'',
        created_at:'',
    }, 
    stores:[]
 }


const UserProfileReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_USER_PROFILE: {
            console.log(action.payload)
            let UserProfile = { id:action.payload.user.id,
                            name:action.payload.user.name, 
                            email:action.payload.user.email,
                            phone:action.payload.user.phone, 
                            role:action.payload.user.role,
                            created_at:action.payload.user.created_at
                        } 

            return {
                ...state,
                profile: {...UserProfile},
                stores:[...action.payload.user.line_of_business]
            }
        }

        case UPDATE_USER_PROFILE: {    
            let NewProfile = state.profile;
            NewProfile.name = action.payload.user.name;
            NewProfile.email = action.payload.user.email;
            return {
                ...state,
                profile: {...NewProfile},
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}



export default UserProfileReducer;
