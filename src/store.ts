// Imports
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial State
const initialState = {value: {username: '', email: '', age: 0}}

// Slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

        logout: (state) => {
            state.value = initialState.value;
        }
    }
});

// Export 
export const {login, logout} = userSlice.actions

// Store Create
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
});