import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import NewsContextProvider from './Context/NewsContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <NewsContextProvider>
        <App />
      </NewsContextProvider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

