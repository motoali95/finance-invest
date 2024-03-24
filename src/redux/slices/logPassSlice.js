import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: JSON.parse(localStorage.getItem('user')) || '',
  balance: 0
}

export const logPassSlice = createSlice({
  name: 'logPass',
  initialState: initialState,
  reducers: {
    setUserName (state, action){
      state.username = action.payload
    },
    setBalance (state, action){
      state.balance  = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserName, setBalance } = logPassSlice.actions

export default logPassSlice.reducer