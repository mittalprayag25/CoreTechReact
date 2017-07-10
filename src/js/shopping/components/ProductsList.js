import React from 'react';
import * as axios from 'axios';

export default class  ProductsList extends React.Component{
  constructor(props){
    super(props);
    console.log('this.props.data',this.props.data);
    this.state = {starships: this.props.data, cartItems: 0, cartCost : 0};
  }

  deleteRow(i){
    this.setState({starships : this.props.data.splice(i, 1)});
    console.log(this.state.starships);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({starships : nextProps.data});
    console.log('nextProps', nextProps);
  }

  addCart(i){
    console.log(i);
    console.log(this.state.starships);
    this.setState({cartItems : this.state.cartItems + 1, cartCost : parseInt(this.state.starships[i].mass) + this.state.cartCost})
    window.sessionStorage.setItem('starships', this.state.starships);
    window.sessionStorage.setItem('cartItems', this.state.cartItems);
    window.sessionStorage.setItem('cartCost', this.state.cartCost);
  }

  render(){
    console.log("rensder");
    console.log(this.state.starships);
    var indents = [];
    for (var i = 0; i < this.props.data.length; i++) {
      indents.push(
        <tr key={this.props.data[i].name}>
          <td>{this.props.data[i].name}</td>
          <td>{this.props.data[i].mass}</td>
          <td><a>{this.props.data[i].homeworld}</a></td>
          <td><button onClick={this.deleteRow.bind(this, i)}>Delete</button></td>
          <td><a onClick = {this.addCart.bind(this, i)}>add to cart</a></td>
        </tr>);
    }

    return (
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Product Link</th>
                <th>Action</th>
              <th>Items : {this.state.cartItems} : $ {this.state.cartCost}</th>
              </tr>
            </thead>
          <tbody>
            {indents}
          </tbody>
        </table>
       </div>
    );
  }
}
