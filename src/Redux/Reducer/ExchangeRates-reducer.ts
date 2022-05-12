import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IExchange } from "../models/ExchangeInterface";
export const fetchAllExchange = createAsyncThunk(
   'exchange/fetchAllExchange',
   async function (Object:IExchange) {
      const arr = Object.CurrencyList.filter(item => item !== Object.Symbol)
      const {data} = await axios.get(`https://api.apilayer.com/fixer/latest?base=${Object.Symbol}&symbols=${arr.join(',')}` , {
         headers: {
            "apikey" : "Mjb07CyO5f3k8cVeZ3uA4jVZYv4ErzUZ"
         }
      })
      return data.rates;
   }
)
const initialState:IExchange = {
   CurrencyList: ["USD" , "EUR" , "GBP" , "RUB" , "AED"],
   Symbol: "USD",
   resultConvert: {}
}


export const ExchangeReducer = createSlice ({
   name : 'exchange',
   initialState , 
   reducers: {
      changeSymbol(state, action:PayloadAction<string>){
         state.Symbol = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchAllExchange.pending, (state, action) => {})
      builder.addCase(fetchAllExchange.fulfilled, (state, action) => {
         console.log(Array.from(action.payload));
         
         state.resultConvert = action.payload
      })
      builder.addCase(fetchAllExchange.rejected, (state, action) => {
      })
   }
})

export default ExchangeReducer.reducer;

