import React from 'react';
import * as axios from 'axios';

import TechStack from './../component/techstack';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {technology : "", filteredtechnology : ""};
  }

  render(){
    return (
      <div className="home_container">
        <img src="./../../../img/slack.png" className="logo_img align_centre_in_page"/>
        <div className="stackContainer align_centre_in_page">
          <TechStack techData={this.state.technology} history={this.props.history}></TechStack>
        </div>
        <span className="caption align_centre_in_page first">#AngularJs</span>
        <span className="caption align_centre_in_page second">#React</span>
        <span className="caption align_centre_in_page third">#Android</span>
        <span className="caption align_centre_in_page fourth">#Spring</span>
        <span className="caption align_centre_in_page fifth">#Hadoop</span>
        <span className="caption align_centre_in_page sixth">#iOS</span>
      </div>
    )
  }

  getTechData(){
    let self = this;
    axios.get('http://localhost:8000/api/stack')
    .then(function (response) {
      self.setState({technology : response.data.technology, filteredtechnology : response.data.technology});
    })
    .catch(function (response) {
      console.log(response);
    });
  }

  componentWillMount() {
   this.getTechData();
  }

}
