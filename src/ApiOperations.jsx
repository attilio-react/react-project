
export function getMovies(params, cb) {
    const url = new URL('http://react-cdp-api.herokuapp.com/movies')
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url)
    .then(function(response) {
          return response.json();
    })
    .then(function(json) {
        cb(json)
    });
}

