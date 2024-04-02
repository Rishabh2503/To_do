import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { MantineProvider } from '@mantine/core';

const colorScheme = 'light'; // or 'dark' based on your preference

ReactDOM.render(
  <MantineProvider
    theme={{
      colorScheme,
      colors: {
        primary: '#6699fc',
        secondary: '#FF6F61',
        
      },
      fontFamily: '"Roboto", sans-serif',
      fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '24px',
       
      },
      fontWeights: {
        normal: 400,
        bold: 700,
      
      },
      radii: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        
      },
      shadows: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        
      },
    }}
    withGlobalStyles
    withNormalizeCSS
  >
    <App />
  </MantineProvider>,
  document.getElementById('root')
);
