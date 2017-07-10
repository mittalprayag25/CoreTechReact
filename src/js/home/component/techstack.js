import React from 'react';
import * as axios from 'axios';


export default class TechStack extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <input type="text" className="input_techStack" placeholder="#Angularjs, #Android, #React"/>
        <span className="learn_button" onClick={this.search.bind(this)}> </span>
      </div>
    )
  }

  search(){
    console.log("search");

  }
}
