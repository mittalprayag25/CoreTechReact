import React from 'react';
import * as axios from 'axios';

import TechStack from './../component/techstack';
import { connect } from "react-redux"

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
export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {technology : "", filteredtechnology : ""};
  }

  render(){
    return (
      <div className="home_container">
        <img src="./../../../img/slack.png" className="logo_img align_centre_in_page"/>
        <div className="stackContainer align_centre_in_page">
          <TechStack techData={this.state.technology} history={this.props.history}></TechStack>
        </div>
        <span className="caption align_centre_in_page first">#AngularJs</span>
        <span className="caption align_centre_in_page second">#React</span>
        <span className="caption align_centre_in_page third">#Android</span>
        <span className="caption align_centre_in_page fourth">#Spring</span>
        <span className="caption align_centre_in_page fifth">#Hadoop</span>
        <span className="caption align_centre_in_page sixth">#iOS</span>
      </div>
    )
  }

  getTechData(){
    let self = this;
    axios.get('http://localhost:8000/api/stack')
    .then(function (response) {
      console.log(response);
      self.setState({technology : response.data.technology, filteredtechnology : response.data.technology});
    })
    .catch(function (response) {
      console.log(response);
    });
  }

  componentWillMount() {
    this.getTechData();
  }
}
