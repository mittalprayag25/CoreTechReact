import React from 'react';
import Home from './component/home';
import PageNotFound from "./component/NotFound";
import TechMap from "./component/TechMap";
import { Switch, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

export default class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log('this',this);
    return(
      <BrowserRouter>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/techMap" component={TechMap}/>
        </div>
      </BrowserRouter>
    )
  }
}
