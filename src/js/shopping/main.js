import React from 'react';
import ShoppingLayout from './ShoppingLayout';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import PageNotFound from "./NotFound";
import Nav from './components/Nav';
import Checkout from './components/Checkout';

export default class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
      <Nav></Nav>
      <Router history={hashHistory}>
         <Route path='/' component={ShoppingLayout} />
         <Route path='/address/:address' component={Checkout} />
         <Route path='/checkout' component={Checkout} />
         <Route path='*' component={PageNotFound} />
       </Router>
       </div>
    )
  }
}
