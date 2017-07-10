import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Palindrome from "./palindrome";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      swapped: ""
    };
  }

  changeTitle(title) {

    this.setState({title : title});
  }

  swap(title){
    this.setState({swapped : title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Palindrome swap={this.state.title} />
        <Footer />
      </div>
    );
  }
}
