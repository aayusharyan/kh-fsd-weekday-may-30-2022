import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value = state.value + 1;
    },
    decrement: state => {
      state.value = state.value - 1;
    }
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

export const { increment, decrement } = counterSlice.actions; //Named export
export default store; //Default Export