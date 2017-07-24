import React from 'react';
import * as axios from 'axios';
import { connect } from "react-redux";

import { fetchUser, setUserName } from "./../../actions/userActions";
import { fetchTweets, addTweet ,updateTweet, deleteTweet} from "./../../actions/tweetsActions";
import { searchTech } from "./../../actions/technologyActions";



@connect((store) => {
  console.log("connect");
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
    technology: store.technology.technology
  };
})

export default class TechStack extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { user, tweets, technology } = this.props;
    console.log("user");
    // console.log("tweets");
    console.log(technology);

    return (
      <div>
        <input type="text" className="input_techStack" id="tech_select" placeholder="#Angularjs, #Android, #React"/>
        <span className="learn_button" onClick={this.search.bind(this)}></span>
      </div>
    )
  }

  // fetchTweets() {
  //   this.props.dispatch(fetchTweets())
  // }
  componentWillReceiveProps(nextProps) {
    this.setState({technology : nextProps.techData});
  }

  search(e){
    var tech = document.getElementById('tech_select').value.toLowerCase();
    var index = _.findIndex(this.state.technology, function(o) { return o.tech.toLowerCase() == tech; });
    var selectedObject = this.state.technology[index];
    this.props.dispatch(searchTech(selectedObject));
    this.props.history.push({pathname : '/techMap'});
  }
}
