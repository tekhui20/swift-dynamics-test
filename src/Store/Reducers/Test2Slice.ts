import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from "react";

export interface Person {
  key?: React.Key;
  id?: number;
  prefix: string;
  fname: string;
  lname: string;
  dob: string;
  nationality: string;
  citizenId: string;
  gender: string;
  mobileprefix: string;
  mobile: string;
  passport?: string;
  expectedsalary: number | null;
}

interface DataState {
  data: Person[];
  edit: Boolean;
  editData: Person;
}

const initialState: DataState = {
  data: [],
  edit: false,
  editData: {
    key: 0,
    id: 0,
    prefix: "",
    fname: "",
    lname: "",
    dob: "",
    nationality: "",
    citizenId: "",
    gender: "",
    mobileprefix: "",
    mobile: "",
    passport: "",
    expectedsalary: 0,
  },
};

const SaveData = (values: {}) => {
  localStorage.setItem("data", JSON.stringify(values));
};

export const Test2Slice = createSlice({
  name: "test2",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      state.data.push(action.payload);
      SaveData(state.data);
    },
    actionDataUpdate: (state, action: PayloadAction<[]>) => {
      state.data = action.payload;
    },
    deletePerson: (state, action: PayloadAction<{ id: number }>) => {
      state.data.splice(
        state.data.findIndex((x) => x.id === action.payload.id),
        1
      );
      SaveData(state.data);
      alert("Delete Success");
    },
    actionSetEdit: (state, action: PayloadAction<Boolean>) => {
      state.edit = action.payload;
    },
    actionSetEditData: (state, action: PayloadAction<Person>) => {
      state.editData = action.payload;
    },
    EditUpdate: (state, action: PayloadAction<Person>) => {
      state.data.splice(
        state.data.findIndex((x) => x.id === action.payload.id),
        1,
        action.payload
      );
      SaveData(state.data);
      alert("Edit Success");
    },
  },
});

export default Test2Slice.reducer;
export const {
  addPerson,
  actionDataUpdate,
  deletePerson,
  actionSetEdit,
  actionSetEditData,
  EditUpdate,
} = Test2Slice.actions;
