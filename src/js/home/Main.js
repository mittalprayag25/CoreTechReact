import React from 'react';
import Home from './component/home';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import PageNotFound from "./component/NotFound";

export default class Main extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <Router history={hashHistory}>
           <Route path='/' component={Home} />
         </Router>
       </div>
    )
  }
}
