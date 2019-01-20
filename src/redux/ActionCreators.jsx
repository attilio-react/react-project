import {GOTO_SCREEN,
        SEARCH_BY, SORT_BY, SEARCH_TERM,
        GET_MOVIES, GET_MOVIE, GET_MOVIES_BY_GENRES} from './ActionTypes.jsx'
import {getMovies} from './ApiOperations.jsx'

export function gotoScreen(screen) {
    return {
        type: GOTO_SCREEN,
        payload: {
            screen: screen
        }
    }
}

export function searchBy(by) {
    return {
        type: SEARCH_BY,
        payload: {
            by: by
        }
    }
}

export function sortBy(by) {
    return {
        type: SORT_BY,
        payload: {
            by: by
        }
    }
}

export function searchTerm(term) {
    return {
        type: SEARCH_TERM,
        payload: {
            term: term
        }
    }
}

export function getMoviesRequest(params) {
    return dispatch => {
       return getMovies(params, dispatch, getMoviesResponse)
    }
}

export function getMoviesResponse(params, response) {
    return {
        type: GET_MOVIES,
        payload: {
            response: response
        }
    }
}

export function getMovieResponse(response) {
    return {
        type: GET_MOVIE,
        payload: {
            response: response
        }
    }
}


export function getMoviesByGenresResponse(response) {
    return {
        type: GET_MOVIES_BY_GENRES,
        payload: {
            response: response
        }
    }
}


