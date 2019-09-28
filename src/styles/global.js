import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }
  body {
    padding-top:30px;
    margin: 0;
    min-height: 100vh;
    background-color: #fff;
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    background-color: #333;
  }
  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }

  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: white
  }
  button{
    text-decoration: none;
    color: white
  }
`;
