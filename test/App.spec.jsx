import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

import {App} from '|App.jsx';
import {ResultItem} from '|common/ResultItem.jsx';
import {MovieData} from '|details/MovieData.jsx';
import {consts} from '|common/Consts.jsx';
import rouletteApp from '|redux/Reducers.jsx'


describe('Rendering', () => {
    it('Should render without results', () => {
        const 
            store = createStore(rouletteApp, applyMiddleware(thunkMiddleware)),
            component = renderer.create(<Provider store={store}><App /></Provider>),
            json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('Should render with results', () => {
        const 
        INITIAL_STATE = {
            apiReducer: {
                total: 10,
                items: [
                    {
                        id: 1,
                        poster_path: 'http://hello.com/poster.png',
                        title: 'Movie Title',
                        vote_average: 4.4,
                        release_date: '2011-01-01',
                        runtime: 129,
                        overview: 'This is a movie about ....',
                        genres: ['Horror', 'Thriller']
                    },
                    {
                        id: 2,
                        poster_path: 'http://hello.com/poster2.png',
                        title: 'Another Movie Title',
                        vote_average: 4.4,
                        release_date: '2012-02-02',
                        runtime: 139,
                        overview: 'This is another movie about ....',
                        genres: ['War', 'History']
                    }
                ]
            }
        },
            store = createStore(rouletteApp, INITIAL_STATE, applyMiddleware(thunkMiddleware)),
            component = mount(<Provider store={store}><App /></Provider>)

        expect(component.find(ResultItem).length).toBe(2);
    })

    it('Should render with details', () => {
        const 
        INITIAL_STATE = {
            guiReducer: {
                screen: consts.DETAIL_SCREEN
            },
            apiReducer: {
                selectedMovie: 
                {
                    id: 1,
                    poster_path: 'http://hello.com/poster.png',
                    title: 'Movie Title',
                    vote_average: 4.4,
                    release_date: '2011-01-01',
                    runtime: 129,
                    overview: 'This is a movie about ....',
                    genres: ['Horror', 'Thriller']
                },
                sameGenreMovies: [
                    {
                        id: 2,
                        poster_path: 'http://hello.com/poster2.png',
                        title: 'Another Movie Title',
                        vote_average: 4.4,
                        release_date: '2012-02-02',
                        runtime: 139,
                        overview: 'This is another movie about ....',
                        genres: ['War', 'History', 'Horror']
                    },
                    {
                        id: 3,
                        poster_path: 'http://hello.com/poster3.png',
                        title: 'Yet Another Movie Title',
                        vote_average: 4.5,
                        release_date: '2012-03-02',
                        runtime: 129,
                        overview: 'This is yet another movie about ....',
                        genres: ['Horror', 'History']
                    },
                    {
                        id: 4,
                        poster_path: 'http://hello.com/poster4.png',
                        title: 'And Yet Another Movie Title',
                        vote_average: 3.5,
                        release_date: '2013-03-02',
                        runtime: 127,
                        overview: 'This is yet another movie about ....',
                        genres: ['Horror', 'History', 'War']
                    }
                ],
                selectedMovieGenres: ['Horror', 'Thriller']
            }
        },
            store = createStore(rouletteApp, INITIAL_STATE, applyMiddleware(thunkMiddleware)),
            component = mount(<Provider store={store}><App /></Provider>)

        expect(component.find(ResultItem).length).toBe(3);
        expect(component.find(MovieData).length).toBe(1);
    });
});

