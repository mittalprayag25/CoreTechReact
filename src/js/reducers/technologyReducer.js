export default function reducer(state={
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
    console.log("action.load");
      console.log(action.payload);
    switch (action.type) {
      case "SEARCH_TECH": {
        return {
          ...state,
          technology : action.payload.technology
        }
      }
      case "FETCH_RELATED_TECH_SUCCESS" : {
        return{
          ...state,
          relatedTech : action.payload.techStack[0]
        }
      }
    }

    return state
}
