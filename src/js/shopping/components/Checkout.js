import React from 'react';
import Header from './Header'
import InformativeLinks from './InformativeLinks'
import Search from './Search'
import ProductsList from './ProductsList'
import * as axios from 'axios';

export default class Checkout extends React.Component{
  constructor(props){
    super(props);

    console.log(window.sessionStorage.getItem('cartItems'));
  }


  render(){
    //console.log(this.props.params.address);
    return (
      <div className="col-lg-offset-2 col-lg-8 shoppinglayout">
        <Header></Header>
      </div>
    )
  }
}
