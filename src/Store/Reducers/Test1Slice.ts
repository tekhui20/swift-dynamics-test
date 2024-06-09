import { createSlice } from "@reduxjs/toolkit";

export interface Object {
  id: number;
  name: string;
}

interface ObjectListState {
  ObjectList: Object[];
}

const initialState: ObjectListState = {
  ObjectList: [
    { id: 0, name: "circle" },
    { id: 1, name: "oval" },
    { id: 2, name: "trapezoid" },
    { id: 3, name: "rectangle" },
    { id: 4, name: "parallelogram" },
    { id: 5, name: "square" },
  ],
};

export const Test1Slice = createSlice({
  name: "test2",
  initialState,
  reducers: {
    moveObjectLeft: (state) => {
      const tempEle = state.ObjectList.shift();
      state.ObjectList.push(tempEle as Object);
    },
    moveObjectRight: (state) => {
      const tempEle = state.ObjectList.pop();
      state.ObjectList.unshift(tempEle as Object);
    },
    moveRandom: (state) => {
      state.ObjectList.sort(() => Math.random() - 0.5);
    },
  },
});

export default Test1Slice.reducer;
export const { moveObjectLeft, moveObjectRight, moveRandom } =
  Test1Slice.actions;
