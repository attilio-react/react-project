
export function getMovies(cb) {
    fetch('http://react-cdp-api.herokuapp.com/movies')
    .then(function(response) {
          return response.json();
    })
    .then(function(json) {
        cb(json)
    });
}

