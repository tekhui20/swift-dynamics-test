import { configureStore } from "@reduxjs/toolkit";
import Test1 from "./Reducers/Test1Slice";
import Test2 from "./Reducers/Test2Slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    test1: Test1,
    test2: Test2,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
