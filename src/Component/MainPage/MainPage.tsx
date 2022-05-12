import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../Redux/hooks/hooks'
import ConvertorInput from '../ConvertorInput/ConvertorInput'

const MainContainer = styled.div`
   display: flex;
   justify-content: center;
   align-content: center;
   height: 80vh;
`

export default function MainPage() {
   const {FirstSymbol , SecondSymbol , resultConvert} = useAppSelector(state => state.MainPageReducer)
   return (
      <MainContainer>
         <ConvertorInput 
            FirstSymbol={FirstSymbol}
            SecondSymbol={SecondSymbol}
            resultConvert={resultConvert}
         />
      </MainContainer>
   )
}
