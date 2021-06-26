// axios
// .post("https://jsonplaceholder.typicode.com/users", data)
// .then(({ data }) => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log("ERORR", err);
// });

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//3. Create a middleware
/**
 * Functions=> make an api call
 * thunk middleware
 */
export const postHome = createAsyncThunk("user/postHome", async (params) => {
  return await axios
    .post("https://jsonplaceholder.typicode.com/users", params)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(`ERROR =>`, err);
    });
});

//1) initial state must be defined
const initialState = {
  homes: [],
  pending: false,
  error: false,
};

//2. CreateSlice: will automatically create actions, reducers, middleware

export const homeSlice = createSlice({
  name: "home", //name of our reducer
  initialState,
  //custom reducers
  reducers: {},
  //automatically reducers will be created
  extraReducers: {
    [postHome.pending]: (state, action) => {
      state.pending = true;
    },
    [postHome.fulfilled]: (state, action) => {
      state.pending = false;
      state.homes = action.payload;
    },
    [postHome.rejected]: (state, action) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export const selectHome = (state) => state.home;

export default homeSlice.reducer;
