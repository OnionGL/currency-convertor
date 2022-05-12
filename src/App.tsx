import React from 'react';
import AppRouting from './AppRouting/AppRouting';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

function App() {
  return <>
      <GlobalStyle />
      <BrowserRouter>
       <AppRouting />
      </BrowserRouter>
     
  </>;
}

export default App;
