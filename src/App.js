import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'

//Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostCreatePage from './pages/PostCreatePage';
import PostDetailPage from './pages/PostDetailPage';
import PostListPage from './pages/PostListPage';

//Components
import Container from './components/Container';
import GuardedRoute from './components/GuardedRoute';
import Navbar from './components/Navbar';

//Utilities
import { UserContext } from './contexts/UserContext';
import UserKit from './data/UserKit';
import PostProvider from './contexts/providers/PostProvider';
import { PostContext } from './contexts/PostContext';

function App() {
  const { isAuth, setUser, setIsAuth } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    console.log('Auth: ', isAuth)
    if (!isAuth) {
      UserKit.me()
        .then((res) => res.json())
        .then((data) => {
          if (data.email) {
            setUser(data);
            setIsAuth(true);
            history.goBack();
          }
        });
    }
  }, [])


  return (
    <>
      <Navbar />
      <Container>

        <Switch>
          <GuardedRoute path="/posts/:id" auth={isAuth} component={PostDetailPage} />

          <GuardedRoute exact path="/posts" auth={isAuth} component={PostListPage} />

          <GuardedRoute exact path="/create-post" auth={isAuth} component={PostCreatePage} />

          <GuardedRoute exact path="/home" auth={isAuth} component={HomePage} />
        </Switch>

        <Switch>
          <Route exact path="/register">
            <RegisterPage />
          </Route>

          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
