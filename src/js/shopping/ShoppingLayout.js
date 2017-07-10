import React from 'react';
import Header from './components/Header'
import InformativeLinks from './components/InformativeLinks'
import Search from './components/Search'
import ProductsList from './components/ProductsList'
import * as axios from 'axios';

export default class ShoppingLayout extends React.Component{
  constructor(){
    super();
    this.state = {starships : '', filteredResults: ''};
  }

  getStartShipData(){
    let self = this;
    axios.get('../../../json/starship.json')
    .then(function (response) {
      self.setState({starships : response.data.results, filteredResults : response.data.results});
    })
    .catch(function (response) {
      console.log(response);
    });
  }

  componentDidMount() {
    this.getStartShipData();
  }

  searchResults(str){
    var rows = [];
    this.state.starships.forEach((product) => {
      if(product.name.toLowerCase().indexOf(str) !== -1){
        rows.push(product);
      }
    });
    this.setState({filteredResults : rows});
  }

  render(){
    return (
      <div className="col-lg-offset-2 col-lg-8 shoppinglayout">
        <Header></Header>
        <InformativeLinks></InformativeLinks>
        <Search searchdata={this.state.starships} search={this.searchResults.bind(this)}></Search>
        <ProductsList data={this.state.filteredResults}></ProductsList>
      </div>
    )
  }
}
