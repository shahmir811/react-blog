import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'; // BrowserRouter must have single child tag

import Welcome from './components/welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SingleArticle from './components/SingleArticle';
import CreateArticle from './components/CreateArticle';

// following is an example of higher order component (HOC)
const Main = withRouter(({ location }) => {
  return (
    <div>
      {location.pathname !== '/login' && location.pathname !== '/signUp' && (
        <Navbar />
      )}

      <Route exact path='/' component={Welcome} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signUp' component={SignUp} />
      <Route exact path='/article/:slug' component={SingleArticle} />
      <Route exact path='/articles/create' component={CreateArticle} />
      {location.pathname !== '/login' && location.pathname !== '/signUp' && (
        <Footer />
      )}
    </div>
  );
});

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);
