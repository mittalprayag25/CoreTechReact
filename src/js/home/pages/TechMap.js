import React from 'react';
import * as axios from 'axios';
import {Route} from 'react-router-dom';
import Home from './home';
import Ecosystem from './../component/ecosystem';
import Header from './../component/header';

export default class TechMap extends React.Component{
  constructor(props){
    super(props);
    console.log("########");
    console.log(this.props.location.state);
  }

  render(){
    return (
      <div>
        <Header history={this.props.history}/>
        <div className="techmap_body">
          <Route path="/techMap/" component={Ecosystem}/>
          <Route path="/techMap/advanced" component={Ecosystem}/>
          <Route path="/techMap/expert" component={Ecosystem}/>
        </div>
      </div>
    )
  }

}
