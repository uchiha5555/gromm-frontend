import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

interface ModelType {
    fullName?: string,
    username?: string,
    avatar?: string,
    _id: string,
}

interface InitialStateType {
    isAuthenticated: boolean
    user: ModelType | null
}

const token = localStorage.getItem('token');
const initialState: InitialStateType = {
    isAuthenticated: token ? true : false,
    user: token ? jwtDecode(token) : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.isAuthenticated = true;
            state.user = jwtDecode(action.payload);
        }
    }
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;