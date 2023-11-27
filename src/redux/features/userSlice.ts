import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  name: "Gabrielo Lopes",
  gmail: "gabrielolopes@gmail.com",
  image:
    "https://firebasestorage.googleapis.com/v0/b/chainedx-3ec41.appspot.com/o/user.png?alt=media&token=06e76385-92f3-4a30-9d59-b7e1bdb73aaf&_gl=1*15rppda*_ga*NDUwNDQxNDQuMTY4NTg5MzQ0Mw..*_ga_CW55HF8NVT*MTY4NjQ2MDY4MS44LjEuMTY4NjQ2MDkyMy4wLjAuMA..",
  pixKey: "089.98.253-83",
  pass: "123123",
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.name = action.payload.name;
      state.gmail = action.payload.gmail;
      state.image = action.payload.image;
      state.pixKey = action.payload.pixKey;
      state.pass = action.payload.pass;
    },
  },
});

export const { setUser } = counterSlice.actions;

export default counterSlice.reducer;
