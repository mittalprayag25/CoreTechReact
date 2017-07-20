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

    // console.log("render");
    // const { user, tweets } = this.props;
    // console.log("user");
    // console.log(user);
    // console.log("tweets");
    // console.log(tweets);
    //
    // if (!tweets.length) {
    //   return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    // }
    //
    // const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)
    //
    // return <div>
    //   <h1>{user.name}{user.age}</h1>
    //   <ul>{mappedTweets}</ul>
    //   <button onClick={this.addTweet.bind(this)}>Add Tweet</button>
    //   <button onClick={this.setUserName.bind(this)}>Set Username</button>
    //   <button onClick={this.updateTweet.bind(this)}>Update Tweet</button>
    //   <button onClick={this.deleteTweet.bind(this, tweets[0])}>Add Tweet</button>
    // </div>
  }

  getTechData(){
    let self = this;
    axios.get('http://localhost:8000/api/stack')
    .then(function (response) {
      self.setState({technology : response.data.technology, filteredtechnology : response.data.technology});
    })
    .catch(function (response) {
      console.log(response);
    });
  }

  componentWillMount() {
    this.getTechData();
  }

  // componentWillMount() {
  //   console.log("compenentwillmount");
  //   this.props.dispatch(fetchUser())
  // }
  //
  // fetchTweets() {
  //   this.props.dispatch(fetchTweets())
  // }
  // addTweet(){
  //   this.props.dispatch(addTweet(5001, "This is my first test tweet"));
  // }
  // setUserName(){
  //   this.props.dispatch(setUserName("Prayag"));
  // }
  //
  // updateTweet(){
  //   this.props.dispatch(updateTweet("59427ba8b383bb0100636206", "Noiw here is sinsane value"));
  // }
  //
  // deleteTweet(selTweet){
  //   this.props.dispatch(deleteTweet(selTweet.id));
  // }
}
