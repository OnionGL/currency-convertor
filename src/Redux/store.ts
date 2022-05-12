import { configureStore , combineReducers } from "@reduxjs/toolkit";
import MainPageReducer from './Reducer/MainPage-reducer';
import ExchangeReducer from './Reducer/ExchangeRates-reducer';

const rootReducer = combineReducers({
   MainPageReducer,
   ExchangeReducer
})

export const SetupStore = () => {
   return configureStore({
      reducer : rootReducer
   })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof SetupStore>
export type AppDispatch = AppStore['dispatch']