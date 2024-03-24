import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  surname: '',
  username: '',
}

export const userSlice = createSlice({
  name: 'userInfo',
  initialState: initialState,
  reducers: {
    setName (state, action){
      state.name = action.payload
    },
    setSurname (state, action){
      state.surname = action.payload
    },
    setUsername (state, action){
      state.username = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setName, setSurname, setUsername } = userSlice.actions

export default userSlice.reducer