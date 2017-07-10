import React from 'react';
import * as axios from 'axios';

import TechStack from './techstack'

export default class Home extends React.Component{
  constructor(){
    super();

  }

  render(){
    return (
      <div>
        <img src="./../../../img/slack.png" className="logo_img align_centre_in_page"/>
        <div className="stackContainer align_centre_in_page">
          <TechStack></TechStack>
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
}
