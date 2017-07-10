import React from 'react';

export default class Profile extends React.Component{
  constructor(props){
    super(props);

  }
  goBack(){
    this.props.back();
  }
  render(){
    return (
      <button onClick={this.goBack.bind(this)}>{this.props.showprofile.toString()}</button>
    );
  }
}
