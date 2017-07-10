import React from 'react';

export default class  Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {searched : ''};
  }

  searchFunc(e){
    this.props.search(e.target.value);
    this.setState({searched : e.target.value});
  }
  render(){
    return (
      <div>
        <span>Search</span>
        <input type="text" onChange={this.searchFunc.bind(this)}/>
        <span>Searching {this.state.searched}</span>
      </div>
    )
  }
}
