import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";

import Home from './home/pages/home';
import PageNotFound from "./home/pages/NotFound";
import TechMap from "./home/pages/TechMap";
import { Switch, Route} from 'react-router-dom'

// import Layout from "./components/Layout";
import Main from "./home/Main";

import {createStore} from 'redux';
import {Component} from 'React';
import {combineReducers} from 'Redux';
import store from "./store"


ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
), document.getElementById('app'))
