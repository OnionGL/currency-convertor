import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Component/Header/Header'
import MainPage from '../Component/MainPage/MainPage'
import ExchangeRates from '../Component/ExchangeRates/ExchangeRates';


export default function AppRouting() {
   return <>
      <Header />
      <Routes>
         <Route path='/' element={<MainPage />}/>
         <Route path='/exchange' element={<ExchangeRates />}/>
      </Routes>
      
   </>
}
