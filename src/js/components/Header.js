import React from "react";

import Title from "./Header/Title";
import Profile from "./Profile"

export default class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      pressed: false
    };
  }
  handleChange(e){
    const title = e.target.value;
    console.log(title);
    this.props.changeTitle(title);
  }

  back=() => {
    console.log("back");
    this.changeState();
    //changeState();
  }
  changeState(){
    this.state.pressed = !this.state.pressed;
    this.setState({pressed : this.state.pressed});
  }


  render() {
    if(this.state.pressed){
      return (
        <div>
          <Profile back={this.back.bind(this)} onClick={this.changeState.bind(this)} showprofile={this.state.pressed}/>
      </div>
    );
  }
  else{
    return (
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
        <button onClick={this.changeState.bind(this)}>Press</button>
      </div>
);
}
}
}
