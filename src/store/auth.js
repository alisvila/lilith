import {createSlice} from '@reduxjs/toolkit'

const initialState = { isLoggedIn : false, role: null, token: null }

const authSlice = createSlice({
    name : 'authentication',
    initialState : initialState,
    reducers : {
        login(state , action){
            state.role = action.payload.role
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        logout(state , action){
            state.role = ''
            state.token = ''
            state.isLoggedIn = false
        }
    }
})


export const authActions = authSlice.actions;

export default authSlice.reducer;