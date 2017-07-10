import React from 'react';


export default class Nav extends React.Component{
  constructor(){
    super();

  }

  render(){
    return(
      <div>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">React Tut</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><a href="/">Home</a></li>
              <li><a href="#/address">Adress</a></li>
              <li><a href="#/address/22">Adress Parameter</a></li>
              <li><a href="#">Page 3</a></li>
            </ul>
          </div>
        </nav>
      </div>
);
}
}
