import { LanguageProvider } from './components/language-provider/LanguageProvider';
import { ThumpsProvider } from './components/thumps-provider/ThumpsProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { fallbackRender } from './common/fallbackRender';
import { ErrorBoundary } from "react-error-boundary";
import { queryClient } from './common/queryClient';
import { ThemeProvider } from '@mui/material';
import { App } from './components/app/App';
import ReactDOM from 'react-dom/client';
import { theme } from './common/theme';
import React from 'react';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={fallbackRender}>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <ThumpsProvider>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </ThumpsProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode >
);