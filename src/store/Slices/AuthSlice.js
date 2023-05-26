import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        value:null,
        isLogin:false
    },
    reducers:{
        signin:(state, action)=>{
            state.value=action.payload
        },
        signout:(state, action)=>{
            state.value=null
        },
        setIsLogin:(state, action)=>{
            state.isLogin=action.payload
        }
    }
})

export const {signin, signout, setIsLogin} = authSlice.actions;
export default authSlice.reducer