import React from 'react';

export default class Ecosystem extends React.Component{
  constructor(props){
    super(props);
    this.fontSize = 16;
    this.state = {technology : undefined};
  }

  render(){
    console.log("render");
    console.log(this.state.technology);
    var indents = [];
    if(this.state.technology != undefined){
      for (var i = 0; i < this.state.technology.length; i++) {
        indents.push(
          <span key={this.state.technology[i].tech} className="random"
          onClick={this.selectTech.bind(this)}>
          {this.state.technology[i].tech}
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

  selectTech(){
    console.log("selectTech");
  }

  getTechData(){
    let self = this;
    axios.get('http://localhost:8000/api/techStack?id=12')
    .then(function (response) {
      console.log(response);
      self.setState({technology: response.data.technology});
    })
    .catch(function (response) {
      console.log(response);
    });
  }

  componentWillMount() {
    this.getTechData();
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
