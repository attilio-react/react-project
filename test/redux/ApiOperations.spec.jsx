import {getMovie, getMoviesByGenres} from '|redux/ApiOperations.jsx';

const EXCLUDE_ID = 42,
      MOVIE_ID = 43,
      RESPONSE = {"data":[{"id":1,"title":"Title","tagline":"Tagline","vote_average":6.1,"vote_count":1195,"release_date":"2018-02-07","poster_path":"http://path/to/poster.jpg","overview":"OVERVIEW","budget":1,"revenue":2,"genres":["Drama"],"runtime":3}],"total":1,"offset":0,"limit":10},
      DISPATCH = () => {

      }

describe('Getting movies based on genres', () => {
      beforeEach(() => {
          fetch.resetMocks()
      });

      it('Zero genres should return no movies', () => {
          const doneCallback = jest.fn()
          getMoviesByGenres([], EXCLUDE_ID, DISPATCH, doneCallback)
          expect(doneCallback).toBeCalledWith([], EXCLUDE_ID, [])
      });

      it('One genre should return a result', (done) => {
          fetch.mockResponseOnce(JSON.stringify(RESPONSE))
          getMoviesByGenres(['drama'], EXCLUDE_ID, DISPATCH, (result) => {
              expect(result).toEqual(['drama'], EXCLUDE_ID, RESPONSE.data)
              done()
          })
      });

      it('Movies should be fetched by ID', (done) => {
          fetch.mockResponseOnce(JSON.stringify(RESPONSE.data))
          getMovie(MOVIE_ID, DISPATCH, (result) => {
              expect(result).toEqual(MOVIE_ID, RESPONSE.data)
              done()
          })
      });
});

