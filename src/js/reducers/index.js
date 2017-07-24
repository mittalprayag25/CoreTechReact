import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import technology from "./technologyReducer"

export default combineReducers({
  tweets,
  user,
  technology,
})
