import {SEARCH_BY,
        GET_MOVIES, GET_MOVIE, GET_MOVIES_BY_GENRES} from './ActionTypes.jsx'
import {getMovies} from './ApiOperations.jsx'

export function searchBy(by) {
    return {
        type: SEARCH_BY,
        payload: {
            by: by
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


