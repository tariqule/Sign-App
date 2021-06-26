import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//3. Create a middleware
/**
 * Functions=> make an api call
 * thunk middleware
 */
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(`ERROR =>`, err);
    });
});

//1) initial state must be defined
const initialState = {
  users: [],
  pending: false,
  error: false,
  email: "",
  password: "",
};

//2. CreateSlice: will automatically create actions, reducers, middleware

export const userSlice = createSlice({
  name: "user", //name of our reducer
  initialState,
  //custom reducers
  reducers: {
    saveSeanUser(state, action) {
      state.email = action.payload;
    },
    saveSeanPassword(state, action) {
      state.password = action.payload;
    },
  },
  //automatically reducers will be created
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.pending = true;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.pending = false;
      state.users = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
