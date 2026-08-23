import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import "./i18n";

import { theme } from "./theme/theme.js"
import GlobalStyles from "./theme/GlobalStyles.js"
import App from './App.jsx'

import "bootstrap-icons/font/bootstrap-icons.css";
import './styles.css'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
      <GlobalStyles />
      
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ThemeProvider>
)
