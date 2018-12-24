import {getMoviesByGenres} from '|ApiOperations.jsx';

const EXCLUDE_ID = 42

describe('Getting movies based on genres', () => {
      it('Zero genres should return no movies', () => {
          const doneCallback = jest.fn()
          getMoviesByGenres([], EXCLUDE_ID, doneCallback)
          expect(doneCallback).toBeCalledWith([])
      });
});

