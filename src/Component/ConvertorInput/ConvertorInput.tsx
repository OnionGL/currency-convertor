import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import styled from 'styled-components'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {fetchConvert, MainPageReducer} from '../../Redux/Reducer/MainPage-reducer'
import { useAppDispatch } from '../../Redux/hooks/hooks';
import { IObjectCurrency } from '../../Redux/models/MainInterface';

const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`
const InputStyle = styled.div`
   display: flex;
   margin-bottom: 50px;
   justify-content: center;
`
interface IMainPageProps {
   FirstSymbol: string,
   SecondSymbol: string,
   resultConvert: number
}
export default function ConvertorInput({FirstSymbol , SecondSymbol , resultConvert}:IMainPageProps) {
   const [amount , setAmount] = useState<string>('')
   const {changeFirstSymbol , changeSecondSymbol} = MainPageReducer.actions;
   const objectCurrency:IObjectCurrency = {
      FirstSymbol: FirstSymbol,
      SecondSymbol: SecondSymbol,
      amount: +amount
   }
   const dispatch = useAppDispatch()
   const setFirstSymbol = (e:string) => {
      dispatch(changeFirstSymbol(e))
   }
   const setSecondSymbol = (e:string) => {
      dispatch(changeSecondSymbol(e))
   }
   useEffect(() => {
      dispatch(fetchConvert(objectCurrency))
   }, [amount,SecondSymbol,FirstSymbol])
   return <>
   <InputContainer>
      <InputStyle>
         <TextField
               label="From"
               type="number"
               value={amount}
               onChange={(e) => setAmount(e.target.value)}
         />
         <Select
               color="primary"
               value={FirstSymbol}
               style={{
                  width: 100,
               }}
               variant="outlined"
               onChange={(e) => setFirstSymbol(e.target.value)}
         >
               <MenuItem value={"RUB"}>RUB</MenuItem>
               <MenuItem value={"USD"}>USD</MenuItem>
               <MenuItem value={"EUR"}>EUR</MenuItem>
               <MenuItem value={"AED"}>AED</MenuItem>
               <MenuItem value={"GBP"}>GBP</MenuItem>
        </Select>
      </InputStyle>
      <InputStyle>
         <TextField
               disabled
               label="To"
               value={amount ? resultConvert : ''}
         />
         <Select
               color="primary"
               value={SecondSymbol}
               style={{
                  width: 100,
               }}
               variant="outlined"
               onChange={(e) => setSecondSymbol(e.target.value)}
         >
               <MenuItem value={"RUB"}>RUB</MenuItem>
               <MenuItem value={"USD"}>USD</MenuItem>
               <MenuItem value={"EUR"}>EUR</MenuItem>
               <MenuItem value={"AED"}>AED</MenuItem>
               <MenuItem value={"GBP"}>GBP</MenuItem>
        </Select>
      </InputStyle>   
   </InputContainer>
   </>
}
