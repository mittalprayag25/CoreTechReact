import React from 'react';
import Home from './pages/home';
import PageNotFound from "./pages/NotFound";
import TechMap from "./pages/TechMap";
import { Switch, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

export default class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log('this',this);
    return(
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/techMap" component={TechMap}/>
        </div>
    )
  }
}
