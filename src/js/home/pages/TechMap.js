import React from 'react';
import * as axios from 'axios';
import {Route} from 'react-router-dom';
import Home from './home';
import Ecosystem from './../component/ecosystem';
import Header from './../component/header';

export default class TechMap extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.history);
  }

  render(){
    return (
      <div>
      <Header history={this.props.history}/>
        <Route path="/techMap/" component={Ecosystem}/>
        <Route path="/techMap/advanced" component={Ecosystem}/>
        <Route path="/techMap/expert" component={Ecosystem}/>
      </div>
    )
  }

}
