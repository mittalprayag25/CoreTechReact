import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'


import Home from './home/pages/home';
import PageNotFound from "./home/pages/NotFound";
import TechMap from "./home/pages/TechMap";
import { Switch, Route} from 'react-router-dom'

// import Layout from "./components/Layout";
import Main from "./home/Main";

// const app = document.getElementById('app');
// ReactDOM.render(<Main/>, app);

ReactDOM.render((
  <BrowserRouter>
    <Main />
  </BrowserRouter>
), document.getElementById('app'))
