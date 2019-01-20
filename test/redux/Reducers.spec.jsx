import {consts} from '|common/Consts.jsx'
import {GOTO_SCREEN,
        SEARCH_BY, SORT_BY, SEARCH_TERM,
        GET_MOVIES, GET_MOVIE_AND_DETAILS} from '|redux/ActionTypes.jsx'

import {guiReducer, apiReducer} from '|redux/Reducers.jsx';

describe('GUI reducer', () => {
    it('Should return initial state', () => {
        expect(guiReducer(undefined, {})).toEqual(
            {
                screen: consts.SEARCH_SCREEN,

                searchBy: consts.SEARCH_BY_TITLE,
                searchTerm: '',
                items: [],
                total: 0,
                sortBy: consts.SORT_BY_RELEASE_DATE,

                selectedMovie: {},
                selectedMovieGenres: [],
                sameGenreMovies: []
            })
    })

    it('Should work with GOTO_SCREEN', () => {
        expect(guiReducer(undefined, {
            type: GOTO_SCREEN,
            payload: {
                screen: consts.DETAILS_SCREEN
            }
        })).toEqual(
            {
                screen: consts.DETAILS_SCREEN,

                searchBy: consts.SEARCH_BY_TITLE,
                searchTerm: '',
                items: [],
                total: 0,
                sortBy: consts.SORT_BY_RELEASE_DATE,

                selectedMovie: {},
                selectedMovieGenres: [],
                sameGenreMovies: []
            })
    })

    it('Should work with SEARCH_BY', () => {
        expect(guiReducer(undefined, {
            type: SEARCH_BY,
            payload: {
                by: consts.SEARCH_BY_GENRE
            }
        })).toEqual(
            {
                screen: consts.SEARCH_SCREEN,

                searchBy: consts.SEARCH_BY_GENRE,
                searchTerm: '',
                items: [],
                total: 0,
                sortBy: consts.SORT_BY_RELEASE_DATE,

                selectedMovie: {},
                selectedMovieGenres: [],
                sameGenreMovies: []
            })
    })

    it('Should work with SORT_BY', () => {
        expect(guiReducer(undefined, {
            type: SORT_BY,
            payload: {
                by: consts.SORT_BY_RATING
            }
        })).toEqual(
            {
                screen: consts.SEARCH_SCREEN,

                searchBy: consts.SEARCH_BY_TITLE,
                searchTerm: '',
                items: [],
                total: 0,
                sortBy: consts.SORT_BY_RATING,

                selectedMovie: {},
                selectedMovieGenres: [],
                sameGenreMovies: []
            })
    })

    it('Should work with SEARCH_TERM', () => {
        expect(guiReducer(undefined, {
            type: SEARCH_TERM,
            payload: {
                term: "hello"
            }
        })).toEqual(
            {
                screen: consts.SEARCH_SCREEN,

                searchBy: consts.SEARCH_BY_TITLE,
                searchTerm: 'hello',
                items: [],
                total: 0,
                sortBy: consts.SORT_BY_RELEASE_DATE,

                selectedMovie: {},
                selectedMovieGenres: [],
                sameGenreMovies: []
            })
    })

    it('Should not change state if type is unknown', () => {
        expect(guiReducer(undefined, {
            type: 'unknown'
        })).toEqual(
            {
                screen: consts.SEARCH_SCREEN,

                searchBy: consts.SEARCH_BY_TITLE,
                searchTerm: '',
                items: [],
                total: 0,
                sortBy: consts.SORT_BY_RELEASE_DATE,

                selectedMovie: {},
                selectedMovieGenres: [],
                sameGenreMovies: []
            })
    })

});

describe('API reducer', () => {
    it('Should return initial state', () => {
        expect(apiReducer(undefined, {})).toEqual(
            {
                screen: consts.SEARCH_SCREEN,

                searchBy: consts.SEARCH_BY_TITLE,
                searchTerm: '',
                items: [],
                total: 0,
                sortBy: consts.SORT_BY_RELEASE_DATE,

                selectedMovie: {},
                selectedMovieGenres: [],
                sameGenreMovies: []
            })
    })

    it('Should work with GET_MOVIES', () => {
        expect(apiReducer(undefined, {
            type: GET_MOVIES,
            payload: {
                response: {
                    data: ['data'],
                    total: 10
                }
            }
        })).toEqual(
            {
                screen: consts.SEARCH_SCREEN,

                searchBy: consts.SEARCH_BY_TITLE,
                searchTerm: '',
                items: ['data'],
                total: 10,
                sortBy: consts.SORT_BY_RELEASE_DATE,

                selectedMovie: {},
                selectedMovieGenres: [],
                sameGenreMovies: []
            })
    })

    it('Should work with GET_MOVIE_AND_DETAILS', () => {
        const SELECTED_MOVIE = {
            title: 'Title',
            genres: ['Drama']
        },
            RELATED_MOVIE = {
                title: 'Title2',
                genres: ['Drama', 'Horror']
            }
        expect(apiReducer(undefined, {
            type: GET_MOVIE_AND_DETAILS,
            payload: {
                movie: SELECTED_MOVIE,
                related: [RELATED_MOVIE]
            }
        })).toEqual(
            {
                screen: consts.SEARCH_SCREEN,

                searchBy: consts.SEARCH_BY_TITLE,
                searchTerm: '',
                items: [],
                total: 0,
                sortBy: consts.SORT_BY_RELEASE_DATE,

                selectedMovie: SELECTED_MOVIE,
                selectedMovieGenres: ['Drama'],
                sameGenreMovies: [RELATED_MOVIE]
            })
    })

    it('Should not change state if type is unknown', () => {
        expect(apiReducer(undefined, {
            type: 'unknown'
        })).toEqual(
            {
                screen: consts.SEARCH_SCREEN,

                searchBy: consts.SEARCH_BY_TITLE,
                searchTerm: '',
                items: [],
                total: 0,
                sortBy: consts.SORT_BY_RELEASE_DATE,

                selectedMovie: {},
                selectedMovieGenres: [],
                sameGenreMovies: []
            })
    })

});

