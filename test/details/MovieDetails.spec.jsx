import * as React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';


import {MovieDetails} from '|details/MovieDetails.jsx';
import {DetailsContext} from '|details/DetailsContext.jsx';


const CONTEXT = {
    movie: {
        poster_path: 'http://hello.com/poster3.png',
        title: 'Movie Title3',
        vote_average: 4.3,
        release_date: '2013-01-01',
        runtime: 129,
        overview: 'This is a third movie about ....'
    },
    relatedGenres: ['Adventure', 'War', 'Thriller'],
    relatedMovies: [ 
        {
            poster_path: 'http://hello.com/poster.png',
            title: 'Movie Title',
            vote_average: 4.4,
            release_date: '2011-01-01',
            runtime: 129,
            overview: 'This is a movie about ....',
            genres: ['Horror', 'Thriller']
        },
        {
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


describe('MovieDetails rendering', () => {
  it('Should render', () => {
    const 
        component = renderer.create(
            <DetailsContext.Provider value = {CONTEXT}>
                <MovieDetails />
            </DetailsContext.Provider>
        ),
        json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});


