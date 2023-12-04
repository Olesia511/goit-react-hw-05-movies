import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    orange: '#EC9704',
    burgundy: '#15100A',
    brown: '#e1dce0',
    white: '#C7C9C6',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
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
