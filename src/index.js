import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle';
import Theme from './styles/theme';
import UserProvider from './contexts/providers/UserProvider';
import PostProvider from './contexts/providers/PostProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PostProvider>
        <UserProvider>
          <ThemeProvider theme={Theme} >
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </UserProvider>
      </PostProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
