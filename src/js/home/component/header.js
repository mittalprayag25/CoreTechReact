import React from 'react';
import * as axios from 'axios';
import TechStack from './techstack';

export default class TechMap extends React.Component{
  constructor(props){
    super(props);
    this.basic = "basic";
    this.advanced = "advanced";
    this.expert = "expert";

    this.state = {selectedBasic : "", selectedAdvanced : "", selectedExpert : ""};
    console.log(this.props);
  }

  render(){
    return (
      <div className="header_container">
        <img src="./../../../img/slack.png" className="header_container-logo"/>
        <ul className="header-container-category-list col-md-offset-3">
          <li className={this.state.selectedBasic} onClick={this.changeState.bind(this, this.basic)}>Basic</li>
          <li className={this.state.selectedAdvanced} onClick={this.changeState.bind(this, this.advanced)}>Advanced</li>
          <li className={this.state.selectedExpert} onClick={this.changeState.bind(this, this.expert)}>Expert</li>
        </ul>
      </div>
    )
  }

  changeState(category){
    console.log("change state");
    switch (category) {
      case this.basic:
        this.setState({selectedBasic : "selected", selectedAdvanced : "", selectedExpert : ""});
        this.props.history.push({pathname : '/techMap/', state : {expertise : this.basic}});
      break;
      case this.advanced:
        this.setState({selectedBasic : "", selectedAdvanced : "selected", selectedExpert : ""});
        this.props.history.push({pathname : '/techMap/advanced', state : {expertise : this.advanced}});
      break;
      case this.expert:
        this.setState({selectedBasic : "", selectedAdvanced : "", selectedExpert : "selected"});
        this.props.history.push({pathname : '/techMap/expert', state : {expertise : this.expert}});
      break;
      default:

    }
  }
}
