import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IState {
    user:object|null,
    isAuth: boolean,
    token: string
  }
  
  const initialState: IState = {
    user: null,
    isAuth: false,
    token: ''
  }
  
  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<IState>) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuth = true;
      },
      logout: (state) => {
        state.user = null
        state.isAuth = false
        state.token = ''
      }
    },
  })
  export const { setUser,logout } = authSlice.actions
  
  export default authSlice.reducer