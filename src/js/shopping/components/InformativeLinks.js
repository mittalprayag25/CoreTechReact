import React from 'react';

let count = 10;
export default class  InformativeLinks extends React.Component{
  constructor(){
    super();

  }

  render(){
    return (
      <div>
        <ul className="informative">
          <li><a>Welcome to Angular store</a></li>
          <li><a>Please select products</a></li>
          <li><a>When you are done , click the shopping cart</a></li>
        </ul>
    </div>
    )
  }
}
