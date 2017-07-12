import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'


import Home from './home/component/home';
import PageNotFound from "./home/component/NotFound";
import TechMap from "./home/component/TechMap";
import { Switch, Route} from 'react-router-dom'

// import Layout from "./components/Layout";
import Main from "./home/Main";

// const app = document.getElementById('app');
// ReactDOM.render(<Main/>, app);

ReactDOM.render((
  <BrowserRouter>
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/techMap" component={TechMap}/>
    </div>
  </BrowserRouter>
), document.getElementById('app'))
