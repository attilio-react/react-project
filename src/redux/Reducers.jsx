import {consts} from 'Common/Consts.jsx'

import {SEARCH_BY} from './ActionTypes.jsx'

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

export default function rouletteApp(state = initialState, action) {
    switch (action.type) {
	case SEARCH_BY:
	    return Object.assign({}, state, {
		searchBy: action.payload.by
	    })
	    break;
	default:
            return state
	    break;
    }
}


