import {consts} from '|common/Consts.jsx'
import {GOTO_SCREEN,
        SEARCH_BY, SORT_BY, SEARCH_TERM,
        GET_MOVIES, GET_MOVIE_AND_DETAILS} from '|redux/ActionTypes.jsx'

import {gotoScreen} from '|redux/ActionCreators.jsx';

describe('Action creators', () => {
    it('Should create GOTO_SCREEN action', () => {
        expect(gotoScreen(consts.DETAILS_SCREEN)).toEqual(
            {
                type: GOTO_SCREEN,
                payload: {
                    screen: consts.DETAILS_SCREEN
                }
            })
    })

});


