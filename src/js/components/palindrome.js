import React from "react";

class Palindrome extends React.Component{
  constructor(){
    super();

  }

  handleClick(e){
    //console.log(e);
  }
  render(){
    return (
      <span onClick={this.handleClick.bind(this)}>{this.props.swap}</span>
    )
  }
}

export default Palindrome
