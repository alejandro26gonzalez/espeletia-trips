import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    scroll-behavior:smooth;
  }

  body{
    font-family: 'Poppins', sans-serif;
    background:${({theme})=>theme.colors.background};
    color:${({theme})=>theme.colors.text};
    overflow-x:hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img{
    display:block;
    max-width:100%;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  button{
    font-family:inherit;
  }
`;

export default GlobalStyles;