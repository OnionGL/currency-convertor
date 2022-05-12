import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IObjectCurrency, MainInterface } from "../models/MainInterface";
import axios from "axios";
export const fetchConvert = createAsyncThunk(
   'main/fetchConvert',
   async function (objectCurrency:IObjectCurrency) {
      const {data} = await axios.get(`https://api.apilayer.com/fixer/convert?to=${objectCurrency.SecondSymbol}&from=${objectCurrency.FirstSymbol}&amount=${objectCurrency.amount}` , {
         headers: {
            "apikey" : "Mjb07CyO5f3k8cVeZ3uA4jVZYv4ErzUZ"
         }
      })
      return data.result;
   }
)
const initialState:MainInterface = {
   FirstSymbol: "RUB",
   SecondSymbol: "USD",
   resultConvert: 0,
   isLoading : false,
   error : '',
}


export const MainPageReducer = createSlice ({
   name : 'main',
   initialState , 
   reducers: {
      changeFirstSymbol(state, action:PayloadAction<string>){
         state.FirstSymbol = action.payload;
      },
      changeSecondSymbol(state, action:PayloadAction<string>){
         state.SecondSymbol = action.payload;
      }
   },
   extraReducers: (builder) => {
      builder.addCase(fetchConvert.pending, (state, action) => {
         state.isLoading = true;
      })
      builder.addCase(fetchConvert.fulfilled, (state, action) => {
         state.resultConvert = action.payload;
         state.isLoading = false;
      })
      builder.addCase(fetchConvert.rejected, (state, action) => {
         state.error = 'Не удалось загрузить данные';
      })
   }
})

export default MainPageReducer.reducer;

