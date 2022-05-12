import { MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../Redux/hooks/hooks'
import { ExchangeReducer, fetchAllExchange } from '../../Redux/Reducer/ExchangeRates-reducer'

const ExchangeContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 80vh;
`

export default function ExchangeRates() {
   const dispatch = useAppDispatch()
   const {Symbol , CurrencyList , resultConvert} = useAppSelector(state => state.ExchangeReducer)
   const {changeSymbol} = ExchangeReducer.actions;
   const Object = {
      Symbol : Symbol,
      CurrencyList : CurrencyList,
      resultConvert : resultConvert
   }
   useEffect(() => {
      dispatch(fetchAllExchange(Object))
   },[Symbol])
   const changeSymbolSelect = (e:any) => {
      dispatch(changeSymbol(e.target.value))
   }
   let array = CurrencyList.filter(item => item !== Symbol)
   return (
      <ExchangeContainer>
         <Select
               color="primary"
               value={Symbol}
               style={{
                  width: '80%',
               }}
               variant="outlined"
               onChange={(e) => changeSymbolSelect(e)}
         >
               <MenuItem value={"RUB"}>RUB</MenuItem>
               <MenuItem value={"USD"}>USD</MenuItem>
               <MenuItem value={"EUR"}>EUR</MenuItem>
               <MenuItem value={"AED"}>AED</MenuItem>
               <MenuItem value={"GBP"}>GBP</MenuItem>
        </Select>
        <Table sx={{ maxWidth: '80%' }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Currency</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        {array.map(item => (
               <TableBody>
                  <TableRow key={item}>
                     <TableCell align="left">{item === Symbol ? '' : item}</TableCell>
                     <TableCell align="right">{resultConvert[item]}</TableCell>
                  </TableRow>
               </TableBody>
        ))}
        </Table>
      </ExchangeContainer>
   )
}
