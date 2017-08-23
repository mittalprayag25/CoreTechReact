import React from 'react';

import { fetchUser, setUserName } from "./../../actions/userActions";
import { fetchTweets, addTweet ,updateTweet, deleteTweet} from "./../../actions/tweetsActions";
import { searchTech, getTechData } from "./../../actions/technologyActions";
import { connect } from "react-redux";




@connect((store) => {
  console.log("ecoconnect");
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
    technology: store.technology.technology,
    relatedTech : store.technology.relatedTech
  };
})

export default class Ecosystem extends React.Component{
  constructor(props){
    super(props);
    this.fontSize = 16;
    this.state = {technology : undefined};
    console.log("eco cons");

  }

  render(){
    console.log(this.props);
    if(this.props.relatedTech != undefined){
      var indents = [];
          for (var i = 0; i < this.props.relatedTech.associatedTech.length; i++) {
            indents.push(
              <span key={this.props.relatedTech.associatedTech[i].tech} className="random"
              onClick={this.selectTech.bind(this, this.props.relatedTech.associatedTech[i].tech)}>
              {this.props.relatedTech.associatedTech[i].tech}
              </span>
            );
          }
        }

    return (
      <div>
      {indents}
      </div>
    );

  }

  selectTech(tech){
    console.log(tech);
    alert(tech);
  }

  getTechData(technologyId){
    console.log("gettechdata");
    this.props.dispatch(getTechData(technologyId));
  }

  componentWillMount() {
    const {technology} = this.props.technology;
    console.log("Ecosystem");
    console.log(this.props.technology.id);
    this.getTechData(this.props.technology.id);
  }
  componentDidUpdate(){
    this.init();
  }

  init(){
    var w=document.body.offsetWidth;
    var h=document.body.offsetHeight;
    var rd=document.getElementsByClassName("random");


    for(var c=0;c<rd.length;c++) {
      if(rd[c].className=='random') {
        this.updateCoordinates(w,h, rd[c]);
      }
    }
  }

  updateCoordinates(w, h, element){
    var xCoord;
    var yCoord;

    var xMinRange = 100;
    var xMaxRange = 200;
    var yMinRange = 200;
    var yMaxRange = 600;

    xCoord=Math.floor(Math.random()*w);
    yCoord=Math.floor(Math.random()*h);
    if(xCoord > xMinRange && xCoord < xMaxRange ){
      if(yCoord > yMinRange && yCoord < yMaxRange ){
        this.updateStyling(element, xCoord, yCoord);
      }
      else{
        this.updateCoordinates(w, h, element);
      }
    }
    else{
      this.updateCoordinates(w, h, element);
    }




  }

  updateStyling(element,xCoord, yCoord){
    element.style.left=xCoord+'px';
    element.style.top=yCoord+'px';
    element.style.color = this.getRandomColor();
    //  element.style.fontSize = this.increaseFont()+'px';
    this.increaseFont();
  }

  increaseFont(){
    this.fontSize = this.fontSize + 1;
    console.log(this.fontSize);
    return this.fontSize;
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


}
