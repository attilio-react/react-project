import { combineReducers } from 'redux'

import {consts} from 'Common/Consts.jsx'

import {SEARCH_BY, SEARCH_TERM,
    GET_MOVIES, GET_MOVIE, GET_MOVIES_BY_GENRES} from './ActionTypes.jsx'

const initialState = {
          screen: consts.SEARCH_SCREEN,

          searchBy: consts.SEARCH_BY_TITLE,
          searchTerm: '',
          items: [],
          total: 0,
          sortBy: consts.SORT_BY_RELEASE_DATE,

          selectedMovie: null,
          selectedMovieGenres: [],
          sameGenreMovies: []
      }




function apiReducer(state = initialState, action) {
    const {payload, type} = action
    switch (type) {
        case GET_MOVIES:
                let newState =  Object.assign({}, state, {
                    items: payload.response.data,
                    total: payload.response.total
                })
                return newState
            break;
        case GET_MOVIE:
                return Object.assign({}, state, {
                    selectedMovie: payload.response,
                    selectedMovieGenres: payload.response.genres
                })
            break;
        case GET_MOVIES_BY_GENRES:
                return Object.assign({}, state, {
                    sameGenreMovies: payload.response
                })
            break;
        default:
            return state
            break;
    }
}

function guiReducer(state = initialState, action) {
    switch (action.type) {
	case SEARCH_BY:
	    return Object.assign({}, state, {
		searchBy: action.payload.by
	    })
	    break;
	case SEARCH_TERM:
	    return Object.assign({}, state, {
		searchTerm: action.payload.term
	    })
	    break;
	default:
            return state
	    break;
    }
}

const rouletteApp = combineReducers({
      guiReducer,
      apiReducer
})

export default rouletteApp
