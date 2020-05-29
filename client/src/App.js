import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Faq from './components/Faq';
import Survey from './components/Survey';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Profile from './components/Profile';
import Recall from './components/Recall';
import ScrollToTop from './components/ScrollToTop';
import AdminUpdate from './components/AdminUpdate';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/private-route/PrivateRoute";
import AdminRoute from "./components/private-route/AdminRoute";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./signin";
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop/>
          <div className="App">
            <div id="wholePage">
              <div id="contentWrap">
                <NavigationBar/>
                <div id="bodySect">
                  <Route render={({location}) => (
                    <TransitionGroup>
                      <CSSTransition key={location.key} timeout={500} classNames="fade">
                        <Switch location = {location}>
                          <Route exact path="/" component={Home} exact/>
                          <Route exact path="/faq" component={Faq}/>
                          <Route exact path="/recall" component={Recall}/>
                          <Route exact path="/signin" component={SignIn}/>
                          <Route exact path="/register" component={Register}/>
                          <PrivateRoute exact path="/survey" component={Survey}/>
                          <PrivateRoute exact path="/profile" component={Profile}/>
                          <AdminRoute exact path="/adminUpdate" component={AdminUpdate}/>
                          <Route component={Error}/>
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                  )} />
                </div>
              </div>
              <Footer/>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
