import { createSlice, configureStore } from '@reduxjs/toolkit';

const InputsSlice = createSlice({
  name: "InputsSlice",
  initialState: {
    theme: "light",
    input: ""
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setInput: (state, action) => {
      state.input = action.payload;
    }
  }
});

const store = configureStore({
  reducer: InputsSlice.reducer
});

export const {setTheme, setInput} = InputsSlice.actions;
export default store;