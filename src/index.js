import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    purple: '#554853',
    beige: '#d6d0d0',
    burgundy: '#251c1c',
    gray: '#686461',
    brown: '#e1dce0',
  },
  radii: {
    sm: '4px',
    md: '12px',
    lg: '16px',
  },
  fontSize: {
    fs12: '12px',
    fs20: '20px',
    fs24: '24px',
    fs28: '28px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
