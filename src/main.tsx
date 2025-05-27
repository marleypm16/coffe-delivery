import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { GlobalStyled, theme } from './styles/globalStyle.ts'
import { CartProvider } from './context/cartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyled />
      </ThemeProvider>
    </CartProvider>
  </StrictMode>
);
