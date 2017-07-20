import React from 'react';
import * as axios from 'axios';
import { connect } from "react-redux";

import { fetchUser, setUserName } from "../../actions/userActions"
import { fetchTweets, addTweet ,updateTweet, deleteTweet} from "../../actions/tweetsActions"



@connect((store) => {
  console.log("connect");
  console.log(store);
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})

export default class TechStack extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { user, tweets } = this.props;
    console.log("user");
    // console.log("tweets");
    console.log(tweets);

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
    var searchTech = document.getElementById('tech_select').value.toLowerCase();
    var index = _.findIndex(this.state.technology, function(o) { return o.tech.toLowerCase() == searchTech; });
    var selectedObject = this.state.technology[index];
    this.props.history.push({pathname : '/techMap', state : {technology : selectedObject}});
  }
}
