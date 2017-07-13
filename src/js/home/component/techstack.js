import React from 'react';
import * as axios from 'axios';
export default class TechStack extends React.Component{
  constructor(props){
    super(props);
    console.log("techstack");
  }

  render(){
    return (
      <div>
        <input type="text" className="input_techStack" id="tech_select" placeholder="#Angularjs, #Android, #React"/>
        <span className="learn_button" onClick={this.search.bind(this)}></span>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({technology : nextProps.techData});
  }

  search(e){
    var searchTech = document.getElementById('tech_select').value.toLowerCase();
    var index = _.findIndex(this.state.technology, function(o) { return o.tech.toLowerCase() == searchTech; });
    var selectedObject = this.state.technology[index];
    this.props.history.push({pathname : '/techMap', state : {technology : selectedObject}});
  }
}
