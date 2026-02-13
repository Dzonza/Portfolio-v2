import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { NavLinksProvider } from './components/store/BurgerMenuNavContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavLinksProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavLinksProvider>
  </StrictMode>,
);
