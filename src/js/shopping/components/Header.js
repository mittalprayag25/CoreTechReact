import React from 'react';

export default class  Header extends React.Component{
  constructor(){
    super();


  }

  checkout(){
    window.location.href = '#/checkout';
  }

  render(){
    return (
      <div className="header">
        <img src="../../../img/hybrid.jpg" className="header-logo"/>
        <span className="header-text">React Store</span>
      <button onClick={this.checkout.bind(this)}>Proceed</button>
      </div>
    )
  }
}
