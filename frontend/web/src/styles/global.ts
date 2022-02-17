import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
  }
`
