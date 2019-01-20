import {consts} from 'Common/Consts.jsx'

const BASE_URL = 'http://react-cdp-api.herokuapp.com/movies'

export function getMovies(params, dispatch, cb) {
    const url = new URL(BASE_URL)
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url)
    .then(function(response) {
          return response.json();
    })
    .then(function(json) {
        dispatch(cb(params, json))
    });
}

/*
function getMoviesByGenresImpl(genres, excludeId, accum, cb) {
    if (genres && genres.length > 0) {
        const genre = genres[0]
        let searchParams = {}
        searchParams[consts.PARAM_SEARCH_BY] = consts.VALUE_BY_GENRE
        searchParams[consts.PARAM_SEARCH] = genre
        getMovies(searchParams, json => {
            const newMovies = json.data.filter(movie => movie.id !== excludeId),
                newGenres = genres.slice(1)
            let newAccum = accum.concat(newMovies),
                newAccumNoDups = newAccum.filter((item, pos) => {
                    return pos === newAccum.findIndex(elem => elem.id === item.id)
                })
            getMoviesByGenresImpl(newGenres, excludeId, newAccumNoDups, cb)
        })
    } else {
        cb(accum)
    }
}

export function getMoviesByGenres(genres, excludeId, cb) {
    getMoviesByGenresImpl(genres, excludeId, [], cb)
}

export function getMovie(id, cb) {
    const url = new URL(BASE_URL + '/' + id)
    fetch(url)
    .then(function(response) {
          return response.json();
    })
    .then(function(json) {
        cb(json)
    });
}
*/
