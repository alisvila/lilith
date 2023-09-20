import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type User from "../../types/User";

export interface IssueInitialState {
  userDetail: User | {};
}
const initialState: IssueInitialState = {
  userDetail: {},
};

export const UserReducer = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    getUserDetail: (state, action: PayloadAction<string>) => {
      state.userDetail = action.payload;
    },
  },
});

export const { getUserDetail } = UserReducer.actions;
export default UserReducer.reducer;
