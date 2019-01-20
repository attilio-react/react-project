import {consts} from 'Common/Consts.jsx'

const BASE_URL = 'http://react-cdp-api.herokuapp.com/movies',
    NO_DISPATCH = null

export function getMovies(params, dispatch, cb) {
    const url = new URL(BASE_URL)
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url)
    .then(function(response) {
          return response.json();
    })
    .then(function(json) {
        if (dispatch === NO_DISPATCH) {
            cb(json)
        } else {
            dispatch(cb(params, json))
        }
    });
}

function getMoviesByGenresImpl(genres, excludeId, accum, dispatch, cb) {
    if (genres && genres.length > 0) {
        const genre = genres[0]
        let searchParams = {}
        searchParams[consts.PARAM_SEARCH_BY] = consts.VALUE_BY_GENRE
        searchParams[consts.PARAM_SEARCH] = genre
        getMovies(searchParams, NO_DISPATCH, json => {
            const newMovies = json.data.filter(movie => movie.id !== excludeId),
                newGenres = genres.slice(1)
            let newAccum = accum.concat(newMovies),
                newAccumNoDups = newAccum.filter((item, pos) => {
                    return pos === newAccum.findIndex(elem => elem.id === item.id)
                })
            getMoviesByGenresImpl(newGenres, excludeId, newAccumNoDups, dispatch, cb)
        })
    } else {
        dispatch(cb(genres, excludeId, accum))
    }
}

export function getMoviesByGenres(genres, excludeId, dispatch, cb) {
    getMoviesByGenresImpl(genres, excludeId, [], dispatch, cb)
}

export function getMovie(id, dispatch, cb) {
    const url = new URL(BASE_URL + '/' + id)
    fetch(url)
    .then(function(response) {
          return response.json();
    })
    .then(function(json) {
        dispatch(cb(id, json))
    });
}

