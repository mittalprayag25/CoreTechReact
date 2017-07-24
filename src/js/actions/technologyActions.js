import axios from 'axios';


export function getTechnology(){

  return function(dispatch){
    axios.get("http://localhost:8000/api/stack")
      .then((response) => {
        dispatch({type: "FETCH_TECH_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TECH_REJECTED", payload: err})
      })
  }
}

export function searchTech(technology) {
  return {
    type: 'SEARCH_TECH',
    payload: {
      technology
    },
  }
}

export function getTechData(technologyId){
  return function(dispatch){
    axios.get('http://localhost:8000/api/techStack?id='+technologyId)
      .then((response) => {
        dispatch({type: "FETCH_RELATED_TECH_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_RELATED_TECH_REJECTED", payload: err})
      })
  }
}
