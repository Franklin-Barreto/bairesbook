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

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    border: none;
    max-width: 100%;
    height: auto;
  }

  input, button, textarea {
    font-family: inherit;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


  input[type=number] {
    -moz-appearance: textfield;
  }
`
