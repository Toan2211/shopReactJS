import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

export const register = createAsyncThunk(
    'users/register',
    async (payload) => {
        const data  = await userApi.register(payload)
        localStorage.setItem('acess_token',data.jwt)
        localStorage.setItem('user', JSON.stringify(data.user))
        return data.user
    }
)
export const login = createAsyncThunk(
    'users/login',
    async (payload) => {
        const data  = await userApi.login(payload)
        localStorage.setItem('acess_token',data.jwt)
        localStorage.setItem('user', JSON.stringify(data.user))
        return data.user
    }
)
const userSlice = createSlice(
    {
        name: 'user',
        initialState: {
            current: JSON.parse(localStorage.getItem('user'))|| {},
            setting: {}
        },
        reducers:{
            logout(state, action){
                localStorage.removeItem('acess_token')
                localStorage.removeItem('user')
                state.current = {}
            }
        },
        extraReducers: {
            [register.fulfilled]: (state, action) => {
                state.current = action.payload
            },
            [login.fulfilled]: (state, action) => {
                console.log('login ne`',action.payload)
                state.current = action.payload
            }
         }
    }
);

const {reducer, actions} = userSlice;
export const {logout} = actions;
export default reducer;