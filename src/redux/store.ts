import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;

const store =  configureStore({
  reducer: {},
});

export default store
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; 
