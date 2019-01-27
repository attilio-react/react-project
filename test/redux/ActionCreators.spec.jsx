import {consts} from '|common/Consts.jsx'
import {SEARCH_BY, SORT_BY, SEARCH_TERM,
        GET_MOVIES, GET_MOVIE_AND_DETAILS} from '|redux/ActionTypes.jsx'

import {searchBy} from '|redux/ActionCreators.jsx';

describe('Action creators', () => {
    it('Should create SEARCH_BY action', () => {
        expect(searchBy(consts.SEARCH_BY_GENRE)).toEqual(
            {
                type: SEARCH_BY,
                payload: {
                    by: consts.SEARCH_BY_GENRE
                }
            })
    })

});


